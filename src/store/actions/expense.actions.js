import { expenseService } from "../../services/expense.service.js";
import { store } from "../store";

import {
    SET_EXPENSES,
    ADD_EXPENSE
} from "../reducers/expense.reducer";
import { utilService } from "../../services/util.service.js";

export const expenseActions = {
    loadExpenses,
    addExpenses
};

async function loadExpenses(filterBy = {}) {
    try {
        const expenses = await expenseService.query();


        if (filterBy.category) {
            const filteredExpenses = expenses.filter((expense) => expense.category.toLowerCase() === filterBy.category.toLowerCase())
            store.dispatch({ type: SET_EXPENSES, expenses: filteredExpenses });

        } else if (filterBy.date) {
            const filteredExpenses = expenses.filter(expense => {
                const expenseDate = utilService.getDate(expense.date);
                const filterDate = utilService.getDate(filterBy.date);
                return expenseDate === filterDate;
            })
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
        console.log("Had issues adding expenses", err);
        throw err;
    }
}

