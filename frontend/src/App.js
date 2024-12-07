
import './App.css';
import Navber from './Components/Navber/Navber';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home'
import Accessories from './Pages/Accessories'
import Support from './Pages/Support'
import Product from './Pages/Product';
import LoginSignup from './Pages/loginSignup';
import Cart from './Pages/cart';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>  

            <Navber/>
            <Routes>
              <Route path='/' element = {<Home/>}/>

              <Route path='/accessories' element = {<Accessories category="accessories"/>}/>

              <Route path='/Support'     element = {<Support/>}/>

              <Route path='/Product'     element = {<Product/>}/>

              <Route path='/Product/:productId'   element = {<Product/>}/>
              
              <Route/>
              
              <Route path='/cart'         element = {<Cart/>}/>

              <Route path='/LoginSignup'  element = {<LoginSignup/>}/>
            
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
