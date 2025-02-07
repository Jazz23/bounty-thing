<script lang="ts">
    import type { ChatCompletion, ChatCompletionCreateParamsNonStreaming } from "openai/resources/index.mjs";

    interface Props {
        narratorMessage?: ChatCompletion
        userMessage?: ChatCompletionCreateParamsNonStreaming
    }

    let { narratorMessage, userMessage }: Props = $props();
</script>

<div class="flex">
    <div class="mr-2 p-5 shadow-xl rounded bg-blue-200">
        { narratorMessage ? "Narrator" : "Player" }
    </div>
    <div class="bg-gray-200 p-5 shadow-xl rounded">
        {
            narratorMessage?.choices[0].message.content ??
            userMessage!.messages[0].content
        }
    </div>
</div>
