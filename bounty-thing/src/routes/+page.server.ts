import { chatGPT } from "$lib/server/openai";
import type { ChatCompletion } from "openai/resources/index.mjs";

export async function load() {
    // const memes: ChatCompletion = await chatGPT("Say your name")
    // const idk = memes.choices[0].
    const memes = "hi"
    return {memes}
}