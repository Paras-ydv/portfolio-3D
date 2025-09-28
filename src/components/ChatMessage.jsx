
import Chatboticon from './ChatbotIcon'

const ChatMessage = ({ chat }) => {
    return (
        !chat.hideInChat && (
            <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message ${chat.isError ? 'error' : ""}`}>
                {/* Adding the chatbot icon only if the msg is from the chatbot */}
                {chat.role === "model" && <Chatboticon />}
                <p className='message-text'>
                    {chat.text}
                </p>
            </div>
        )
    )
}

export default ChatMessage