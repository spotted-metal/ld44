import CURRENCIES from './enum_currency.js';
import Bill from './class_bill.js';

class BillFactory {

    /**
     * @private Helper class.
     * Creates a new bill of a random currency and value.
     * @param {boolean} isReal Real or fake bill.
     */
    createBill(isReal) {
        let randomCurrency = CURRENCIES[
            Math.floor(Math.random() * CURRENCIES.length)
        ];

        let randomValue = randomCurrency.currency_values[
            Math.floor(Math.random() * randomCurrency.currency_values.length)
        ];
        return new Bill(randomCurrency.country_noun, randomCurrency.country_adj, randomCurrency.currency_unit, randomValue, isReal);
    }

    /**
     * Create a bill that may be real or fake.
     */
    createRandomBill() {
        let isReal = Boolean(Math.floor(Math.random() * 2));
        return this.createBill(isReal);
    }

    /**
     * Create a bill that is guaranteed to be real.
     */
    createRealBill() {
        return this.createBill(true);
    }
}

export {BillFactory as default};