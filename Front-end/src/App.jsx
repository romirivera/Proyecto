import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './Pages/Inicio';
import Reservas from './Pages/Reservas';
import Pagos from './Pages/Pagos';
import Stock from './Pages/Stock';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import './components/Navbar.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Inicio />} />

        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Reservas' element={<Reservas />} />
        <Route path='/Stock' element={<Stock />} />
        <Route path='/Pagos' element={<Pagos />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
