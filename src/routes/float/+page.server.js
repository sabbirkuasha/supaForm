import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const loginSchema = z.object({
	firstName: z.string().min(2, 'First name must be at least 2 characters long').trim(),
	phone: z.string().min(11, 'Phone number must contain at least 11 characters').trim(),
	email: z.string().email()
});

export const load = async (event) => {
	const form = await superValidate(event, loginSchema);
	console.log('load function----------------');
	console.log(form);
	return { form };
};

export const actions = {
	default: async (event) => {
		await new Promise((r) => setTimeout(r, 2000));

		const form = await superValidate(event, loginSchema);
		console.log('default actions----------------');
		console.log(form);

		if (!form.valid) {
			return fail(400, { form });
			// return message(form, 'Invalid form');
		}
		// return { form };
		return message(form, 'Valid form!');
	}
};
