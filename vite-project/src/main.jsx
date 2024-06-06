import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import App from './App.jsx'
import Url from './URL/Url.jsx'
import Log from './assets/Login/Log.jsx'
import PasswordList from './assets/Datamodel/PasswordList.jsx'
 import Edit from './assets/Editpswd/Edit.jsx'
import PswdEdit from './assets/PswdEdit/PswdEdit.jsx'
import Update from './assets/Update/Update.jsx'
import PswdGenerator from './assets/Pswdgenerator/PswdGenerator.jsx'


function App(){
  return(
    <Routes>
      <Route path='/' element={<Url />} />
      <Route path='/Login' element={<Log />} />   
      <Route path='/Datamodels' element={<PasswordList/>}/>
      <Route path='/Editpassword/:id' element={<Edit />} /> 
      <Route path='/edit' element={<PswdEdit /> }/>
      <Route path='/update' element={<Update />}/>
      <Route path='/generatepassword' element={<PswdGenerator />} />
    </Routes>
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)

