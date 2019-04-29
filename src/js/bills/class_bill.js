class Bill {
    /**
     * Create a bill object.
     * @param {string} country The country of origin (adjectival form).
     * @param {string} currencyUnit Currency unit of the bill.
     * @param {number} value The nominal value of the bill.
     * @param {boolean} isReal Whether the bill is real or not.
     */
    constructor(country_noun, country_adj, currencyUnit, value, isReal) {
        this.country_noun = country_noun;
        this.country_adj = country_adj;
        this.currencyUnit = currencyUnit;
        this.value = value;
        this.isReal = isReal;
    }

    /** @returns A formatted string describing the bill. */
    toString() {
        return `${this.country_adj} ${this.currencyUnit}${this.value} bill` + ", url: " + this.getImgUrl();
    }

    getImgUrl() {
        return `images/bills_${this.country_noun.toLowerCase()}/${this.value}_${this.isReal ? "r" : "f"}.png`;
    }
}

export {Bill as default};