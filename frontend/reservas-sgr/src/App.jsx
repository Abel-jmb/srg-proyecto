import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reservas from './pages/Reservations';
import LoginAdmin from './pages/LoginAdmin';
import PanelAdmin from './pages/PanelAdmin';
import Confirmacion from './pages/Confirmation';
import Disponibilidad from './pages/Disponibilidad';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="/admin" element={<PanelAdmin />} />
            <Route path="/confirmacion" element={<Confirmacion />} />
            <Route path="/disponibilidad" element={<Disponibilidad />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
