import type { ChatCompletion, ChatCompletionCreateParamsNonStreaming } from "openai/resources/index.mjs"

export const mockNarrator: ChatCompletion = {
    choices: [
        {
            message: {
                content: "They walked to and from the door. I can't believe it, there's something spooky in the air. I don't know what it is, but if someone else is reading this then Justin has onboarded them and he's a happy feller!",
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

export const mockUser: ChatCompletionCreateParamsNonStreaming = {
    messages: [
        { 
            content: "I arrive at the ship. \"Who goes there?\" I exclaim.", 
            name: "user", 
            role: "user" 
        }
    ],
    model: "gpt-4o-mini"
}