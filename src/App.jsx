import { useState } from 'react'
import './App.css'
import Links from '../components/pagelinks/links'
import Footer from '../components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrailerPage from '../components/TrailerPage/trailerpage';
import Contact from '../components/contact/contact';
import IndustriesPage from '../components/industries/industriespage';
import Construction from '../components/industries/construction';
import Agriculture from '../components/industries/agriculture';
import OilGas from '../components/industries/oilgas';
import Intermodal from '../components/industries/intermodal';
import Recycling from '../components/industries/recycling';
import Retail from '../components/industries/retail';
import Specialized from '../components/industries/specialized';
import FontaineTrailers from '../components/trailerpage/fontainetrailer';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to The Trailer Bible</h1>
        <p>Your ultimate resource for trailers!</p>
        <Links />
        <Routes>
          {/* Trailer Page Routes */}
          <Route path="/Trailers" element={<TrailerPage />} />
          <Route path="/Fontaine" element={<FontaineTrailers />} />
          
          
          {/* Industries Page Routes */}
          <Route path="/Industries" element={<IndustriesPage />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/Agriculture" element={<Agriculture />} />
          <Route path="/Oil+Gas" element={<OilGas />} />
          <Route path="/Intermodal" element={<Intermodal />} />
          <Route path="/Recycling" element={<Recycling />} />
          <Route path="/Retail" element={<Retail />} />
          <Route path="/Specialized" element={<Specialized />} />

          {/* Contact Page Routes */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App
