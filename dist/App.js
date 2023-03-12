"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var serverUrl = "https://localhost:1234";
function sendMessage(message) {
  console.log("\uD83D\uDD35 You sent: ".concat(message));
}
function createConnection(serverUrl, roomId) {
  return {
    connect: function connect() {
      console.log("\u2705 Connecting to '".concat(roomId, "' room at '").concat(serverUrl, "'"));
    },
    disconnect: function disconnect() {
      console.log("\u274C Disconnected from '".concat(roomId, "' room at '").concat(serverUrl, "'"));
    }
  };
}
function ChatRoom(_ref) {
  var roomId = _ref.roomId;
  var _React$useState = React.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    message = _React$useState2[0],
    setMessage = _React$useState2[1];
  React.useEffect(function () {
    var connection = createConnection(serverUrl, roomId);
    connection.connect();
    return function () {
      return connection.disconnect();
    };
  }, [roomId]);
  function handleSendClick() {
    sendMessage(message);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to the ", roomId, " room!"), /*#__PURE__*/React.createElement("input", {
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleSendClick
  }, "Send"));
}
function App() {
  var _React$useState3 = React.useState("general"),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    roomId = _React$useState4[0],
    setRoomId = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    show = _React$useState6[0],
    setShow = _React$useState6[1];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Choose the chat room:", " ", /*#__PURE__*/React.createElement("select", {
    value: roomId,
    onChange: function onChange(e) {
      return setRoomId(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "general"
  }, "General"), /*#__PURE__*/React.createElement("option", {
    value: "travel"
  }, "Travel"), /*#__PURE__*/React.createElement("option", {
    value: "music"
  }, "Music"))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShow(!show);
    }
  }, show ? "Close chat" : "Open chat"), show && /*#__PURE__*/React.createElement("hr", null), show && /*#__PURE__*/React.createElement(ChatRoom, {
    roomId: roomId
  }));
}
var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render( /*#__PURE__*/React.createElement(App, null));