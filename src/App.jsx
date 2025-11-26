import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostItSection from "./components/PostItSection";
import Gallery from "./components/Gallery";

export default function App() {
  const [timerText, setTimerText] = useState("");

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

  useEffect(() => {
  const els = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.88;

    els.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("visible");
    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  return () => window.removeEventListener("scroll", revealOnScroll);
 }, []);


  return (
    <div className="container">
      <Navbar />

      <section id="timer" className="hero">
        <div className="postit main-postit">
          <h1 className="title">GUSTAVO & ANA JÚLIA</h1>
          <h2>Juntos há:</h2>
          <div className="timer-box">{timerText}</div>
        </div>
      </section>

      <section className="circles-container">
        <div className="circle"><img src="/img/foto1.jpg" alt="1" /></div>
        <div className="circle"><img src="/img/foto2.jpg" alt="2" /></div>
        <div className="circle"><img src="/img/foto3.jpg" alt="3" /></div>
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

      <Gallery />

    </div>
  );
}
