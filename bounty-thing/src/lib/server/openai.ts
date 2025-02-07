import { OPENAI_API_KEY } from "$env/static/private"
import OpenAI from 'openai'

const client = new OpenAI({
    apiKey: OPENAI_API_KEY
})

export function chatGPT(prompt: string) {
    return client.chat.completions.create({
        messages: [{role: "user", content: prompt}],
        model: "gpt-4o-mini"
    });
}