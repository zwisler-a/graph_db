import {Token, Tokens} from "../domain/token";

export function captureUntil(start: number, tokens: Tokens, terminatorTokens: Token[]) {
    let currentTokens: Token[] = [];
    let i = start;
    let token = tokens[start];
    while (!terminatorTokens.includes(token) && i < tokens.length) {
        i++;
        currentTokens.push(token);
        token = tokens[i]
    }

    return {
        endIndex: i,
        capture: Tokens.of(...currentTokens)
    }
}

