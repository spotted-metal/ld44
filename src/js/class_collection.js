import CURRENCIES from './bills/enum_currency.js';

class Collection {
    constructor() {
        this.currencies = [];

        for (let currency of CURRENCIES) {
            let entry = {
                country: currency.country_noun,
                unit: currency.currency_unit,
                notes: currency.currency_values.map( (value) => ({ value, have : false }) ),
            };

            this.currencies.push(entry);
        }
    }

    add(country, value) {
        this.currencies
            .find((c) => c.country === country)
            .notes
                .find((v) => v.value === value)
                .have = true;
    }
}

export {Collection as default};