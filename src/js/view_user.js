import User from './class_user.js';
import Store from './view_store.js';

class View_User {
    /**
     * 
     * @param {HTMLElement} container The surrounding container.
     * @param {User} user The player's stats.
     */
    constructor(container, user) {
        this.user = user;
        /** @type {Store} */
        this.store_view = null;

        this.div = document.createElement("div");
        this.wallet = document.createElement("span");

        this.updateWallet();

        let collection = document.createElement("div");

        for (let currency of this.user.collection.currencies) {
            let country = document.createElement("span");
            country.textContent = currency.country;

            collection.appendChild(country);

            for (let note of currency.notes) {
                let entry = document.createElement("span");
                entry.id = `${currency.country}_${note.value}`;
                entry.className = "do-not-have";
                entry.textContent = `${currency.unit}${note.value}`;

                collection.appendChild(entry);
            }

            collection.appendChild(document.createElement("br"));
        }


        this.div.append(
            "You have $", this.wallet, document.createElement("br"),
            "Your collection:", document.createElement("br"),
            collection
        );

        container.appendChild(this.div);
    }

    updateWallet() {
        this.wallet.textContent = this.user.wallet;

        if (this.store_view) {
            this.store_view.updateCards();
        }
    }

    updateCollection() {
        for (let currency of this.user.collection.currencies) {
            for (let note of currency.notes) {
                let entry = document.getElementById(`${currency.country}_${note.value}`);
                entry.className = note.have ? "have" : "do-not-have";
            }
        }
    }
}

export {View_User as default};
