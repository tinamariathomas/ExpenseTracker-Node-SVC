import Expense from '../models/expense';

const createExpenseHandler = (req, res) => {
    const {description, amount} = req.body.data;

    new Expense(description, amount).create();
    res.send(200);
};

export default {
    create: createExpenseHandler
}