<script lang="ts">
	import ChatBubble from "$lib/components/chatBubble.svelte";
	import { mockNarrator, mockUser } from "$lib/mockData";
	import { onMount } from "svelte";
    
    const mock = true
    const mockActiveConvo = false

    let { data, form } = $props();
    let count = $state(mock ? 3 : 0)
    let messageBoard: HTMLElement | undefined = $state()
    let chatBoxMessage: string | undefined = $state()
    let chatBoxForm: HTMLFormElement | undefined = $state()
    let mostRecentMessage = $state()

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

    function onChatBoxKeyDown(e: KeyboardEvent) {
        if (e.key !== "Enter") return;

        const chatBox = e.target as HTMLTextAreaElement
        const message = chatBox.value // TODO: Preprocess message/perform checks

        chatBoxForm!.submit()
    }
</script>

<!-- Flexbox to center everything on the page -->
<div class="flex justify-center">
    <!-- 4 grid rows, 2 items in total. 3 rows are taken up by the first element... -->
    <div class="grid grid-rows-4 gap-4 p-10 h-screen w-3/4 align-middle">
        <!-- Overflow auto for the scrollbar -->
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
    
        <!-- ...and 1 is taken up by the last, the chat box -->
        <form method="POST" action="?/chatMessage" class="row-span-1 shadow-lg rounded-xl p-5 bg-white" bind:this={chatBoxForm}>
                <textarea name="chatBoxMessage" class="w-full h-full border-none outline-none" placeholder="..." onkeydown={onChatBoxKeyDown}></textarea>
        </form>
    </div>
</div>
