import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const newContactSchema = z.object({
	firstName: z.string().min(1).trim(),
	lastName: z.string().min(1).trim(),
	email: z.string().min(1).trim(),
	company: z.string().min(1).trim()
});

export const load = async (event) => {
	const form = await superValidate(event, newContactSchema);
	return { form };
};

export const actions = {
	default: async (event) => {
		const form_Data = await superValidate(event, newContactSchema);
		console.log(form_Data);

		if (!form_Data.valid) {
			return fail(400, { form_Data });
		}
		return { form_Data };
	}
};
