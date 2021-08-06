<script lang="ts">
 	import Card from './components/card/Card.svelte'
 	import { onMount } from 'svelte'

	export let pageTitle: string;
    let items = [];
 	let numOfPeople = 1;
 	let options = Array.from({length: 10}, (_, i) => i+1);

 	onMount(async () => {
		getPeople()
		console.log(items)
		console.log(options)
	})

 	async function getPeople() {
		await fetch(`https://api.fejk.company/v1/people?amount=${numOfPeople}`)
		.then(r => r.json())
		.then(data => {
			items = data;
		});
	}

</script>

<main>
	<h1>{pageTitle}</h1>

	<section>
		<select
			name="people"
			bind:value={numOfPeople}
			on:change="{getPeople}"
		>
			{#each options as opt}
			<option value={opt}>
				{opt}
			</option>
			{/each}
		</select>
	</section>
	<section class="wrapper">
		{#each items as child}
			<Card props={child} />
		{/each}
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		display:flex;
		flex-direction: column;
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
