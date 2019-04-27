class Bill {
    /**
     * Create a bill object.
     * @param {string} country The country of origin (adjectival form).
     * @param {string} currencyUnit Currency unit of the bill.
     * @param {number} value The nominal value of the bill.
     * @param {boolean} isReal Whether the bill is real or not.
     */
    constructor(country, currencyUnit, value, isReal) {
        this.country = country;
        this.currencyUnit = currencyUnit;
        this.value = value;
        this.isReal = isReal;
    }

    /** @returns A formatted string describing the bill. */
    toString() {
        return `${this.country} ${this.currencyUnit}${this.value} bill`;
    }
}

export {Bill as default};