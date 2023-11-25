import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StartPage from './pages/StartPage';
import SignUp from './pages/SignUp';
import Interets from './pages/Interets';
import EventDetails from './pages/EventDetails';

function App() {
    return (
        <Routes>
            <Route path='/' element={<StartPage />}/>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='interest' element={<Interets />} />
            <Route path='location' element={<Interets />} />
            <Route path='event-details' element={<EventDetails />} />
        </Routes>

    );
}

export default App;
