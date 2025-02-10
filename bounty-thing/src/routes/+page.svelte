<script lang="ts">
	import ChatBubble from "$lib/components/chatBubble.svelte";
	import { mockNarrator, mockUser } from "$lib/mockData";
	import { onMount } from "svelte";
    
    let { data } = $props();
    let count = $state(0)
    let messageBoard: HTMLElement | undefined = $state()
    let chatBoxMessage: string | undefined = $state()
    let mostRecentMessage = $state()
    const mock = true
    const mockActiveConvo = false

    // Mocked message count
    function updateCount() {
        count = count + 1
    }

    onMount(() => {
        // Repeat fake messages over and over again
        if (mock && mockActiveConvo) {
            setInterval(updateCount, 500)
        }
    });

    // Auto scroll new messages to be at the bottom
    $effect(() => {
        mostRecentMessage;
        messageBoard!.scrollTop = messageBoard!.scrollHeight
    })

    $effect(() => {
        if (!chatBoxMessage) return;

        const len = chatBoxMessage.length
        if (chatBoxMessage.charAt(len-1) == '\n') {
            const message = chatBoxMessage
            chatBoxMessage = ""
            

        }
    })
</script>


<div class="flex justify-center">
    <div class="h-screen w-3/4 align-middle grid grid-rows-4 gap-4 p-10">
        <div class="row-span-3 overflow-auto" bind:this={messageBoard}>
            {#if mock}
                {#each Array.from({ length: count }, (_, i) => i) as i}
                <div class="mt-3">
                    {#if i % 2 === 0}
                        <ChatBubble narratorMessage={mockNarrator} bind:this={mostRecentMessage}/>
                    {:else}
                        <ChatBubble userMessage={mockUser} bind:this={mostRecentMessage}/>
                    {/if}
                </div>
                {/each}
            {/if}
        </div>
    
        <div class="row-span-1 shadow-lg rounded-xl p-5 bg-white">
            <textarea class="w-full h-full border-none outline-none" placeholder="..." bind:value={chatBoxMessage}></textarea>
        </div>
        
    </div>
</div>
