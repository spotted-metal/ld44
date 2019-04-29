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
        this.view = document.createElement("div");

        this.description = document.createElement("span");
        this.billImage = document.createElement("img");

        this.update();

        let realButton = document.createElement("button");
        realButton.innerText = "Real";
        realButton.className = "real";
        realButton.addEventListener("click", () => {
            this.model.checkBill(true);
            this.update();
        });

        let fakeButton = document.createElement("button");
        fakeButton.innerText = "Fake";
        fakeButton.className = "fake";
        fakeButton.addEventListener("click", () => {
            this.model.checkBill(false);
            this.update();
        });

        this.view.append(this.billImage, document.createElement("br"),
            this.description, document.createElement("br"),
            realButton, fakeButton
        );

        this.container.appendChild(this.view);
    }

    update() {
        this.description.textContent = this.model.currentBill.toString();
        this.billImage.src = this.model.currentBill.getImgUrl();
    }
}

export {View_RealOrFake as default};