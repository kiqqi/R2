import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ImageGallery from './components/ImageGallery';
import RealTimeForm from './components/Realtimeform';
import GuessNumberGame from './components/GuessNumberGame';
import ClickButtons from './components/ClieckButtos';
import NotesApp from './components/NotesApp';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Galería de Imágenes</Link></li>
            <li><Link to="/form">Formulario en Tiempo Real</Link></li>
            <li><Link to="/guess">Juego de Adivinar el Número</Link></li>
            <li><Link to="/buttons">Botones de Clic/Doble Clic</Link></li>
            <li><Link to="/notes">Aplicación de Notas</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/form" element={<RealTimeForm />} />
          <Route path="/guess" element={<GuessNumberGame />} />
          <Route path="/buttons" element={<ClickButtons />} />
          <Route path="/notes" element={<NotesApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;