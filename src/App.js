
import Counter from "./counter.js";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
import {Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar.js";
import { Add,Subtract,Multiplication,Division } from "./Math.js";


function App() {
  return (
    <>
    <Add/>
    <Subtract/>
    <Multiplication/>
    <Division/>
    <Navbar/>
    <Routes>
    <Route path ="/counter" element={<Counter/>}/>
    </Routes>
    </>
  );
}

export default App;
