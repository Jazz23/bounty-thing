<script lang="ts">
    import type { ChatCompletion } from "openai/resources/index.mjs";

    const mock: ChatCompletion = {
        choices: [
            {
                message: {
                    content: "They walked to and from the door. I can't believe it, there's something spooky in the air.",
                    role: "assistant",
                    refusal: null
                },
                finish_reason: "stop",
                index: 0,
                logprobs: null
            }
        ],
        id: "",
        created: 0,
        model: "gpt-4o-mini",
        object: 'chat.completion'
    }

    let { chatMessage = mock }: {chatMessage?: ChatCompletion | null } = $props();
</script>

<div class="flex">
    <div class="mr-2 p-5 shadow-xl rounded bg-blue-200">
        Narrator
    </div>
    <div class="bg-gray-200 p-5 shadow-xl rounded">
        {chatMessage?.choices[0].message.content}
    </div>
</div>
