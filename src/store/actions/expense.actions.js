import { expenseService } from "../../services/expense.service.local.js";
import { store } from "../store";

import {
    SET_EXPENSES,
    ADD_EXPENSE
} from "../reducers/expense.reducer";

export const expenseActions = {
    loadExpenses,
    addExpenses
};

async function loadExpenses(filterBy = {}) {
    try {
        const expenses = await expenseService.query();
        if (filterBy.category) {
            const filteredExpenses = expenses.filter((expense) => expense.category === filterBy.category)
            store.dispatch({ type: SET_EXPENSES, expenses: filteredExpenses });
        } else {
            store.dispatch({ type: SET_EXPENSES, expenses });
        }


    } catch (err) {
        console.log("Had issues loading expenses", err);
        throw err;
    }
}

async function addExpenses(expense) {
    try {
        await expenseService.post(expense);
        store.dispatch({ type: ADD_EXPENSE, expense });
    } catch (err) {
        console.log("Had issues loading expenses", err);
        throw err;
    }
}

