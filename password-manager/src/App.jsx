
import Dashboard from "./Dashboard.jsx";
import Login from './Login.jsx';
import { Route, Router, Routes } from "react-router-dom";
import Datalist from "./DataList.jsx";
import PasswordMngr from "./PasswordMngr.jsx";
import  DataEdit  from "./DataEdit.jsx";
import DataUpdate from "./DataUpdate.jsx"
import  PasswrdGenerator  from "./PasswrdGenerator.jsx";

function App(){
    return(
      
    <Routes>
      <Route path ="/" element={<Dashboard/>} />
      <Route path ="login" element={<Login/>} />
      <Route path ="/list-page" element={<PasswordMngr/>} />
      <Route path ="/read-page" element={<Datalist/>} />
      <Route path ="/edit" element={<DataEdit/>} />
      <Route path ="/update" element={<DataUpdate/>} />
      <Route path ="/generator" element={<PasswrdGenerator/>} />

</Routes>

    );
  }
  export default App;