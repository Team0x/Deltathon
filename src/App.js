import Disease from "./Components/Disease";

import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contract from './Components/Contract';
import Buysell from './Components/Buysell';

import './App.css'
import Weather from './Components/Weather'
function App() {
  return (
   <>
     <div className='App'>
     
 
      <BrowserRouter>
       <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/contract' element={ <Contract/>}/>
       <Route path='/buyandsell' element={ <Buysell/>}/>
       <Route path='/weather' element={ <Weather/>}/>

       <Route path='/detection' element={ <Disease/>}/>
       </Routes>
      </BrowserRouter>
    
    </div>
 
   </>
   
 
  );
}

export default App;
