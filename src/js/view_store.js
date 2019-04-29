import User from './class_user.js';
import Store from './class_store.js';
import StoreCard from './view_store-card.js';

class View_Store {
    /**
     * Constructor for the view.
     * @param {HTMLElement} container The surrounding container of the view.
     * @param {User} user The player's stats.
     */
    constructor(container, user) {
        this.container = container;
        this.model = new Store(user);

        this.model.createNewListing();

        this.init();

        console.log(this.model.listing);
    }

    init() {
        /** @type {StoreCard[]} */
        this.listing = [];

        for (let i = 0; i < this.model.listing.length; i++) {
            this.listing[i] = new StoreCard(this.container, this.model, i);
        }
    }

    /**
     * Update the buttons on the store.
     */
    updateCards() {
        for (const card of this.listing) {
            card.update();
        }
    }
}

export {View_Store as default};