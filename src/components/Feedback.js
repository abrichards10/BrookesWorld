import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [username, setUsername] = useState(""); // Allow dynamic username input

  useEffect(() => {
    socket.on("newFeedback", (feedback) => {
      setFeedbackList((prevList) => [...prevList, feedback]);
    });

    return () => {
      socket.off("newFeedback");
    };
  }, []);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const submitFeedback = () => {
    if (username && selectedEmoji) {
      const feedback = {
        username,
        emoji: selectedEmoji,
        timestamp: new Date().toISOString(),
      };
      socket.emit("sendFeedback", feedback);
      setSelectedEmoji("");
    }
  };

  return (
    <div>
      <h1>Feedback</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <button onClick={() => handleEmojiClick("😊")}>😊</button>
        <button onClick={() => handleEmojiClick("😢")}>😢</button>
        <button onClick={() => handleEmojiClick("😡")}>😡</button>
        {/* Add more emojis as needed */}
      </div>
      <button onClick={submitFeedback} disabled={!selectedEmoji || !username}>
        Submit Feedback
      </button>
      <ul>
        {feedbackList.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.username}</strong> ({feedback.timestamp}):{" "}
            {feedback.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
