"use client";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Questions() {
  const questions = [
    "Tui mún hỏi bà cái nì",
    "Nếu như cuối năm nay...",
    "Tui về vn chơi 😙",
    "Bà có thể nào 👉👈",
    "Hẹn hò với tui dc kh 🫣",
  ];
  const noAnswers = [
    "Kh dc",
    "Đồng í di mà",
    "Kh đồng í tui khok đó",
    "Năn nỉ lun ớ",
  ];
  const gifs = [
    "1.gif",
    "2.gif",
    "3.gif",
    "4.gif",
    "5.gif",
    "6.gif",
    "7.gif",
    "8.jpg",
  ];
  const [ended, setEnded] = useState(false);
  const [currentGif, setCurrentGif] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [hideContents, setHideContents] = useState(false);

  const buttonClass =
    "inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-red-400 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-rose-200/60 transition-all duration-200 ease-out hover:shadow-rose-300/70 hover:-translate-y-[1px] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-200";

  const cupidAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/sounds/cupid.mp3");
    cupidAudioRef.current = audio;

    const play = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Ignore playback errors (e.g., blocked autoplay).
      });
    };

    // Start when the page loads, then restart when the sound ends.
    play();
    audio.addEventListener("ended", play);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", play);
      if (cupidAudioRef.current === audio) {
        cupidAudioRef.current = null;
      }
    };
  }, []);

  const stopCupidSound = () => {
    if (!cupidAudioRef.current) return;
    cupidAudioRef.current.pause();
    cupidAudioRef.current.currentTime = 0;
  };

  const playSound = (src: string) => {
    // Use the browser Audio API (works after a user click/tap).
    const audio = new Audio(src);
    audio.play().catch(() => {
      // Ignore playback errors (e.g., blocked autoplay).
    });
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setCurrentGif(currentGif + 1);
  };

  const handleYes = () => {
    // Stop the looping background sound started in useEffect.
    stopCupidSound();
    setCurrentGif(6);
    playSound("/sounds/yay.mp3");
    setHideContents(true);
  };

  const handleNo = () => {
    setCurrentGif(5);
    if (currentAnswer === noAnswers.length - 1) {
      setCurrentAnswer(0);
    } else {
      setCurrentAnswer(currentAnswer + 1);
    }
  };

  const playSaranghea = () => {
    setCurrentGif(7);
    playSound("/sounds/saranghea.mp3");
    setEnded(true);
  };

  return (
    <PageWrapper contentClassName="mx-auto max-w-lg">
      <div className="flex w-full flex-col items-center gap-6 text-center">
        <div className="relative mx-auto w-fit max-w-full">
          <Image
            src={`/mimi_neko/${gifs[currentGif]}`}
            alt="Mimi Neko"
            width={500}
            height={500}
            className="h-auto w-44 max-w-full transition-transform duration-300 ease-out sm:w-52 md:w-64 lg:w-72"
          />
        </div>
        {!hideContents && (
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            {questions[currentQuestion]}
          </h1>
        )}
        {currentQuestion !== questions.length - 1 && (
          <button className={buttonClass} onClick={handleNext}>
            Next
          </button>
        )}
        {currentQuestion === questions.length - 1 && !hideContents && (
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch">
            <button className={`${buttonClass} sm:flex-1`} onClick={handleYes}>
              Ok lun nhó 🫣
            </button>
            <button className={`${buttonClass} sm:flex-1`} onClick={handleNo}>
              {noAnswers[currentAnswer]}
            </button>
          </div>
        )}
        {hideContents && !ended && (
          <button className={buttonClass} onClick={playSaranghea}>
            Next
          </button>
        )}
      </div>
    </PageWrapper>
  );
}
