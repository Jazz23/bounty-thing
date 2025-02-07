<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-gray-200">
	{@render children()}	
</div>