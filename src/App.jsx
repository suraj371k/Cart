import Cart from "./Components/Cart"
import Navbar from "./Components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home'

function App() {

  return (
    <div>
      <div className="bg-slate-900 text-white"> 
        <Navbar/>
      </div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </div>
  )
}

export default App
