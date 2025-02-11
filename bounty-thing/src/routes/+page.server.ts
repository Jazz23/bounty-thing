import { chatGPT } from "$lib/server/openai";
import type { ChatCompletion } from "openai/resources/index.mjs";
import type { Actions } from "./$types";

// https://svelte.dev/docs/kit/load
export async function load() {
    // const memes: ChatCompletion = await chatGPT("Say your name")
    // const idk = memes.choices[0].
    const memes = "hi"
    return {memes}
}

// https://svelte.dev/docs/kit/form-actions
export const actions = {
    chatMessage: async ({ request }) => {
        const data = await request.formData();
        const message = data.get("chatBoxMessage");
        console.log()
        return "Hi"
    }
} satisfies Actions