import { useLocation, useNavigate } from 'react-router-dom';

//Services
import { Login } from '../comps/LoginSignup/Login.jsx'
import { Signup } from '../comps/LoginSignup/Signup.jsx'
import { Logout } from '../comps/LoginSignup/Logout.jsx'

//Redux
import { login, signup, logout } from '../store/actions/user.actions.js'


export function LoginSignup() {

    const navigate = useNavigate()
    const location = useLocation();
    const pathname = location.pathname;

    async function onLogin(credentials) {
        try {
            await login(credentials)
            navigate('/expenses')
        } catch (err) {

            console.log(err);
        }
    }

    async function onSignup(credentials) {
        try {
            await signup(credentials)
            navigate('/expenses')
        } catch (err) {
            console.log(err);
        }
    }

    async function onLogout() {
        try {
            await logout()
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="login-signup-page">
            <div className="login-signup-preview">

                {pathname === '/login' &&
                    <Login onLogin={onLogin} />
                }
                {pathname === '/signup' &&
                    <Signup onSignup={onSignup} />
                }
                {pathname === '/logout' &&
                    <Logout onLogout={onLogout} />
                }
            </div>
        </div>
    )
}
