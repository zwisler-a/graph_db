import {Tokens} from "../domain/token";

export function captureUntil(start: number, tokens: Tokens, terminatorTokens: Tokens) {
    let currentTokens: Tokens = [];
    let i = start;
    let token = tokens[start];
    while (!terminatorTokens.includes(token) && i < tokens.length) {
        i++;
        currentTokens.push(token);
        token = tokens[i]
    }

    return {
        endIndex: i,
        capture: currentTokens
    }
}


export function captureNextN(start: number, tokens: Tokens, n: number) {
    let currentTokens: Tokens = [];
    let i = start;

    for (let count = 0; count < n && i < tokens.length; count++, i++) {
        currentTokens.push(tokens[i]);
    }

    return {
        endIndex: i,
        capture: currentTokens
    };
}