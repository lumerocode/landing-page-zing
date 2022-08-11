import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import About from './components/About/About';
import Products from './components/Products/Products';
import { Customer } from './components/Customer/Customer';
import { Contact } from './components/Contact Us/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Cover/>
      <About/>
      <Products/>
      <Customer/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
