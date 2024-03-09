
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Order from './Order';
import PageNotFound from './components/pagenotfound';



function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/orders' element={<Order/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      
     </Routes>
    </BrowserRouter>
    
  
  
    
  );
}

export default App;
