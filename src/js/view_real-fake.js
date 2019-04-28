import User from './class_user.js';
import RealOrFake from './class_real-fake.js';

class View_RealOrFake {
    /**
     * Constructor for the view.
     * @param {HTMLElement} container The surrounding container of the view.
     * @param {User} user The player's stats.
     */
    constructor(container, user) {
        this.container = container;
        this.model = new RealOrFake(user);

        this.init();
    }

    init() {
        this.currentBillImg = document.createElement("img");
        this.currentBill = document.createElement("div");
        this.currentBill.innerText = this.model.currentBill.toString();
        this.currentBill.appendChild(this.currentBillImg);
        this.container.appendChild(this.currentBill);

        let realButton = document.createElement("button");
        realButton.innerText = "Real";
        realButton.addEventListener("click", () => {
            this.model.checkBill(true);
            this.currentBill.innerText = this.model.currentBill.toString();
        });
        this.container.appendChild(realButton);

        let fakeButton = document.createElement("button");
        fakeButton.innerText = "Fake";
        fakeButton.addEventListener("click", () => {
            this.model.checkBill(false);
            this.currentBill.innerText = this.model.currentBill.toString();
        });
        this.container.appendChild(fakeButton);
    }
}

export {View_RealOrFake as default};