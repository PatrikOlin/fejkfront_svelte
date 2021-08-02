<script lang="ts">
 	import Card from './components/card/Card.svelte'
 	import { onMount } from 'svelte'

	export let pageTitle: string;
    let items = [];

 	onMount(async () => {
		const res = await fetch('https://api.fejk.company/v1/people?amount=2')
		items = await res.json()
		console.log(items)
	})
</script>

<main>
	<h1>{pageTitle}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#each items as child}
	<Card props={child} />
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
