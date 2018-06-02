import ExpenseHandlers from "./../../src/handlers/expense";
import Expense from "./../../src/models/expense";

jest.mock('./../../src/models/expense');

describe("Expense Handler", () => {
    const amount = 100;
    const description = 'Tooth Floss';
    let mockCreateExpense;
    
    beforeEach(() => {
        mockCreateExpense = jest.fn().mockReturnValue(Promise.resolve());
        Expense.mockImplementation(() => {
            return {
                create: mockCreateExpense,
            };
        });

    });

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
