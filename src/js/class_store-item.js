import Bill from './bills/class_bill.js';
import User from './class_user.js';

class StoreItem {
    /**
     * Store entry for antique bill.
     * @param {Bill} bill Bill that is to be sold.
     * @param {number} price Asking price for the bill.
     */constructor(bill) {
        this.bill = bill;
        this.setPrice();
    }

    setPrice(price =
        Math.floor(Math.random() * 15) * 10 + 100
    ) {
        this.price = price;
    }

    /**
     * Purchase a bill.
     * @param {User} user The purchasing user.
     */
    purchase(user) {
        if (this.price <= user.wallet) {
            // TODO: add to the user's collection
            user.subtractWallet(this.price);
            user.addToCollection(this.bill);
            console.log(`Purchased ${this.bill.toString()}.`);
            return true;
        } else {
            console.log("Can't afford");
            return false;
        }
    }
}

export {StoreItem as default};