import User from './class_user.js';
import BillFactory from './bills/class_bill-factory.js';
import BillChecker from './bills/class_bill-checker.js';

class RealOrFake {

    /**
     * @param {User} user The current user.
     */
    constructor(user) {
        this.user = user;
        this.factory = new BillFactory();
        this.checker = new BillChecker();
        this.currentBill = null;

        this.getNewBill();
    }

    getNewBill() {
        if (!this.currentBill) {
            this.currentBill = this.factory.createRandomBill();
            console.log(`This is a ${this.currentBill.toString()} (${this.currentBill.isReal ? "real" : "fake"}).`);
        } else {
            console.log("Please check your current bill first.");
            console.log(`It is a ${this.currentBill.toString()} (${this.currentBill.isReal ? "real" : "fake"}).`);
        }
    }

    checkBill(opinion) {
        let result = this.checker.checkBill(this.currentBill, opinion);
        if (result) {
            console.log("Correct!");
            this.user.addWallet(Math.floor(Math.random() * 10 + 1));
        } else {
            console.log("Aww, try again.");
        }
        this.currentBill = null;

        this.getNewBill();
    }
}

export {RealOrFake as default};