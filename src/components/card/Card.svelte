<script lang="ts">
    export let props: any;
</script>

<main class="col">
    <h1>Här vare kort</h1>
    <ul>
	    <li>
		    <p>{props.name}</p>
	    </li>
	    <li>
		    <p>{props.email}</p>
	    </li>
	    <li>
		    <p>{props.image}</p>
	    </li>
	    <li>
		    <p>{props.address}</p>
	    </li>
	    <li>
		    <p>{props.phone}</p>
	    </li>
	    <li>
		    <p>{props.pin}</p>
	    </li>
    </ul>
</main>

<style>
	main {
		text-align: left;
		padding: 1em;
		max-width: 350px;
        background-color: coral;
        border-radius: 5%;
	}
</style>
