

import './App.css'
import Feeds from './components/feed'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import { createContext, useEffect, useState} from 'react'

 export const GlobleInfo=createContext();
import  {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Videoare from './components/videoarea'
import Videoallarea from './components/videoallarea'
import { Facknames } from './api/facknames'

function App() {
  const [memuval, setmemuval] = useState(true)
const menuvalue=()=>{
        setmemuval(!memuval)
        
}
  const data=[
        'aman',
    ]
    const [fkdata, setfkdata] = useState(data)
 
    useEffect(() => {
     // setInterval(() => {
  //    Facknames()
  //    data.push( Facknames())
  //      setfkdata(data)
 
  //   console.log( 'this is my ',fkdata)
  // }, 1000);
    }, [])
 
  return (
    <>
    <Router>
     <GlobleInfo.Provider value={{menuvalue:menuvalue,memuval:memuval,data:fkdata}}>
      <Navbar/>
      <div className="flex ">
      <Sidebar/> 
      <Routes>
          <Route path="/" element={<Feeds/>}/>
          <Route path="/watch" element={<Videoallarea/>}/>
   
      </Routes>
      </div>
      
      </GlobleInfo.Provider>
      </Router>
    </>
  )
}

export default App
