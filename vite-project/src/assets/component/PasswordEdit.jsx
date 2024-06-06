import { useState } from 'react';
import style from '../component/PasswordEdit.module.css'
import { useNavigate } from 'react-router-dom';
import { GoCopy } from "react-icons/go";

    
    function ReadPage() {
        const navigate = useNavigate();
        const [data, setData] = useState({
            username: 'user123',
            password: 'pass123',
            url: 'https://example.com',
            notes: 'Some notes here',
        });


        const handleEdit = () => {
            navigate('/edit', { state: { data } });
        };
        const HandleCopy = async (text) => {
            try {
                await navigator.clipboard.writeText(text);
                console.log("Text Copies Sucessfully");
            }
            catch (err) {
                console.error('failed to copy:', err)
            }
        }

    return (
        <>
            <div className={style.container}>
                <div className={style.container1}>
                    <div className={style.user}>
                        <label htmlFor="user">Username</label>
                        <div className={style.username}>
                            <input type="text" readOnly value={data.username}/>
                             <GoCopy className={style.icons} onClick={() => HandleCopy(data.username)} />
                            </div>
                    </div>
                    <div className={style.user}>
                        <label htmlFor="password">Password</label>
                        <div className={style.password}>
                            <input type="text" readOnly value={data.password}  />
                            <GoCopy className={style.icons} 
                                onClick={() => HandleCopy(data.password)} />
                           </div>
                    </div>
                    <div className={style.user}>
                        <label htmlFor="url">Url</label>
                        <div className={style.url}>
                            <input type="text" />
                            <GoCopy className={style.icons} onClick={() => HandleCopy(data.url)} />
                            </div>
                    </div>
                    <div className={style.fav}>
                       <input type="checkbox" /> <label htmlFor="box">Favourite</label>
                       </div>
                        <div className={style.note}>
                            < label htmlFor="notes">notes</label>
                            <div>
                            <textarea name="txtbox" id="notes" value={data.notes} readOnly></textarea>
                            </div>
                        </div>

                        <div className={style.edit}>
                            <button onClick={handleEdit}>edit</button>
                        </div>
                    </div>
                </div>






        </>
    )
}

export default ReadPage;