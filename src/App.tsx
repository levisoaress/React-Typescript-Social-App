import './App.css';
import Navbar from './Components/Menubar/Navbar';
import Chat from './Components/Chat/Chat'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Reports from './Pages/Reports/Reports';
import Products from './Pages/Products/Products';
import Search from './Components/Search/Search';

export default function App() {
  return (
    <>
      <Router>
          <div className='Bars'>
            <Navbar/>
            
            <Chat/>
          </div>
          <Routes>{/*Routes = Antigo Switch*/}
            <Route path='/' element={<Home/>} />
            <Route path='/reports' element={<Reports/>} />
            <Route path='/products' element={<Products/>} />
          </Routes>
      </Router>
    </>
  );
}
