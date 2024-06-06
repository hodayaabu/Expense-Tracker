
import { useEffect, useState } from 'react'
import { ExpensePreview } from './ExpensePreview.jsx'
import { useSelector } from 'react-redux';


export function ExpenseList({ onDeleteExpense }) {
    const [sum, setSum] = useState(0)
    const expenses = useSelector((storeState) => storeState.expenseModule.expenses);

    useEffect(() => {
        calcSum()
    }, [expenses])

    function calcSum() {
        let sum = 0
        for (let i = 0; i < expenses.length; i++) (
            sum = sum + (+expenses[i].amount)
        )
        setSum(sum)
    }

    return (
        <ul className="expense-list">
            <li>
                <p className='labels header-labels'>
                    <label>Date</label>
                    <label>Amount</label>
                    <label>Category</label>
                    <label></label>
                </p>
            </li>
            {expenses && expenses?.map((expense) => (

                <li key={expense._id}>
                    <ExpensePreview key={expense._id} expense={expense} onDeleteExpense={onDeleteExpense} />
                </li>
            ))}
            <p className='footer header-labels'>
                <label>Count: {expenses.length} </label>
                <label>Sum: {sum}</label>
            </p>
        </ul>
    )
}
