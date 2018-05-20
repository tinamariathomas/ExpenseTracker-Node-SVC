const { Client } = require('pg')

export default class DBClient{
    private client;

    constructor(){
        this.client = new Client({
            user: process.env.USERNAME,
            host: 'localhost',
            database: 'expense_tracker'
        });
        this.client.connect();
    }

    end(){
        this.client.end();
    }

    query(queryString: string){
        this.client.query(queryString)
            .then(res => console.log(res.rows[0]))
            .catch(e => console.error(e.stack))

    }

}