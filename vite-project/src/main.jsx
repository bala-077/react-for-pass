import React from 'react'
import ReactDOM from 'react-dom/client'
import UrlPage from '../src/assets/component/UrlPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './assets/component/LoginPage'
import DataList from './assets/component/DataList'
import  PasswordEdit  from './assets/component/PasswordEdit'
// import  EditPage  from './assets/component/EditPage'

function App() {
  
    return (
      <Routes>
        <Route path='/' element={<UrlPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/datamodels' element={<DataList /> } />
        <Route path='/edit-password/:id' element={<PasswordEdit />} />
        {/* <Route path='/editpage' element={<EditPage />} /> */}
      </Routes> 
    )
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  
)