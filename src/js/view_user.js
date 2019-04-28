import User from './class_user.js';

class View_User {
    /**
     * 
     * @param {HTMLElement} container The surrounding container.
     * @param {User} user The player's stats.
     */
    constructor(container, user) {
        this.user = user;

        this.div = document.createElement("div");
        this.wallet = document.createElement("span");

        this.update();

        this.div.appendChild(this.wallet);
        container.appendChild(this.div);
    }

    update() {
        this.wallet.textContent = `You have $${this.user.wallet}`;
    }
}

export {View_User as default};
