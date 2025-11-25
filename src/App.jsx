// App.jsx — versão estática
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostItSection from "./components/PostItSection";
import Gallery from "./components/Gallery";
import LoveLetter from "./components/LoveLetter";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [timerText, setTimerText] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/photos.json", { cache: "no-store" });
        if (!res.ok) {
          console.warn("photos.json não encontrado:", res.status);
          return;
        }
        const data = await res.json();
        setPhotos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erro ao carregar photos.json:", err);
      }
    }
    load();
  }, []);

  // Cronômetro
  useEffect(() => {
    function updateTimer() {
      const start = new Date(2024, 9, 27, 19, 30);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      if (seconds < 0) { seconds += 60; minutes--; }
      if (minutes < 0) { minutes += 60; hours--; }
      if (hours < 0) { hours += 24; days--; }
      if (days < 0) {
        months--;
        const lastMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastMonthDays;
      }
      if (months < 0) { months += 12; years--; }

      setTimerText(`${years} anos • ${months} meses • ${days} dias • ${hours}h • ${minutes}m • ${seconds}s`);
    }
    updateTimer();
    const iv = setInterval(updateTimer, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="container">
      <Navbar />

      <section id="timer" className="hero">
        <div className="postit main-postit">
          <h1 className="title">GUSTAVO & ANA JÚLIA</h1>
          <div className="timer-box">{timerText}</div>
        </div>
      </section>

      <section className="circles-container">
        <div className="circle"><img src="/img/foto1.jpg" alt="1"/></div>
        <div className="circle"><img src="/img/foto2.jpg" alt="2"/></div>
        <div className="circle"><img src="/img/foto3.jpg" alt="3"/></div>
      </section>

      <PostItSection
        id="historia"
        title="História"
        animated={true}
        content={[
          "Nosso começo foi inesperado.",
          "A cada dia tudo fica mais especial."
        ]}
      />

      <PostItSection
        id="amo"
        title="Coisas que amo em você"
        animated={true}
        content={[
          "Seu sorriso.",
          "Seu carinho.",
          "Seu jeito único."
        ]}
      />

      {/* Galeria estática */}
      <Gallery photos={photos} />

      <LoveLetter />
    </div>
  );
}
