
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './componants/Home';
import Resister from './componants/Resister';
import Login from './componants/Login';
import Navbar from './componants/Navbar';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="/resister" element={<Resister/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
