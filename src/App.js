import Disease from "./Components/Disease";
import Navbar from './Components/Navbar';
import { BrowserRouter,routes, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contract from './Components/Contract';
import Buysell from './Components/Buysell';
import Weatherforecast from './Components/Weatherforecast';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
   <>
     <div className='App'>
 
      <BrowserRouter>
       <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/contract' element={ <Contract/>}/>
       <Route path='/buyandsell' element={ <Buysell/>}/>
       <Route path='/weatherforecast' element={ <Weatherforecast/>}/>

       <Route path='/detection' element={ <Disease/>}/>
       </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
 
   </>
   
 
  );
}

export default App;
