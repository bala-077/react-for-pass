import React from 'react'
import{useNavigate} from 'react-router-dom'
import './PasswordMngr.css'


 const passwords=[
    {
        id:1,
        name:'Google'
    },
    {
        id:2,
        name:'Chrome'
    },
    {
        id:3,
        name:'indeed'
    },
 ]
 function PasswordList(){
    const navigate =useNavigate();
    const handleEdit=(id)=>{
        navigate(`/Datalist/${id}`);
    }
 return (
    <>
    <div className="password-header">
    <div className='password-footer'>
        <h1>PASSWORD LIST</h1>
    </div>
    <div className="password-container">
        <div className="password-division">
            {passwords.map((item)=>(
                <div key={item.id} onClick={()=>handleEdit(item.id)} className='password-contents'>
                    <p>{item.name}</p> 
                    </div>
            ))}
        </div>
    </div>
    </div>
    </>
 )
}
export default PasswordList;
