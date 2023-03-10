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
        }
        
    }
}

function App() {
    return;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);