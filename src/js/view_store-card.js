import Store from './class_store.js';

import {user_view} from './main.js';

class StoreCard {
    /**
     * Constructor for the store card.
     * @param {HTMLElement} container The surrounding container of the store card.
     * @param {Store} store Store model that contains the store item.
     * @param {number} index The index in the listing that this card is tied to.
     */
    constructor(container, store, index) {
        this.model = store;

        this.div = document.createElement("div");

        this.description = document.createElement("span");
        this.price = document.createElement("span");

        this.update(index);

        this.button = document.createElement("button");
        this.button.textContent = "Buy";
        this.button.addEventListener("click", () => {
            if (this.model.purchase(index)) {
                this.update(index);
                user_view.update();
            }
        });

        this.div.append(this.description, document.createElement("br"),
            this.price, document.createElement("br"),
            this.button);

        container.append(this.div);
    }

    /**
     * Update the card's description to match the new store item.
     * @param {number} index Index from which the information will be pulled.
     */
    update(index) {
        this.description.textContent = this.model.listing[index].bill.toString();
        this.price.textContent = `Price: $${this.model.listing[index].price}`;
    }
}

export {StoreCard as default};