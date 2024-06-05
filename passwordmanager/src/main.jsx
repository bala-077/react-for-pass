import React from 'react'
import ReactDOM from 'react-dom/client'
import UrlPage from './component/UrlPage'
import LoginPage from './component/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataList from './component/DataList'
import PasswordEdit from './component/PasswordEdit';

// import PasswordEdit from './component/PasswordEdit'
// import UpdatePage from './component/UpdatePage'
import EditPage from './component/EditPage'
import  GeneratePassword  from './component/GeneratePassword'

function App() {

  return (
    <Routes>
      <Route path='/' element={<UrlPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/datamodels' element={<DataList />} />
      <Route path='/edit-password/:id' element={<PasswordEdit />} />
      <Route path='/update' element={<PasswordEdit />} />
      <Route path='/edit' element={<EditPage />} />

      {/* <Route path='/update' element={<UpdatePage />} /> */}
      <Route path='/generatepassword' element={<GeneratePassword />} />
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)