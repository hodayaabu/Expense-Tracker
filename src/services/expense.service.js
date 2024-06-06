import Axios from "axios";

const axios = Axios.create({
    withCredentials: true,
});

const BASE_URL =
    window.process.env.NODE_ENV === "production"
        ? "/api/expense/"
        : "//localhost:3030/api/expense/";

export const expenseService = {
    query,
    post,
    remove,
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
    try {
        const { data: savedExpense } = await axios.post(BASE_URL, expense);
        return savedExpense;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// DELETE
async function remove(id) {
    try {
        const { data: deletedCount } = await axios.delete(`${BASE_URL}/${id}`);
        return deletedCount;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
