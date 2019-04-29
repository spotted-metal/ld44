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
        this.currentBillImg.style.width = "100%";
        this.currentBillImg.style.maxWidth = "1200px";

        this.currentBill = document.createElement("div");
        
        this.container.appendChild(this.currentBill);

        this.update();

        let realButton = document.createElement("button");
        realButton.innerText = "Real";
        realButton.addEventListener("click", () => {
            this.model.checkBill(true);
            this.update();
        });
        this.container.appendChild(realButton);

        let fakeButton = document.createElement("button");
        fakeButton.innerText = "Fake";
        fakeButton.addEventListener("click", () => {
            this.model.checkBill(false);
            this.update();
        });
        this.container.appendChild(fakeButton);
    }

    update() {
        this.currentBill.textContent = this.model.currentBill.toString();
        this.currentBillImg.src = this.model.currentBill.getImgUrl();
        this.currentBill.appendChild(this.currentBillImg);
    }
}

export {View_RealOrFake as default};