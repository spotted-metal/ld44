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

        this.update();

        this.div.appendChild(this.wallet);
        container.appendChild(this.div);
    }

    update() {
        this.wallet.textContent = `You have $${this.user.wallet}`;

        if (this.store_view) {
            this.store_view.updateCards();
        }
    }
}

export {View_User as default};
