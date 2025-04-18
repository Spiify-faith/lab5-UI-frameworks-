import React, { useState } from "react";
import "./styles.css"; // make sure this is imported

function App({ name }) {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Welcome, {name}!</h1>

      <div className="image-section">
        {/* Replace the src below with your own image URL */}
        <img src="perfumes.jpg" alt="Profile" className="profile-image" />
      </div>

      <button onClick={toggleMessage}>
        {showMessage ? "Hide" : "Show"} Message
      </button>

      {showMessage && <p>i am Selita ,i love perfumes</p>}
    </div>
  );
}
export default App;