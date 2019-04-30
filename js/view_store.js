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
        this.div = document.createElement("div");

        /** @type {StoreCard[]} */
        this.listing = [];

        this.model.createNewListing();

        this.init();

        this.container.appendChild(this.div);
    }

    init() {
        for (let i = 0; i < this.model.listing.length; i++) {
            this.listing[i] = new StoreCard(this.div, this.model, i);
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

    clear() {
        this.listing = [];
        this.div.innerHTML = "";
    }
}

export {View_Store as default};