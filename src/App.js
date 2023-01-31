import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import HomePage from './Components/Home/HomePage';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer';
import Quote from './Components/Shared/Quote';
import AboutPage from './Components/About/AboutPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
      <Quote></Quote>
      <Footer />
    </div>
  );
}

export default App;
