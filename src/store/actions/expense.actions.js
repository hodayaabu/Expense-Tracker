import { expenseService } from "../../services/expense.service.local.js";
import { store } from "../store";

import {
    SET_EXPENSES,
} from "../reducers/expense.reducer";

export const expenseActions = {
    loadExpenses,
};

async function loadExpenses() {
    try {
        const expenses = await expenseService.query();
        store.dispatch({ type: SET_EXPENSES, expenses });
    } catch (err) {
        console.log("Had issues loading expenses", err);
        throw err;
    }
}
