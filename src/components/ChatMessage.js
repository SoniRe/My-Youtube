const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  items-center">
      <img
        className="rounded-full w-11 p-2"
        src="https://yt4.ggpht.com/ytc/AIf8zZRr-RSWa--bSTr_scoro8O8rYKu5qYDSJOcpyCEuA=s32-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div className="flex gap-3 justify-center items-center">
        <h1 className=" text-zinc-500 font-semibold text-sm">{name} </h1>
        <h2 className="text-sm">{message}</h2>
      </div>
    </div>
  );
};

export default ChatMessage;
