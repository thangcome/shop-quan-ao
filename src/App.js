import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import Signin from './Pages/signin/Signin';
import Signup from './Pages/signup/Signup';
import Contact from './Pages/contact/Contact';
import Product from './Pages/product/Product';
import SalesPromotion from './Pages/salespromotion/SalesPromotion';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/salespromotion' element={<SalesPromotion />} />
      </Routes>
    </div>
  );
}

export default App;