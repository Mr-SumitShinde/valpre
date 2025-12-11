import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

// Lazy load pages for better performance and UX
const Home = lazy(() => import('./pages/Home'));
const DesktopAdoption = lazy(() => import('./pages/DesktopAdoption'));
const FrameworkAdoption = lazy(() => import('./pages/FrameworkAdoption'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow relative">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/desktop-adoption" element={<DesktopAdoption />} />
              <Route path="/framework-adoption" element={<FrameworkAdoption />} />
            </Routes>
          </Suspense>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
