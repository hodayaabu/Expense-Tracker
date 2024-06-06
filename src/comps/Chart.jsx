
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, } from "react-chartjs-2"
import { useSelector } from "react-redux";
import { utilService } from "../services/util.service";

export function Chart() {
    const expenses = useSelector((storeState) => storeState.expenseModule.expenses);
    const totalAmount = utilService.calcByCategory(expenses)

    if (!expenses || expenses.length === 0) return <div></div>
    return (
        <div className="chart">
            <Doughnut
                data={{
                    labels: totalAmount?.map((expense) => expense.category),
                    datasets: [
                        {
                            data: totalAmount?.map((expense) => expense.amount),
                            backgroundColor: [
                                'rgb(43, 60, 80)',
                                'rgb(165, 201, 243)',
                                'rgb(95, 25, 187)',
                                'rgb(213, 61, 233)',
                                'rgb(119, 22, 184)',
                            ]
                        }
                    ]
                }}
            />

        </div>

    );
}
