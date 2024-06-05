import React from 'react'
import ReactDOM from 'react-dom/client'
//  import App from './App.jsx'
import Url from './Components/Url.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Data from './Components/Data.jsx'
import PassWordEdit from './Components/PassWordEdit.jsx'
import EditPage from './Components/EditPage.jsx'
import UpdatePage from './Components/UpdatePage.jsx'
import GeneratePassword from './Components/GeneratePassword.jsx'




function App() {
  return (
    <Routes>
      <Route path="/" element={<Url />} />
      <Route path="/Login" element={<Login />} />
      <Route path="Data" element={<Data />} />
      <Route path="PassWordEdit/:id" element={<PassWordEdit/>} />
      <Route path="EditPage" element={<EditPage/>} />
      <Route path="UpdatePage" element={<UpdatePage/>} />
      <Route path="GeneratePassword" element={<GeneratePassword/>} />
    
    </Routes>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    {/* <Login /> */}
    </BrowserRouter>
)
export default App;
