import {  Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ItemsPage from './Components/ItemsPage/ItemsPage';
import Navbar from './Components/Navbar/Navbar';
import Catogries from './Pages/Catogries/Catogries';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
   <Navbar/>
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path='/category/all' element={<Catogries/>}/> */}
    <Route path='/category/:type' element={<Catogries/>}/>
    <Route path='catogrie/:id' element={<ItemsPage/>} />
   </Routes>
   <Footer/>
   
   </>
  );
}

export default App;
