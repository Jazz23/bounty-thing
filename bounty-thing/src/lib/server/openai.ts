import { OPENAI_API_KEY } from "$env/static/private"
import OpenAI from 'openai'

const client = new OpenAI({
    apiKey: OPENAI_API_KEY
})

export async function chatGPT(prompt: string): Promise<string> {
    const chatCompletion = await client.chat.completions.create({
        messages: [{role: "user", content: "hi there"}],
        model: "gpt-4o-mini"
    });

    return await chatCompletion.choices[0].message.content!
}