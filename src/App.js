import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import HomePage from './Components/Home/HomePage';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer';
import Quote from './Components/Shared/Quote';
import AboutPage from './Components/About/AboutPage';
import ServicePage from './Components/OurService/ServicePage';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/service' element={<ServicePage />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
      </Routes>
      <Quote></Quote>
      <Footer />
    </div>
  );
}

export default App;
