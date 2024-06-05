
import { useEffect, useState } from 'react'
import { ExpensePreview } from './ExpensePreview.jsx'
import { useSelector } from 'react-redux';


export function ExpenseList() {
    const [sum, setSum] = useState(0)
    const expenses = useSelector((storeState) => storeState.expenseModule.expenses);

    useEffect(() => {
        calcSum()
    }, [expenses])

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
