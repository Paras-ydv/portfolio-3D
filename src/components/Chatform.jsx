import { useRef } from 'react'

const Chatform = ({setChatHistory, generateBotResponse, chatHistory}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();  // removing whitespaces from the input message
        if(!userMessage){
            return;
        }
        inputRef.current.value = "";  // clearing the input msg as we got the value

        // update chat history with user's msg
        setChatHistory((history) => [...history, {role: "user", text: userMessage}]);

        // Add a thinking "Thinking..." placeholder for the bot's response
        setTimeout(() => {
            setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]);
            generateBotResponse([...chatHistory, {role: "user", text: `Using the details provided above, please address this query: ${userMessage}`}]);
        }, 600);
    };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/> 
        {/* ref attribute is used to connect a reference (created with useRef or createRef) to a DOM element. Once attached, we can directly access the underlying DOM node via ref.current. */}
        <button className="material-symbols-rounded">
              arrow_upward
          </button>
    </form>
  )
}

export default Chatform
