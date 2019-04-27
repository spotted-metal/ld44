import Bill from './bills/class_bill.js';

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

    purchase(amount) {
        if (this.price <= amount) {  // TODO: if user has enough money to buy
            // TODO: add to the user's collection
            // TODO: subtract the cost from the user's wallet
            console.log(`Purchased ${this.bill.toString()}.`);
            return {
                amount: amount - this.price,
                sale: true,
            };
        } else {
            console.log("Can't afford");
            return {
                amount: amount,
                sale: false,
            };
        }
    }
}

export {StoreItem as default};