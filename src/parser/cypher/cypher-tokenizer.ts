export function tokenizeCypher(query: string) {
    const tokens: string[] = [];
    let currentToken = '';
    let inQuotes = false;

    for (let i = 0; i < query.length; i++) {
        const char = query[i];

        if (char === '"' || char === "'") {
            // Toggle quote state
            if (inQuotes) {
                if (currentToken.length > 0) {
                    tokens.push(currentToken + char);
                    currentToken = '';
                }
                inQuotes = false;
            } else {
                if (currentToken.length > 0) {
                    tokens.push(currentToken);
                    currentToken = '';
                }
                inQuotes = true;
                currentToken = char;
            }
        } else if (inQuotes) {
            // Inside quotes, collect characters for a token
            currentToken += char;
        } else if (/\s/.test(char) || /[{}[\]()\\,]/.test(char)) {
            // Delimiters or whitespace
            if (currentToken.length > 0) {
                tokens.push(currentToken);
                currentToken = '';
            }
            if (/[{}[\]()\\.,]/.test(char)) {
                tokens.push(char);
            }
        } else {
            // Collect alphanumeric or operators
            currentToken += char;
        }
    }

    // Push the last token if any
    if (currentToken.length > 0) {
        tokens.push(currentToken);
    }

    return tokens;

}