import { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [audio] = useState(new Audio("images/music.mp3"));
  const [open, setOpen] = useState(false);
  const [yesIndex, setYesIndex] = useState(0);
  const [noIndex, setNoIndex] = useState(0);
  const [rejected, setRejected] = useState(false);
  const [audio2] = useState(new Audio("images/saranghae.mp3"));

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
    "images/shy.gif",
    "images/saranghae.gif",
  ];

  const no = [
    "Nút này hư r 🙁",
    "Nhấn nút kia iiiii 🥲",
    "Nút này hư thiệt maaà 😭",
  ];
  const yes = [
    "Thiệt honggggggg",
    "Chắc chưaaaaaa 🤪",
    "Suy nghĩ kỹ nhaaaa 😚",
    "Kh dc suy nghĩ lại nhaaa 🤣",
    "Saranghae 💕💕💕",
  ];

  function buttonClicked() {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  }

  function toggleMusic() {
    audio.play();
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      audio.play();
    });
  }

  function openEnvelope() {
    setOpen(true);
    if (audio.paused) {
      toggleMusic();
    }
  }

  function yesClicked() {
    setYesIndex(yesIndex + 1);
    setRejected(false);
    if (yesIndex === yes.length - 1) {
      audio.pause();
      playAudio2();
    }
  }

  function noClicked() {
    if (noIndex === no.length) {
      setNoIndex(1);
    } else {
      setNoIndex(noIndex + 1);
    }
    setRejected(true);
  }

  function playAudio2() {
    audio.pause();
    audio2.play();
    audio2.addEventListener("ended", () => {
      audio.play();
    });
  }

  return (
    <div>
      {!open ? (
        <div style={{ background: "pink", height: "100vh" }}>
          <div style={{ height: "100px" }}></div>
          <div className="container">
            <p style={{ color: "red" }}>
              Nhấn vào tym<br></br>để mở thư nhoooo
            </p>
          </div>
          <div className="container">
            <div
              style={{ position: "relative", height: "700px", width: "900px" }}
            >
              <img
                src="images/envelope.jpg"
                alt="envelope"
                style={{ height: "100%", width: "100%" }}
                useMap="#envelopeMap"
              />
              <map name="envelopeMap">
                <area
                  shape="rect"
                  coords="360, 300, 570, 450"
                  onClick={openEnvelope}
                />
              </map>
            </div>
          </div>
        </div>
      ) : (
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
            {yesIndex === 0 && noIndex === 0 ? (
              <img className="gif" src={gifs[index]} alt="mimi and neko" />
            ) : rejected ? (
              <img
                className="gif"
                src="images/reject.gif"
                alt="mimi and neko"
              />
            ) : yesIndex !== yes.length ? (
              <img
                className="gif"
                src="images/gif_hinata.gif"
                alt="mimi and neko"
              />
            ) : (
              <img
                className="gif"
                src="images/saranghae.gif"
                alt="mimi and neko"
              />
            )}
          </div>
          <div className="container">
            {yesIndex === 0 && noIndex === 0 ? (
              <p>{data[index]}</p>
            ) : rejected ? (
              <p>{no[noIndex - 1]}</p>
            ) : (
              <p>{yes[yesIndex - 1]}</p>
            )}
          </div>
          <div className="container">
            {index < data.length - 1 ? (
              <button className="heart-button" onClick={buttonClicked}>
                Next
              </button>
            ) : yesIndex !== yes.length ? (
              <div>
                <button className="heart-button" onClick={yesClicked}>
                  Okie luon 💕
                </button>
                <button className="heart-button" onClick={noClicked}>
                  Để suy nghĩ 😌
                </button>
              </div>
            ) : (
              <button className="heart-button" onClick={playAudio2}>
                Nhấn nút này đi 😚
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
