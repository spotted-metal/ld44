import Bill from './class_bill.js';

class BillChecker {
    /**
     * Check whether the player correctly identifies a bill as real or fake.
     * @param {Bill} bill The current bill under inspection.
     * @param {boolean} opinion Whether the player thinks it is real of fake.
     */
    checkBill(bill, opinion) {
        return bill.isReal === opinion;
    }
}

export {BillChecker as default};