import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Aside from './Components/Aside'
import './App.css'
import Giovanna from './pages/Giovanna'
import Julia from './pages/Julia'
import Kamilly from './pages/Kamilly'
import Duarte from './pages/Duarte'


function App() {

  return (
    <>
      <Header/>
      <BrowserRouter> 
        <Routes> 
          <Route path="/GF" element={<Giovanna/>} />
          <Route path="/JP" element={<Julia/>} />
          <Route path="/KB" element={<Kamilly/>} />
          <Route path="/MD" element={<Duarte/>} />
        </Routes>  
        <Nav/>
    </BrowserRouter>
      <Aside/>
      <Footer/>

    </>
  )
}

export default App
