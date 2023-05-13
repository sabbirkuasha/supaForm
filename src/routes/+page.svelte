<script>
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;
	// $: console.log(data);

	const { form, errors, enhance, constraints } = superForm(data.form, {
		taintedMessage: "Don't Leave now",
		validators: {
			firstName: (firstName) => (firstName.length < 2 ? 'your name is too short' : null)
		}
	});
	console.log(form);

	// export let form;
	// $: console.log(form);
</script>

<SuperDebug data={$form} />

<main class="p-5">
	<h1 class="text-xl pb-2">Superform Learning</h1>
	<form method="POST" use:enhance>
		<div class="flex flex-col space-y-4">
			<input
				type="text"
				id="firstName"
				name="firstName"
				class="input input-bordered"
				placeholder="type your name"
				bind:value={$form.firstName}
			/>
			<!-- {...$constraints.firstName} -->

			{#if $errors.firstName}
				{$errors.firstName}
			{/if}

			<input
				type="text"
				id="lastName"
				name="lastName"
				class="input input-bordered"
				placeholder="type your last name"
				bind:value={$form.lastName}
				{...$constraints.lastName}
			/>
			{#if $errors.lastName}
				{$errors.lastName}
			{/if}

			<input
				type="text"
				id="email"
				name="email"
				class="input input-bordered"
				placeholder="type your email"
				bind:value={$form.email}
				{...$constraints.email}
			/>
			{#if $errors.email}
				{$errors.email}
			{/if}

			<input
				type="text"
				id="company"
				name="company"
				class="input input-bordered"
				placeholder="type your company"
				bind:value={$form.company}
				{...$constraints.company}
			/>
			{#if $errors.company}
				{$errors.company}
			{/if}

			<button class="btn btn-primary">Submit</button>
		</div>
	</form>
</main>
