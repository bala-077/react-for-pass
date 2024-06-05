import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./DataEdit.css"

function EditPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const nav=useNavigate();
  const [formData, setFormData] = useState(location.state.data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/update', { state: { updatedData: formData } });
  };
  const handleClick=(e)=>{
    e.preventDefault();
    nav('/generator')
  }

  return (
    <div className='edit-header'>
      <div className='edit-nav'>
      <h1>Edit Password Details</h1>
      </div>
      <div className="edit-container">
      <form onSubmit={handleSubmit}>
        <div className="edit-user">
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        </div>
        <div className="edit-password">
        <label>
          Password:
          <input type="text" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        </div>
        <div className="edit-url">
        <label>
          URL:
          <input type="text" name="url" value={formData.url} onChange={handleChange} />
        </label>
        <br />
        </div>
        <div className="edit-notes">
        <label>
          Notes:
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </label>
        <br />
        </div>
        <div className="edit-button">
        <button className="Btn">
  Update
</button>
<button className='Btn' onClick={handleClick}>Generator Password</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default EditPage;
