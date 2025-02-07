<script>
	import ChatBubble from "$lib/components/chatBubble.svelte";
    
    let { data } = $props();
</script>

<div class="bg-gray-200 m-10 flex justify-center">
    <ChatBubble />
</div>