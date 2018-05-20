import DBClient from "../db/client";

export default class Expense {
    private description;
    private amount;

    constructor(description: string, amount: number) {
        this.description = description;
        this.amount = amount;
    }

    create() {
        const client = new DBClient();
        client.query(`INSERT INTO expenses (description,amount) values (\'${this.description}\',${this.amount})`);
    }
}