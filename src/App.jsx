import { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [audio] = useState(new Audio("images/music.mp3"));

  const data = [
    "Tui nói neeeeeeeeeè",
    "Sẵn sàng chưaaaa",
    "Nếu như năm nay",
    "Tui về vn",
    "Bà có thể nào",
    "Cho tui 1 cơ hội",
    "Được hẹn hò với bà kh 😚",
  ];

  const gifs = [
    "images/gif_1.gif",
    "images/gif_2.gif",
    "images/gif_3.gif",
    "images/gif_4.gif",
    "images/gif_5.gif",
    "images/gif_6.gif",
    "images/gif_7.gif",
    // "/images/gif_8.gif",
    // "/images/gif_9.gif",
    // "/images/gif_10.gif",
    // "/images/gif_11.gif",
    // "/images/gif_12.gif",
    // "/images/gif_13.gif",
    // "/images/gif_14.gif",
    // "/images/gif_15.gif",
  ];

  function buttonClicked() {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    toggleMusic();
  }

  function toggleMusic() {
    audio.play();
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      audio.play();
    });
  }

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: 'url("images/background.gif")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div class="spacer"></div>
      <div className="container">
        <img className="gif" src={gifs[index]} alt="mimi and neko" />
      </div>
      <div className="container">
        <p>{data[index]}</p>
      </div>
      <div className="container">
        <button className="heart-button" onClick={buttonClicked}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
