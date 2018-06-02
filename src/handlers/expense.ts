import Expense from "../models/expense";

const createExpenseHandler = async (req, res) => {
    const {description, amount} = req.body.data;

    await new Expense().create(description, amount);

    res.send(200);
};

export default {
    create: createExpenseHandler,
};
