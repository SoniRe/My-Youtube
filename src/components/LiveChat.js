import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { messages } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const typedMessage = useRef();
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling

      // Fecthing Live Data and adding the messages to list
      dispatch(addMessage(messages[index]));
      index++;

      if (index == 90) index = 0;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="m-3 p-2 border border-neutral-800 bg-neutral-100 rounded-xl h-[65vh] w-96 overflow-y-auto flex flex-col-reverse">
        {chatMessages.map((obj, index) => {
          return (
            <ChatMessage key={index} name={obj.name} message={obj.message} />
          );
        })}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center items-center"
      >
        <input
          ref={typedMessage}
          type="text"
          className="mx-3 w-[22vw] text-base px-2 py-1 rounded-full border border-black"
          placeholder="Chat..."
        />
        <button
          onClick={() =>
            dispatch(
              addMessage({
                name: "Aditya",
                message: typedMessage.current.value,
              })
            )
          }
        >
          <i class="ri-send-plane-2-line cursor-pointer text-lg p-1"></i>
        </button>
      </form>
    </>
  );
};

export default LiveChat;
