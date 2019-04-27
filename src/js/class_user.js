class User {
    constructor(wallet = 100) {
        this.wallet = wallet;
    }

    addWallet(amount) {
        this.wallet += amount;
    }

    subtractWallet(amount) {
        this.wallet -= amount;
    }
}

export {User as default};