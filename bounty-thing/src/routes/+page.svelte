<script>
    let visible = $state(false)
    let { data } = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button onclick={() => visible = true}>Login</button>

{#if visible}
    <p>Logged in!</p>
{/if}
{data.response}