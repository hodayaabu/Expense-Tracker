export const SET_EXPENSES = "SET_EXPENSES";

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
        default:
            return state;
    }
}
