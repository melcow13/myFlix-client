import React, {useState} from 'react';

export function LoginView(props){
    const [ username, setUsername ] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username,password);
    };

    return(
        <form>
            <label>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange ={e=>setPassword(e.target.value)}/>
            </label>
            <button type="sumbmit" onClick={handleSumbit}>Sumbit</button>
        </form>
    );
}