import ExpenseHandlers from "./../../src/handlers/expense";
import Expense from "./../../src/models/expense";

jest.mock('./../../src/models/expense');

const mockCreateExpense = jest.fn().mockReturnValue(Promise.resolve());
Expense.mockImplementation(() => {
    return {
        create: mockCreateExpense,
    };
});

describe("Expense Handler", () => {
    const amount = 100;
    const description = 'Tooth Floss';

    it("should return correct response", async () => {
        const req = {body: {data:{amount, description}}};
        const sendStub = jest.fn();
        const res = {send: sendStub};

        await ExpenseHandlers.create(req, res);

        expect(mockCreateExpense).toHaveBeenCalled();
    });

    afterEach(()=> {
        jest.resetAllMocks();
    });
});
