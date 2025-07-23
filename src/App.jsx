import './Page.css'
import './App.css'
import Links from '../components/pagelinks/links'
import Footer from '../components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrailerPage from '../components/trailerpage/trailerpage';
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
import ManacTrailers from '../components/trailerpage/manactrailer';
import ReitnouerTrailers from '../components/trailerpage/reitnouertrailer';
import GreatDaneTrailers from '../components/trailerpage/greatdanetrailer';
import TranscraftBensonTrailers from '../components/trailerpage/transcraftbenson';
import StoughtonTrailers from '../components/trailerpage/stoughtontrailer';

function App() {
  return (
    <Router>
      

        {/* Title + Header Links */}
        
          <div id='title'>The Trailer Bible</div>
          <p id='titleBlurb'>Your ultimate resource for trailers!</p>

          <Links />
          
        
        <div id='pageContainer'>
        <Routes>
          {/* Trailer Page Routes */}
            <Route path="/Trailers" element={<TrailerPage />} />
            <Route path="/Fontaine" element={<FontaineTrailers />} />
            <Route path="/Manac" element={<ManacTrailers />} />
            <Route path="/Reitnouer" element={<ReitnouerTrailers />} />
            <Route path="/Great+Dane" element={<GreatDaneTrailers />} />
            <Route path="/Benson+Transcraft" element={<TranscraftBensonTrailers />} />
            <Route path="/Stoughton" element={<StoughtonTrailers />} />

          
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
