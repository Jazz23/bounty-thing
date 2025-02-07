<script>
	import ChatBubble from "$lib/components/chatBubble.svelte";
	import { mockNarrator, mockUser } from "$lib/mockData";
    
    let { data } = $props();
    const mock = true
</script>

{#if mock}
    {#each Array.from({ length: 4 }, (_, i) => i) as i}
    <div class="bg-gray-200 mr-10 ml-10 mt-5 flex justify-center">
        {#if i % 2 === 0}
            <ChatBubble narratorMessage={mockNarrator}/>
        {:else}
            <ChatBubble userMessage={mockUser}/>
        {/if}
    </div>
    {/each}
{/if}