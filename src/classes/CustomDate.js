
export default class CustomDate {

    #month;
    #year;
    #date;

    static getCurrentDate() {
        return new CustomDate();
    }

    static createCustomDate(year, month, date) {
        let localDate = new CustomDate();
        localDate.#year = year;
        localDate.#month = month;
        localDate.#date = date;
        return localDate;
    }

    static getNameOfTheDay(index) {
        const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday"];
        return names[index];
    }

    constructor() {
        const currentDate = new Date();
        this.#date = currentDate.getDate();
        this.#month = currentDate.getMonth() + 1;
        this.#year = currentDate.getFullYear();
    }

    getName() {
        const date = new Date();
        date.setFullYear(this.#year);
        date.setMonth(this.#month - 1);
        date.setDate(this.#date);
        return CustomDate.getNameOfTheDay(date.getDay());
    }

    getMonth() {
        return this.#month;
    }

    getYear() {
        return this.#year;
    }

    getDate() {
        return this.#date;
    }

    nextMonth() {
        this.#month++;
        if (this.#month > 12) {
            this.#month = 1;
            this.#year++;
        }
        return this;
    }

    previousMonth() {
        this.#month--;
        if (this.#month < 1) {
            this.#month = 12;
            this.#year--;
        }
        return this;
    }

    equals(customDate) {
        if (this.#date === customDate.getDate() &&
            this.#month === customDate.getMonth() && 
            this.#year === customDate.getYear())
            return true;
        return false;
    }

    toString() {
        return `${this.#year}-${this.#month}-${this.#date}`;
    }
}