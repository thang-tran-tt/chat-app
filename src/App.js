import {ChatEngine, ChatFeed} from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
const App = () => {
    return (
        <ChatEngine
            height='100vh'
            userName='thangtran'
            userSecret='thangtran_chatapp'
            projectID='7700a9da-8793-41ea-928e-304c181aff74'
            renderChatFeed = {
                ( chatAppProps) => <ChatFeed {...chatAppProps} />
            }
        />
    );
}

export default App;