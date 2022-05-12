import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import Login from './pages/Login';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import Favourites from './pages/Favourites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/:videoId" element={<VideoPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/favourites"
            element={
              <PrivateRoute>
                <Favourites />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
