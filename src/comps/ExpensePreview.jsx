
import { utilService } from '../services/util.service.js'

export function ExpensePreview({ expense, onDeleteExpense }) {
    const { _id, note, date, amount, category } = expense

    return <article className="expense-preview-container">
        <div className="expense-preview">
            <p className="labels">
                <label title={note}>{utilService.getDate(date)}</label>
                <label title={note}>{amount}</label>
                <label title={note}>{category}</label>
                <label onClick={() => { onDeleteExpense(_id) }}>X</label>
            </p>
        </div>

    </article>
}