<script>
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data;
	// console.log(data);

	const { form, errors, message, enhance, constraints, capture, restore } = superForm(data.form, {
		taintedMessage: null
	});
	export const snapshot = { capture, restore };
	console.log($form);
	console.log($errors);
	console.log($message);
</script>

<SuperDebug data={$form} />
<main>
	<div>
		<div class="m-auto pt-5">
			<h1 class="text-center uppercase text-xl">send your profile</h1>
		</div>
		{#if $message}
			{$message}
		{/if}
		<form method="POST" use:enhance>
			<div id="formParent" class="p-5 flex flex-col space-y-5">
				<div class="flex flex-col space-y-2">
					<div class="flex flex-row space-x-3">
						<label for="name">Your Name</label>
						<span class="text-red-500 font-bold"
							>{#if $errors?.name}
								{$errors.name}
							{/if}</span
						>
					</div>
					<input
						type="text"
						placeholder="Your Name"
						name="name"
						class="input w-full input-bordered"
						bind:value={$form.name}
						{...$constraints.name}
					/>
				</div>
				<div class="flex flex-col space-y-2">
					<div class="flex flex-row space-x-3">
						<span class="">Your E-mail</span>
						<span class="text-red-500 font-bold"
							>{#if $errors?.email}
								{$errors.email}
							{/if}</span
						>
					</div>
					{#if $errors?.name}
						{$errors.name}
					{/if}

					{#if $errors?.message}
						{$errors.message}
					{/if}
					<input
						type="text"
						placeholder="Your email"
						name="email"
						class="input w-full input-bordered"
						bind:value={$form.email}
						{...$constraints.email}
					/>
				</div>
				<div class="flex flex-col space-y-2">
					<div class="flex flex-row space-x-3">
						<label for="name">Your Message (Optional)</label>
						<span class="text-red-500 font-bold"
							>{#if $errors?.message}
								{$errors.message}
							{/if}</span
						>
					</div>
					<input
						type="text"
						placeholder="Your Message"
						name="message"
						class="input w-full input-bordered"
						bind:value={$form.message}
						{...$constraints.message}
					/>
				</div>

				<button class="btn btn-primary">submit</button>
			</div>
		</form>
	</div>
</main>
