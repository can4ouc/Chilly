import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StartPage from './pages/StartPage';
import EventDetails from "./pages/EventDetails";
import SignUp from './pages/SignUp';
import Interests from './pages/Interests';
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
      <Route path='interest' element={<Interests />} />
        <Route path='event-details' element={<EventDetails />} />
      <Route path='feed' element={<FeedContainer />}>
        <Route index element={<MainFeed />} />
        <Route path='map' element={<Map />} />
        <Route path='search-event' element={<SearchEvent />} />
        <Route path='ask-ai' element={<SearchEvent />} />
        <Route path='friends' element={<Interests />} />
        <Route path='profile' element={<Interests />} />
      </Route>
      <Route path='story/:id' element={<Story />} />
    </Routes>
  );
}

export default App;
