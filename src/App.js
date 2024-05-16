import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Home';
import Footer from './components/Footer';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Getinvolved from './components/Getinvolved';
import Vani from './components/Vani';
import Homestates from './components/Homestates';
import Initiative from './components/Initiative';
import Recovery from './components/Recovery';
import Bhakti from './components/Bhakti';
import Resources from './components/Resources';
import Media from './components/Media';
import Books from './components/Books';




function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='initiative' element={<Initiative />} /> */}
        <Route path='/vani' element={<Vani/>}/>
        <Route path='/recovery' element={<Recovery/>}/>
        <Route path='/bhakti' element={<Bhakti/>}/>
        <Route element={<Resources/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/get-involved' element={<Getinvolved />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Homestates /> */}
      



    </BrowserRouter>






  );
}

export default App;
