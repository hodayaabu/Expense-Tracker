import { Link } from "react-router-dom";


export function Home() {

    return (
        <section className='home'>
            <div>
                <h1 className='main-title'>Welcome To Expense Tracker</h1>

                <div className="container">
                    <p>
                        💸
                        Effortless Budgeting
                        Plan your monthly and annual finances with ease, ensuring your financial goals are within reach.
                    </p>

                    <Link to='/signup'>Lets Start</Link>
                </div>
            </div>
        </section>
    )
}
