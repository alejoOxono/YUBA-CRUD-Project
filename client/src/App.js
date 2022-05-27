import { Routes, Route } from 'react-router-dom';
import LandPage from './Components/LandPage/LandPage';
import Modify from './Components/Modify/Modify';

function App() {
  return (
    <Routes>
      <Route
      path='/'
      element={<LandPage />}
      />
      <Route
      path='/modificar/:id'
      element={<Modify />}
      />
    </Routes>
  );
}

export default App;
