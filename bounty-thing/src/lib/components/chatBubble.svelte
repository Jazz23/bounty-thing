<script lang="ts">
    import type { ChatCompletion, ChatCompletionCreateParamsNonStreaming } from "openai/resources/index.mjs";

    interface Props {
        narratorMessage?: ChatCompletion
        userMessage?: ChatCompletionCreateParamsNonStreaming
    }

    let { narratorMessage, userMessage }: Props = $props();
</script>

<div class="flex">
    <div class="bg-white p-5 shadow-lg rounded-xl">
        {
            narratorMessage?.choices[0].message.content ??
            userMessage!.messages[0].content
        }
    </div>
</div>
