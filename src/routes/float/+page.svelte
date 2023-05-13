<script>
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data;
	console.log(data);
	const { form, errors, enhance, constraints, message, delayed } = superForm(data.form, {
		resetForm: true
	});
	console.log(form);
	console.log($message);
	console.log('delayed: ' + $delayed);
</script>

<SuperDebug data={$form} />
<main class="p-5">
	{#if $delayed}
		<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
			<!-- ... -->
		</svg>
		Processing...
	{/if}
	{#if $message}
		<div class="message">{$message}</div>
	{/if}
	<form method="POST" use:enhance>
		<h1 class="text-xl">Login/ Sign In</h1>

		<div class="flex flex-col space-y-3 mt-5">
			<input
				type="text"
				name="firstName"
				id="firstName"
				class="input input-bordered w-full"
				placeholder={`First Name ${$errors.firstName ? ' This field is required' : ''}`}
				bind:value={$form.firstName}
				data-invalid={$errors.firstName}
				{...$constraints.firstName}
			/>
			{#if $errors.firstName}
				{$errors.firstName}
			{/if}

			<input
				type="text"
				name="phone"
				id="phone"
				class="input input-bordered w-full"
				placeholder="phone"
				bind:value={$form.phone}
				data-invalid={$errors.phone}
				{...$constraints.phone}
			/>
			{#if $errors.phone}
				{$errors.phone}
			{/if}

			<input
				type="text"
				name="email"
				id="email"
				class="input input-bordered w-full"
				placeholder="Email"
				bind:value={$form.email}
				data-invalid={$errors.email}
				{...$constraints.email}
			/>
			<!-- {#if $errors.email}
				{$errors.email}
			{/if} -->

			<button class="btn btn-primary">Submit</button>
		</div>
	</form>
</main>
