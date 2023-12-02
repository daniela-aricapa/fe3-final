import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Contacto from './Routes/Contact';
import Favoritos from './Routes/Favs';
import Detail from './Routes/Detail';
import './index.css';
import { ThemeProvider } from './theme';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/favs" element={<Favoritos />} />
            <Route path="/dentist/:id" element={<Detail />} />
          </Routes>
<body></body>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
