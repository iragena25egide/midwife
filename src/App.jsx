import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../components/header';
import React from 'react';
import GallerySlider from '../components/gallery';
import TestimonialSlider from '../components/testimony';
import BookAppointment from '../components/bookAppoint';
import Footer from '../components/footer';
import VideoPlayer from '../components/video';
import Services from '../components/servicesAdortion';
import FAQ from '../components/faq';
import ContactSection from '../components/contact';
import RuaMidwifeCamille from '../components/midwifeCamil';
import MidwifeAssistant from '../components/midwifeAssistant';
import BirthAssistants from '../components/birthAssistant';
import BabyGallery from '../components/client';


function App() {


  return (

    // routes 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<>
      <Header />
      <GallerySlider />
      <TestimonialSlider />
      <VideoPlayer />
      <BookAppointment />
      <Footer />
      </>}/>

      <Route path='/rua-midwifery' element={<>
        <Header />
        <RuaMidwifeCamille />
        <MidwifeAssistant />
        <BirthAssistants />
        <BookAppointment />
      <Footer />
      </>}/>

      <Route path='/services' element={<>
        <Header />
        <Services />
        <BookAppointment />
      <Footer />
        </>}/>
        <Route path='/faq' element={<>
          <Header />
          <FAQ />
          <BookAppointment />
      <Footer />
          </>}/>
          <Route path='/clients' element={<>
            <Header />
            <BabyGallery /> 
            <BookAppointment />
            <Footer />
            </>}/>
            <Route path='/contact' element={<>
            <Header />
            <ContactSection />
              <BookAppointment />
              <Footer />

              </>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
