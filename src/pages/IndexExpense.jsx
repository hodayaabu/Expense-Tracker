import { useEffect, useState } from 'react'
import { ExpenseList } from '../comps/ExpenseList'
import { expenseActions } from '../store/actions/expense.actions'
import { useSelector } from "react-redux"
import { utilService } from '../services/util.service'

export function IndexExpense() {
    const [isAdding, setIsAdding] = useState(false)
    const [newExpense, setNewExpense] = useState(utilService.createExpense())
    const [filterBy, setFilterBy] = useState(utilService.getDefaultFilter())

    const expenses = useSelector((storeState) => storeState.expenseModule.expenses);
    const user = useSelector((storeState) => storeState.userModule.user);

    useEffect(() => {
        loadExpenses()
    }, [expenses, filterBy])

    async function loadExpenses() {
        try {
            await expenseActions.loadExpenses(filterBy);
        } catch (err) {
            console.log("Issues loading expenses ,", err);
        }
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

    function handleChangeFilter(ev) {
        let { value, name: field } = ev.target
        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
    }


    if (!expenses) return <div>Loading...</div>
    return (
        <section>
            <div>
                <h1 className='main-title'>Expense Tracker</h1>

                <div className="expenses-index">
                    <div className="actions">
                        {!isAdding ? (
                            <button className='btn' onClick={handleIsAdding}>Add</button>
                        ) : (
                            <div className="add-new-expense form">
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

                                <div >
                                    <select
                                        className="category"
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
                                </div>

                                <div className="buttons">
                                    <button className='btn' onClick={(ev) => handleAddingExpense(ev)}>add</button>
                                    <button className='btn' onClick={handleIsAdding}>close</button>
                                </div>
                            </div>
                        )}

                        <div className="filter-by-date">
                            <label htmlFor="date">Filter By Date:</label>
                            <input type="text" name='date' value={filterBy.date} placeholder='yyyy-mm-dd' onChange={handleChangeFilter} />
                        </div>

                        <select className='filter-by-category '

                            name="category"
                            value={filterBy.category}
                            onChange={handleChangeFilter}
                        >


                            <option className='option' value="">Filter By Category</option>
                            <option className='option' value="Food"> Food</option>
                            <option className='option' value="Transport"> Transport</option>
                            <option className='option' value="Utilities"> Utilities</option>
                            <option className='option' value="Shopping"> Shopping</option>
                            <option className='option' value="Other"> Other</option>
                        </select>

                    </div>
                    <ExpenseList />
                </div>
            </div>
        </section>
    )
}
