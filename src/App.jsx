import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DesktopAdoption from './pages/DesktopAdoption';
import FrameworkAdoption from './pages/FrameworkAdoption';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/desktop-adoption" element={<DesktopAdoption />} />
            <Route path="/framework-adoption" element={<FrameworkAdoption />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
