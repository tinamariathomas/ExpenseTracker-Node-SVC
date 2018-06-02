import { Client } from "pg";

export default class DBClient {
    private client;

    constructor() {
        this.client = new Client({
            database: "expense_tracker",
            host: "localhost",
            user: "tinamt",
        });
        this.client.connect();
    }

    public end() {
        this.client.end();
    }

    public insert(queryString: string) {
        this.client.query(queryString);
    }

    public select(queryString: string) {
        this.client.query(queryString)
            .then((res) => console.log(res.rows));
    }

}
