import { combineReducers, compose, legacy_createStore as createStore } from "redux"
import { expenseReducer } from "./reducers/expense.reducer.js"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    expenseModule: expenseReducer,
})

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
