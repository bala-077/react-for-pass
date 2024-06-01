import React from 'react'
import ReactDOM from 'react-dom/client'
//  import App from './App.jsx'
import Url from './Components/Url.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Data from './Components/Data.jsx'



function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Url />} />
      <Route patth="Login" element={<Login />} /> */}
      <Route path="Data" element={<Data />} />


    </Routes>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    {/* <Login /> */}
   
    

    </BrowserRouter>
  </React.StrictMode>,
)
export default App;
