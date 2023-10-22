import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Products from './components/main/Products';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/' element={<><Header /> <Banner /> <Products /> <Services /></>} />
      </Routes>
    </>
  );
}

export default App;
