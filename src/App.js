import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID='7700a9da-8793-41ea-928e-304c181aff74';

const App = () => {
    return (
        <ChatEngine
            height='100vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            projectID={projectID}
            renderChatFeed={
                (chatAppProps) => <ChatFeed {...chatAppProps} />
            }
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

// infinite scroll, logout, more customizations...

export default App;
