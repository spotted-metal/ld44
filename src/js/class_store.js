import User from './class_user.js';
import BillFactory from './bills/class_bill-factory.js';
import StoreItem from './class_store-item.js';


const NUMBER_OF_LISTINGS = 10; 
class Store {

    /**
     * Constructor for a store to buy antique bills.
     * @param {User} user Current user.
     */
    constructor(user) {
        this.user = user;
        this.factory = new BillFactory();
        /** @type {StoreItem[]} */
        this.listing = [];
    }

    /**
     * Creates a new store item to sell a bill.
     * @returns A new StoreItem with a price.
     */
    createNewStoreItem() {
        let bill = this.factory.createRealBill();
        return new StoreItem(bill);
    }

    /**
     * Populate the listing with a whole bunch of store items.
     */
    createNewListing() {
        if (this.listing.length == 0) {
            for (let i = 0; i < NUMBER_OF_LISTINGS; i++) {
                this.listing[i] = this.createNewStoreItem();
            }
        }
    }

    /**
     * Clear out the listing to prepare for a new listing.
     */
    clearListing() {
        this.listing = [];
    }

    purchase(index) {
        let purhcaseSuccessful = this.listing[index].purchase(this.user);
        if (purhcaseSuccessful) {
            // replace with a new store item
            this.listing[index] = this.createNewStoreItem();
        }
    }
}

export {Store as default};