export const SET_EXPENSES = "SET_EXPENSES";
export const ADD_EXPENSE = "  ADD_EXPENSE";

const initialState = {
    expenses: null,
};

export function expenseReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_EXPENSES:
            return {
                ...state,
                expenses: action.expenses,
            };
        case ADD_EXPENSE:
            return {
                ...state,
                tasks: [...state.expenses, action.expense],
            };
        default:
            return state;
    }
}
