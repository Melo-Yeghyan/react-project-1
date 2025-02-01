import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Gallery from './pages/Gallery/Gallery';
import Services from './pages/Services/Services';
import ContactUs from './pages/ContactUs/ContactUs';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Services" element={<Services />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default App;
