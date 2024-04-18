import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Treatment from './components/Treatment'; 
import FAQ from './components/FAQ';
import Dentist from './components/Dentist';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="dentist-website">
      <Header />
      <Hero />
      <Services />
      <Treatment />
      <FAQ />
      <Dentist />
      <AboutUs />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
