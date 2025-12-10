import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import WorkflowGrid from './components/WorkflowGrid';
import PerformanceGrid from './components/PerformanceGrid';
import CommunityLove from './components/CommunityLove';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <WorkflowGrid />
        <PerformanceGrid />
        <CommunityLove />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
