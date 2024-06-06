import { utilService } from '../services/util.service.js'

export function ExpensePreview({ expense }) {

    return <article className="expense-preview-container">
        <div className="expense-preview">
            <p className="labels">
                <label title={expense.note}>{utilService.getDate(expense.date)}</label>
                <label title={expense.note}>{expense.amount}</label>
                <label title={expense.note}>{expense.category}</label>
            </p>
        </div>

    </article>
}