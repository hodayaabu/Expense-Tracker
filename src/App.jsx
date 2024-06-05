import { Home } from './pages/Home.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { IndexExpense } from './pages/IndexExpense.jsx'
import { Header } from './comps/Header.jsx'

export default function App() {
  return (
    <Router>
      <div>
        <main>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/expenses' element={<IndexExpense />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/signup" element={<LoginSignup />} />
            <Route path="/logout" element={<LoginSignup />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
