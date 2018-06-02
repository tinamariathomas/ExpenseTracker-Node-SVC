import DBClient from "../db/client";

export default class Expense {
    public create(description, amount) {
        const client = new DBClient();
        client.insert(`INSERT INTO expenses (description,amount) values (\'${description}\',${amount})`);
    }
}
