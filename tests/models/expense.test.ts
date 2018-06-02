import Expense from './../../src/models/expense';
import DBClient from "./../../src/db/client";

jest.mock('./../../src/db/client');

describe("Expense Model", () => {
    let mockDBInsert;

    beforeEach(() => {
       mockDBInsert = jest.fn().mockReturnValue(Promise.resolve());
        DBClient.mockImplementation(() => ({
            insert: mockDBInsert
        }));
    });

    it("should create new expense in database", async () => {
        const expense = new Expense();
        const description = 'Hello World';
        const amount = 1000;

        await expense.create(description, amount);

        expect(mockDBInsert).toHaveBeenCalled();
    });

    afterEach(() => {
       jest.resetAllMocks();
    });

});
