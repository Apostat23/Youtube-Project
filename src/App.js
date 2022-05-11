import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import VideoPage from './pages/VideoPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='/:videoId' element={
          <VideoPage />
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
