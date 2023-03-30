import './styles/reset.css';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactPage />} />
      </Routes>
      
      
      
    </div>
  );
}
export default App;
