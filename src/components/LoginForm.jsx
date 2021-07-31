import {useState} from "react";
import axios from "axios";

const projectID = '7700a9da-8793-41ea-928e-304c181aff74';

const Modal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-Id': projectID, 'User-Name': username, 'User-Secret': password};

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (err) {
            setError('Oops, incorrect credentials.')
        }
    };

    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">TT | Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input"
                           placeholder="Enter your username" required/>

                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input"
                           placeholder="Enter your password" required/>

                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
};

export default Modal;
