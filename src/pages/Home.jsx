import { useEffect } from 'react'
import { ExpenseList } from '../comps/ExpenseList'
import { expenseActions } from '../store/actions/expense.actions'
import { useSelector } from "react-redux"

export function Home() {
    const expenses = useSelector((storeState) => storeState.expenseModule.expenses);

    useEffect(() => {
        loadExpenses()
    }, [])

    async function loadExpenses() {
        try {
            await expenseActions.loadExpenses();
        } catch (err) {
            console.log("Issues loading expenses ,", err);
        }
    }

    if (!expenses) return <div>Loading...</div>
    return (
        <section className='home'>
            <div>
                <h1 className='main-title'>Expense Tracker</h1>

                <div className="container">
                    <button>ADD</button>
                    <ExpenseList expenses={expenses} />
                </div>
            </div>
        </section>
    )
}
