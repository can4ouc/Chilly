import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StartPage from './pages/StartPage';
import SignUp from './pages/SignUp';
import Interets from './pages/Interets';
<<<<<<< HEAD
import MainFeed from './pages/MainFeed';
import Story from './pages/Story';
import Map from './pages/Map';
import SearchEvent from './pages/SearchEvent';
import FeedContainer from './components/FeedContainer'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />}/>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='interest' element={<Interets />} />
      <Route path='feed' element={<FeedContainer />}>
        <Route index element={<MainFeed />} />
        <Route path='map' element={<Map />} />
        <Route path='search-event' element={<SearchEvent />} />
        <Route path='ask-ai' element={<SearchEvent />} />
        <Route path='friends' element={<Interets />} />
        <Route path='profile' element={<Interets />} />
      </Route>
      <Route path='story/:id' element={<Story />} />
    </Routes>
  
  );
=======
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
>>>>>>> 24babec90ca9c4d1221859d293aa3e1442a36d6f
}

export default App;
