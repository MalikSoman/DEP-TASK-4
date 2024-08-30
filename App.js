import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Chat from './pages/Chat';
import Contact from './pages/Contact';
import './styles.css'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <h1>MALIK FREELANCING HUB</h1>
    <p>Welcome to Malik Freelancing Hub. Explore our services and get in touch!</p>
    <div className="background-image"></div>
  </div>
);

export default App;
