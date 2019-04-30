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
        this.index = index;

        this.div = document.createElement("div");
        this.div.className = "store-item";

        this.billImage = document.createElement("img");

        this.description = document.createElement("span");
        this.price = document.createElement("span");

        this.button = document.createElement("button");
        this.button.textContent = "Buy";
        this.button.addEventListener("click", () => {
            if (this.model.purchase(this.index))
                user_view.updateWallet();
                user_view.updateCollection();
        });

        this.update();

        this.div.append(
            this.billImage, document.createElement("br"),
            this.description, document.createElement("br"),
            this.price, document.createElement("br"),
            this.button);

        container.append(this.div);
    }

    /**
     * Update the card's description to match the new store item.
     */
    update() {
        let item = this.model.listing[this.index];
        this.description.textContent = `${item.bill.toString()}${ item.price >= 200 ? " (mint condition)" : "" }`;
        this.price.textContent = `Price: $${item.price}`;
        this.billImage.src = item.bill.getImgUrl();

        if (user_view.user.wallet >= item.price) {
            this.button.disabled = false;
        } else {
            this.button.disabled = true;
        }
    }
}

export {StoreCard as default};