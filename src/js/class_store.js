import StoreItem from './class_store-item.js';
import BillFactory from './bills/class_bill-factory.js';


const NUMBER_OF_LISTINGS = 10; 
class Store {

    constructor(user) {
        this.user = user;
        this.factory = new BillFactory();
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

    createNewListing() {
        if (this.listing.length == 0) {
            for (let i = 0; i < NUMBER_OF_LISTINGS; i++) {
                this.listing[i] = this.createNewStoreItem();
            }
        }
    }

    clearListing() {
        this.listing = [];
    }

    purchase(index) {
        let {amount, sale} = this.listing[index].purchase(0); // TODO: pass in user's wallet
        if (sale)
            // TODO: subtract user's wallet
            // replace with a new store item
            this.listing[index] = this.createNewStoreItem();
        }
    }
}

export {Store as default};