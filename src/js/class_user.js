import Collection from './class_collection.js';

class User {
    constructor(wallet = 100) {
        this.wallet = wallet;
        this.collection = new Collection();
    }

    addWallet(amount) {
        this.wallet += amount;
    }

    subtractWallet(amount) {
        this.wallet -= amount;
    }
}

export {User as default};