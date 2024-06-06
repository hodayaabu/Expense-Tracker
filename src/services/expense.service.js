import Axios from "axios";

const axios = Axios.create({
    withCredentials: true,
});

// const BASE_URL =
//     window.process.env.NODE_ENV === "production"
//         ? "/api/expense/"
//         : "//localhost:3030/api/expense/";

const BASE_URL = "//localhost:3030/api/expense/";

export const expenseService = {
    query,
    post,
};

// Get List
async function query() {
    try {
        const { data: expenses } = await axios.get(BASE_URL);
        return expenses;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// POST
async function post(expense) {
    console.log(expense);
    try {
        const { data: savedExpense } = await axios.post(BASE_URL, expense);
        console.log(savedExpense);
        return savedExpense;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
