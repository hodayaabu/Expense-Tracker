
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Header() {

    const user = useSelector((storeState) => storeState.userModule.user);


    return (
        <>

            <nav className="nav-links">
                <Link to='/' className="nav-link logo-container">
                    <p className="logo"> Expense Tracker</p>
                    <p className="description">Effortless Budgeting Plan your monthly and annual finances with ease</p>
                </Link >
                {user ? (
                    <Link to='/logout' className="nav-link" >
                        Logout
                    </Link>
                ) : (
                    <Link to='/login' className="nav-link" >
                        Login
                    </Link>
                )}
            </nav>

        </>
    );
}
