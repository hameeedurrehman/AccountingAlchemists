import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Services from './components/Services';
import Products from './components/main/Products';

function App() {
  return (
    <>
      <Header />
      <Banner/>
      <Products />
      <Services />
    </>
  );
}

export default App;
