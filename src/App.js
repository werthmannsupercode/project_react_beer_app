import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllBeers from './pages/AllBeers';
import ItemDetail from './components/ItemDetail';
import Startseite from './pages/Startseite';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/allBeers" element={<AllBeers />} />
        <Route path='/item/:id' element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
