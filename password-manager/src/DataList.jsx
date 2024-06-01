import React, { useState } from 'react'
import './DataList.css'
import { FaRegCopy } from "react-icons/fa6";

const CopyTextBox=()=>{
    const[text,setText]=useState('')
    const[pass,setPass]=useState('')
    const[url,setUrl]=useState('')

const handleTextChange=(event)=>{
    setText(event.target.value);
};

 const handlepassword=(event)=>{
setPass(event.target.value);
 };

 const handleurl=(event)=>{
  setUrl(event.target.value);
 };
const handlecopy=()=>{
    if(navigator.clipboard){
        navigator.clipboard.writeText(text).then(()=>{
            alert ("Text copied to clipboard");
        }).catch((err)=>{
            console.error("failed to copy text",err);
        });
    }else{
        const textArea=document.createElement("textarea");
        textArea.value=text;
        document.body.appendChild(textArea);
        textArea.select();
      try{
        document.execCommand('copy');
        alert("Text copied to clipboard")
      }catch(err){
        console.error('failed to copy text:',err)
      }
      document.body.removeChild(textArea);
    }
};
const handlecopypassword=()=>{
  if(navigator.clipboard){
      navigator.clipboard.writeText(pass).then(()=>{
          alert ("Text copied to clipboard");
      }).catch((err)=>{
          console.error("failed to copy text",err);
      });
  }else{
      const textArea=document.createElement("textarea");
      textArea.value=pass;
      document.body.appendChild(textArea);
      textArea.select();
    try{
      document.execCommand('copy');
      alert("Text copied to clipboard")
    }catch(err){
      console.error('failed to copy text:',err)
    }
    document.body.removeChild(textArea);
  }
};
const handlecopyurl=()=>{
  if(navigator.clipboard){
      navigator.clipboard.writeText(url).then(()=>{
          alert ("Text copied to clipboard");
      }).catch((err)=>{
          console.error("failed to copy text",err);
      });
  }else{
      const textArea=document.createElement("textarea");
      textArea.value=url;
      document.body.appendChild(textArea);
      textArea.select();
    try{
      document.execCommand('copy');
      alert("Text copied to clipboard")
    }catch(err){
      console.error('failed to copy text:',err)
    }
    document.body.removeChild(textArea);
  }
};

  return (
    <div className='list-header'>
     <div className="list-user">
      <div className="list-footer">
        <form action="">
        <div className="list-footer1">
        <label htmlFor="user">UserName:</label>
        <input type="text" className='username' value={text} onChange={handleTextChange} />
        <FaRegCopy  className='textcopy' onClick={handlecopy}/>
        </div>
      <div className="list-password">
        <label htmlFor="user">PassWord:</label>
        <input type="password" className='password' value={pass} onChange={handlepassword}/>
        <FaRegCopy  className='passwordcopy' onClick={handlecopypassword}/>
      </div>
      <div className="list-url">
        <label htmlFor="check">URL:</label>
        <input type="text" className='url' value={url} onChange={handleurl} />
        <FaRegCopy className='urlcopy'onClick={handlecopyurl}/>
        </div>
       <div className="check">
        <input type="checkbox" />
        <span>: All are verified</span>
       </div>
       <div className="textarea">
        <textarea name="text" id="text" placeholder='write something'></textarea>
      
       </div>
        <button className='edit'>Edit</button>
        </form>  
     </div>
     </div>


    </div>
  )
};
export default CopyTextBox;

