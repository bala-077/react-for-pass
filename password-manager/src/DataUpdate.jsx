import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./DataUpdate.css"
function ReadPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState({
        username: 'user123',
        password: 'pass123',
        url: 'https://example.com',
        notes: 'Some notes here',
    });

    useEffect(() => {
        if (location.state && location.state.updatedData) {
            setData(location.state.updatedData);
        }
    }, [location.state]);

    const handleEdit = () => {
        navigate('/edit', { state: { data } });
    };

    return (
        <div className='update-header'>
            <div className='update-container'>
                <div className='update-user'>
                    <label htmlFor="user">Username
                        
                            <input type="text" name='username' value={data.username} />
                        
                    </label>
                </div>
                <div className='update-password'>
                    <label htmlFor="user">Password
                        
                            <input type="password" name='password' value={data.password} />
                        
                    </label>
                </div>
                <div className='update-url'>
                    <label htmlFor="user">URL
            
                            <input type="text" name='url' value={data.url} />
                                            </label>
                </div>
                <div className='update-check'>
                    <input type="checkbox"/>
                    <span>Favorite</span>
                </div>
                <div className='update-notes'>
                    <label htmlFor="notes">:Notes
                        <div className="textbox"><textarea name="notes" id="notes" value={data.notes} ></textarea></div>
                    </label>
                </div>
                <div className='update-button'>
                    <button className='Btn' onClick={handleEdit}>Edit
                       
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReadPage;