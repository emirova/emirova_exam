import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Customers } from './Customers.js';
import { Appointments } from './Appointments.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Customers />} />
                <Route path="/appointments" element={<Appointments />}/>
            </Routes>
        </Router>
    );
}

export default App;
