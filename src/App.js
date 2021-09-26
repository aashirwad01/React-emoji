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

  function emojicolor(mean) {
    if (mean === "Smile") {
      return "green";
    } else if (mean == "Love") {
      return "#FF1493";
    } else if (mean == "Sparkles") {
      return "yellow";
    } else if (mean == "Fire") {
      return "#FFA500";
    } else if (mean == "sad") {
      return "grey";
    } else if (mean == "Angry Face") {
      return "DarkRed ";
    } else if (mean == "Grinning Face") {
      return "#4B0082";
    } else if (mean == "Face with Tears of Joy") {
      return "aqua";
    } else if (mean === "Slightly Smiling Face") {
      return "yellowgreen";
    } else if (mean === "Upside-Down Face") {
      return "olive";
    } else if (mean === "Face Blowing a Kiss") {
      return "chocolate";
    } else if (mean === "annoyance") {
      return "red";
    } else if (mean === "Face Without Mouth") {
      return "white";
    } else if (mean === "Cowboy Hat Face") {
      return "blueviolet";
    }
  }

  return (
    <div className="App">
      <h1 id="line-0">What's this Emoji</h1>
      <input onChange={emojihandler} />
      <h1 id="line-1">
        Emoji is : <span style={{ color: emojicolor(mean) }}>{mean}</span>
      </h1>
      <h1 id="line-2">Click on any emoji in database to know about</h1>
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
