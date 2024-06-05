
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'expenseDB'

_createExpenses()

export const expenseService = {
    query,
    post
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function post(expense) {
    return storageService.post(STORAGE_KEY, expense)
}

function _createExpenses() {
    let expenses = utilService.loadFromStorage(STORAGE_KEY)
    if (!expenses || !expenses.length) {
        expenses = [
            {
                _id: utilService.makeId(),
                amount: 300,
                category: 'Food',
                note: null,
                date: Date.now()
            },

        ]
        utilService.saveToStorage(STORAGE_KEY, expenses)
    }
}