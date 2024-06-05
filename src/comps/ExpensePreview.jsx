import { utilService } from '../services/util.service.js'

export function ExpensePreview({ expense }) {

    return <article className="expense-preview-container">
        <div className="expense-preview">
            <p className="labels">
                <label>{utilService.getDate(expense.date)}</label>
                <label>{expense.amount}</label>
                <label>{expense.category}</label>
            </p>
        </div>

    </article>
}