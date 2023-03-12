const serverUrl = "https://localhost:1234";

function sendMessage(message) {
  console.log(`🔵 You sent: ${message}`);
}

function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log(`✅ Connecting to '${roomId}' room at '${serverUrl}'`);
    },
    disconnect() {
      console.log(`❌ Disconnected from '${roomId}' room at '${serverUrl}'`);
    },
  };
}

function ChatRoom({ roomId }) {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  function handleSendClick() {
    sendMessage(message);
  }

  return (
    <div>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}

function App() {
  const [roomId, setRoomId] = React.useState("general");
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">General</option>
          <option value="travel">Travel</option>
          <option value="music">Music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
