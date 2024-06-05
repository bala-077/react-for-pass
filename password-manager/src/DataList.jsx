import React, { useState } from 'react'
import './DataList.css'
import { FaRegCopy } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';




function ReadPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { address, item } = location.state || {};
  
  const [data, setData] = useState({ username: '', password: '', url: '', notes: '' });

  useEffect(() => {
      const fetchData = async () => {
          if (address && item) {
              try {
                  const result = await handlePage(address, item);
                  console.log('HI')
                  const parsedResult = JSON.parse(result);
                  setData(parsedResult.data); 
              } catch (error) {
                  console.error('Failed to fetch data:', error);
              }
          }
      };

      fetchData();
  }, [address, item]);

  const handleEdit = () => {
      navigate('/read-page', { state: { data } });
  };

  const handleCopy = async (text) => {
      try {
          await navigator.clipboard.writeText(text);
          console.log("Text copied successfully");
      } catch (err) {
          console.error('Failed to copy:', err);
      }
  };



  
return (
<div className='user-container'>
  <h1>Read Page</h1>
  <div className='user-name'> 
  <label >Username:</label>
  <input type="text" value={data.username}/> 
  <FaRegCopy  className='textcopy' onClick={()=>HandleCopy(data.username)}/>
  </div>
  <div className='user-password'>
  <label >UserPassword:</label>
   <input type="password" value= {data.password} />
  <FaRegCopy  className='textcopy-one' onClick={()=>HandleCopy(data.password)}/>
  </div>
  <div className='user-url'>
  <label >UserUrl:</label>
    <input type="text" value={data.url} />
  <FaRegCopy  className='textcopy-two' onClick={()=>HandleCopy(data.url)}/>
  
  </div>
  <div className='user-checkbox'>
    <input type="checkbox" />
    <span>:All are verified</span>
  </div>
  <div className="user-textarea">
    <textarea name="" id="">{data.notes}</textarea>
    </div>
    <div className='data-btn'>
  <button className='datalist-button' onClick={handleEdit}>Edit</button>
  <button className='datalist-button' onClick={handleClick}>Generator Password</button>
  </div>
</div>
  );
}

export default ReadPage;






