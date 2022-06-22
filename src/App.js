import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ViewDetailFilmPage from './containers/ViewDetailFilmPage';
import WatchPage from './containers/WatchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/view-detail-film" element={<ViewDetailFilmPage />} />
        <Route path="/view-detail-film/:id" element={<ViewDetailFilmPage />} />
      </Routes>
    </div>
  );
}

export default App;
