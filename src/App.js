import React, { useState } from "react";
import "./styles.css";

var emojipedia = {
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😘": "Face Blowing a Kiss",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😠": "Angry Face",
  "❤️": "Love",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy"
};

export default function App() {
  return (
    <div className="App">
      <h1>What's the Emoji</h1>
      <input />
    </div>
  );
}
