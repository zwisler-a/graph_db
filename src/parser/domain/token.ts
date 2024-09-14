export type Token = string;


class TokenIteratorController {
    private i: number = 0;

    constructor(private tokens: Token[]) {
    }

    hasNext() {
        return this.i < this.tokens.length;
    }

    get index() {
        return this.i;
    }

    next() {
        this.i++;
        return this.tokens[this.i];
    }

    captureUntil(terminatorTokens: Token[], opt = {excludeFirst: true}): Tokens {
        let currentTokens: Token[] = [];
        if (opt.excludeFirst) this.next();
        let token = this.tokens[this.index];
        while (!terminatorTokens.includes(token) && this.hasNext()) {
            this.next();
            currentTokens.push(token);
            token = this.tokens[this.index]
        }
        return Tokens.of(...currentTokens);
    }
}

export class Tokens {
    public readonly tokens: Token[];


    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    [Symbol.iterator](): Iterator<Token> {
        let index = 0;
        const items = this.tokens;

        return {
            next(): IteratorResult<Token> {
                if (index < items.length) {
                    return {value: items[index++], done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }

    forEach(cb: (token: Token, controller: TokenIteratorController) => void) {
        const controller = new TokenIteratorController(this.tokens);
        while (controller.hasNext()) {
            cb(this.tokens[controller.index], controller);
            controller.next();
        }
    }

    get(i: number) {
        return this.tokens[i];
    };

    get length() {
        return this.tokens.length;
    }

    static of(...token: Token[]) {
        return new Tokens(token);
    }
}