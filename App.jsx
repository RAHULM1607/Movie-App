
import "./App.css";

import MovieCard from './project1/MovieCard';
import Home from './project1/Home';
import { Routes,Route } from 'react-router-dom';
import Favorite from './project1/Favorite';
import Navbar1 from './project1/Navbar1';
import { MovieProvider } from "./project1/contexts/Moviecontext";

function App() {
  
  
  
  return (
    <MovieProvider>
      <Navbar1></Navbar1>
    
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Favorite' element={<Favorite></Favorite>}></Route>

      </Routes>
    </main>
    </MovieProvider>
      
    
  );
}

export default App;
