import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import App from './App.jsx'
import Url from './URL/Url.jsx'
import Log from './assets/Login/Log.jsx'
import PasswordList from './assets/Datamodel/PasswordList.jsx'

function App(){

  return(
    <Routes>
      <Route path='/' element={<Url />}/>
      <Route path='/Login' element={<Log />} />   
      <Route path='/Datamodels' element={<PasswordList />} /> 
    </Routes>
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)

