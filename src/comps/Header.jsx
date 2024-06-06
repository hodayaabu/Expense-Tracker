
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Header() {

    const user = useSelector((storeState) => storeState.userModule.user);


    return (
        <>
            <nav className="nav-links">
                <div className="links">
                    <Link to='/' className="nav-link logo-container">
                        <p className="logo"> Expense Tracker</p>
                    </Link >
                    <Link to='/' className="nav-link" >
                        Home
                    </Link>
                    <Link to='/expenses' className="nav-link" >
                        Expenses
                    </Link>

                </div>
                <div>
                    {user ? (
                        <div className="user-section">
                            <label className="nav-link">Hello {user.username}</label>
                            <Link to='/logout' className="nav-link" >
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <Link to='/login' className="nav-link" >
                            Login
                        </Link>
                    )}
                </div>
            </nav>

        </>
    );
}
