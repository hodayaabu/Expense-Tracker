import { useEffect, useState } from 'react'
import { ExpenseList } from '../comps/ExpenseList'
import { expenseActions } from '../store/actions/expense.actions'
import { useSelector } from "react-redux"
import { utilService } from '../services/util.service'

export function Home() {
    const [isAdding, setIsAdding] = useState(false)
    const [newExpense, setNewExpense] = useState(utilService.createExpense())
    const expenses = useSelector((storeState) => storeState.expenseModule.expenses);

    useEffect(() => {
        loadExpenses()
    }, [expenses])

    async function loadExpenses() {
        try {
            await expenseActions.loadExpenses();
        } catch (err) {
            console.log("Issues loading expenses ,", err);
        }
    }
    function handleIsAdding() {
        setIsAdding(!isAdding)
        if (!isAdding) setNewExpense(utilService.createExpense())
    }


    function handleChange(ev) {
        let { value, name: field, type } = ev.target
        switch (type) {
            case 'number':
                value = (+value || '')
                break;
            default:
                break;
        }
        setNewExpense((prevNewExpense) => ({ ...prevNewExpense, [field]: value }))
    }


    async function handleAddingExpense(ev) {
        ev.preventDefault()
        try {
            handleIsAdding()
            await expenseActions.addExpenses(newExpense);
        } catch (err) {
            console.log("Issues adding expenses ,", err);
        }
    }

    if (!expenses) return <div>Loading...</div>
    return (
        <section className='home'>
            <div>
                <h1 className='main-title'>Expense Tracker</h1>

                <div className="container">
                    {!isAdding ? (
                        <button className='add-new-expense' onClick={handleIsAdding}>ADD</button>
                    ) : (
                        <div className="add-new-expense">
                            <input
                                type="number"
                                name='amount'
                                value={newExpense.amount}
                                placeholder='Amount'
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name='note'
                                value={newExpense.note}
                                placeholder='Note'
                                onChange={handleChange}
                            />

                            <select
                                name="category"
                                value={newExpense.category}
                                onChange={handleChange}
                            >
                                <option value="">Category</option>
                                <option value="Food"> Food</option>
                                <option value="Transport"> Transport</option>
                                <option value="Utilities"> Utilities</option>
                                <option value="Shopping"> Shopping</option>
                                <option value="Other"> Other</option>
                            </select>

                            <button onClick={(ev) => handleAddingExpense(ev)}>add</button>
                            <button onClick={handleIsAdding}>close</button>
                        </div>

                    )}
                    <ExpenseList expenses={expenses} />
                </div>
            </div>
        </section>
    )
}