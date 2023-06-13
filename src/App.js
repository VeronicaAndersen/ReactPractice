import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './Components/Products/Products';
import Product from './Components/Products/Product';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';

function App() {
  return (
  
      <BrowserRouter>
      <div className='App'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
