
import { useEffect, useState } from 'react'
import { ExpensePreview } from './ExpensePreview.jsx'


export function ExpenseList({ expenses }) {
    const [sum, setSum] = useState(0)

    useEffect(() => {
        calcSum()
    }, [expenses.amount])

    function calcSum() {
        let x = 0
        for (let i = 0; i < expenses.length; i++) (
            x = x + expenses[i].amount
        )
        setSum(x)
    }

    return (
        <ul className="expense-list">
            <li>
                <p className='labels headerLabels'>
                    <label>Date</label>
                    <label>Amount</label>
                    <label>Category</label>
                </p>
            </li>
            {expenses && expenses?.map((expense) => (

                <li key={expense._id}>

                    <ExpensePreview key={expense._id} expense={expense} />
                </li>
            ))}
            <p>
                <label>Count:{expenses.length} </label>
                <label>Sum: {sum}</label>
            </p>
        </ul>
    )
}
