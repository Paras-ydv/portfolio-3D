import { useRef, useState, useEffect } from "react"
import Chatform from "../components/Chatform"
import ChatMessage from "../components/ChatMessage";
import Chatboticon from "../components/ChatbotIcon";
import { Info } from "../components/Info";
// import "./Chatbot.css"

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([{
    hideInChat: true,
    role: "model",
    text: Info,
  }]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();
  // Helper function to update chat history 
  const updateHistory = (text, isError = false) => {
    setChatHistory((prev) => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model", text, isError}]);
  };

  const generateBotResponse = async (history) => {
    // format chat history for API request
    history = history.map(({role, text}) => ({role, parts: [{text}]}))
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({contents: history})
    }

    try {
      // make the api call to get the bot's response
      console.log("Sending request:", requestOptions);
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok){
        throw new Error(data.error.message || "Something went wrong!");
      }
      
      // Clean and update chat history with bot's response
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
      console.log(data);
    } catch (error) {
      // if an error occurs then udpate the last "Thinking..." text with the error message
      updateHistory(error.message, true);
    }
  }

  useEffect(() => {
    // Auto-scroll whenever chat history updates
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"});
  }, [chatHistory])
  
  return (
    <div className={`container ${showChatbot ? 'show-chatbot' : ""}`}>
      <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className='chatbot-popup'>
        {/* Chatbot Header */}
        <div className='chat-header'>
          <div className='header-info'>
            <Chatboticon/>
            <h2 className='logo-text'>Chatbot</h2>
          </div>  
          <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className='message bot-message'>
            <Chatboticon/>
            <p className='message-text'>
              Hey there 👋 <br /> How can I help you today?
            </p>
          </div>

          {/* used to render the chat history dynamically */}
          {chatHistory.map((chat, index) => {
              return <ChatMessage key={index} chat={chat}/> // passing a chat object with role and text properties as a prop
          })}
        </div>

        {/* Chatbot footer */}
        <div className="chat-footer">
          <Chatform chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
