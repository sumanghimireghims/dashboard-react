
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './page/Home'
import Hello from './components/Hello'
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>

<BrowserRouter basename="/app">
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </BrowserRouter>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App