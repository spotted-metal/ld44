import CURRENCIES from './enum_currency.js';
import Bill from './class_bill.js';

class BillFactory {

    createRandomBill() {
        let randomCurrency = CURRENCIES[
            Math.floor(Math.random() * CURRENCIES.length)
        ];
        let isReal = Boolean(Math.floor(Math.random() * 2));

        let randomValue = randomCurrency.currency_values[
            Math.floor(Math.random() * randomCurrency.currency_values.length)
        ];
        return new Bill(randomCurrency.country_adj, randomCurrency.currency_unit, randomValue, isReal);
    }
}

export {BillFactory as default};