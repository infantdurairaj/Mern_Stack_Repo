import './App.css';
import Nav from './Components/Header-Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Private from './Components/Private';
import Login from './Components/Login';
import Product from './Components/Product';
import UpdateProduct from './Components/Update';
import Profile from './Components/Add';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<Private />}>
              <Route path='/' element={<Product />} />
              <Route path='/update/:id' element={<UpdateProduct />} />
              <Route path='/logout' element={<h1>Logout</h1>} />
              <Route path='/profile' element={<Profile/>} />
            </Route>
            <Route path='/signup' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
        </BrowserRouter>
        <div className='inbody'>

        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
