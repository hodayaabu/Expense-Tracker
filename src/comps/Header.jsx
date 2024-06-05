
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Header() {

    const user = useSelector((storeState) => storeState.userModule.user);


    return (
        <>
            <section className="app-navbar" >
                <nav className="nav-links">
                    <Link to='/' className="nav-link logo">
                        Expense Tracker
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
            </section>
        </>
    );
}
