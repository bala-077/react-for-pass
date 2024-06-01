
import Dashboard from "./Dashboard.jsx";
import Login from './Login.jsx'
import { Route, Router, Routes } from "react-router-dom";
import Datalist from "./DataList.jsx"
import PasswordMngr from "./PasswordMngr.jsx";


function App(){
    return(
      
    <Routes>
      <Route path ="/" element={<Dashboard/>} />
      <Route path ="login" element={<Login/>} />
      <Route path ="/edit-password/:id" element={<PasswordMngr/>} />
      <Route path ="/Datalist/:id" element={<Datalist/>} />

</Routes>

    );
  }
  export default App;