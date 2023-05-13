import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const userMessage = z.object({
	name: z.string().min(2).max(64).trim(),
	email: z.string().email(),
	message: z.string().min(2).max(255).trim()
});

export const load = async (event) => {
	const form = await superValidate(event, userMessage);
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, userMessage);
		console.log(form);

		if (!form.valid) {
			message(form, 'Not valid');
		}

		return message(form, 'valid form');
	}
};
