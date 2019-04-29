import Collection from './class_collection.js';
import Bill from './bills/class_bill.js';

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

    /**
     * Add a purchased bill to the player's collection.
     * @param {Bill} bill The bill to add to collection.
     */
    addToCollection(bill) {
        this.collection.add(bill.country_noun, bill.value);
    }
}

export {User as default};