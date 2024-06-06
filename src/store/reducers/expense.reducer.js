export const SET_EXPENSES = "SET_EXPENSES";
export const ADD_EXPENSE = "  ADD_EXPENSE";
export const DELETE_EXPENSE = "  DELETE_EXPENSE";
export const UPDATE_EXPENSE = "  UPDATE_EXPENSE";

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
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense._id !== action.expenseId),
            };
        case UPDATE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses?.map((expense) =>
                    expense._id === action.expense._id ? action.expense : expense
                ),
            };
        default:
            return state;
    }
}
