import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StartPage from './pages/StartPage';
import SignUp from './pages/SignUp';
import Interets from './pages/Interets';
import MainFeed from './pages/MainFeed';
import Story from './pages/Story';
import Map from './pages/Map';
import SearchEvent from './pages/SearchEvent';
import FeedContainer from './components/FeedContainer'
import CreateEvent from './pages/CreateEvent'
import EventDetails from './pages/EventDetails'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />}/>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='interest' element={<Interets />} />
      <Route path='create-event' element={<CreateEvent />} />
      <Route path='feed' element={<FeedContainer />}>
        <Route index element={<MainFeed />} />
        <Route path='map' element={<Map />} />
        <Route path='search-event' element={<SearchEvent />} />
        <Route path='ask-ai' element={<SearchEvent />} />
        <Route path='friends' element={<Interets />} />
        <Route path='profile' element={<Interets />} />
      </Route>
      <Route path='story/:id' element={<Story />} />
      <Route path='event-details/:id' element={<EventDetails />} />
    </Routes>
  
  );
}

export default App;
