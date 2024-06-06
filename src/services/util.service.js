export const utilService = {
    makeId,
    getDate,
    createExpense,
    getDefaultFilter,
    loadFromStorage,
    saveToStorage,
    calcByCategory
}


function makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function getDate(time) {
    const dateObj = new Date(time)
    const month = dateObj.toLocaleString('en-IL', { month: 'short' })
    const day = dateObj.getDate()
    return `${month} ${day}`
}

function createExpense(category = '', amount = '', note = '') {
    const newExpense = {
        category,
        amount,
        note
    }

    return newExpense
}

function calcByCategory(expensesArr) {
    const totals = {};

    expensesArr.forEach(expense => {
        const category = expense.category;
        const amount = expense.amount;

        if (totals[category]) {
            totals[category] += amount;
        } else {
            totals[category] = amount;
        }
    });

    return Object.keys(totals).map(category => ({
        category: category,
        amount: totals[category]
    }));
}

function getDefaultFilter() {
    return { category: '', date: '' }
}

function saveToStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function loadFromStorage(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}