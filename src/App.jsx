import './styles/reset.css';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
      
      
      
    </div>
  );
}
export default App;
