import React, { useState } from "react";
import "./styles.css";

var emojipedia = {
  "❤️": "Love",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": "Smile",
  "😔": "sad",
  "🤠": "Cowboy Hat Face",
  "😀": "Grinning Face",
  "😠": "Angry Face",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😘": "Face Blowing a Kiss",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😑": "annoyance"
};

var emojiset = Object.keys(emojipedia);

export default function App() {
  const [mean, setmean] = useState("");

  function emojihandler(event) {
    var input = event.target.value;
    var mean = emojipedia[input];
    if (mean === undefined) {
      mean = "We don't have emoji in database yet";
    }
    setmean(mean);
  }

  function inputmean(item) {
    var mean = emojipedia[item];
    setmean(mean);
  }

  return (
    <div className="App">
      <h1>What's the Emoji</h1>
      <input onChange={emojihandler} />
      <h1>Emoji is : {mean}</h1>
      <ul>
        {emojiset.map(function (item) {
          return (
            <li onClick={() => inputmean(item)} key={item} id="list">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
