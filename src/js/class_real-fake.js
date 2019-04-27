import BillFactory from './class_bill-factory.js';
import BillChecker from './class_bill-checker.js';

class RealOrFake {
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
            console.log(`This is a ${this.currentBill.toString()}.`);
        } else {
            console.log("Please check your current bill first.");
            console.log(`It is a ${this.currentBill.toString()}.`);
        }
    }

    checkBill(opinion) {
        let result = this.checker.checkBill(this.currentBill, opinion);
        if (result) {
            console.log("Correct!");
            // TODO: reward the user
        } else {
            console.log("Aww, try again.");
        }
        this.currentBill = null;

        this.getNewBill();
    }
}

export {RealOrFake as default};