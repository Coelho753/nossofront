import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostItSection from "./components/PostItSection";
import Gallery from "./components/Gallery";
import EntradaRomantica from "./components/EntradaRomantica";

export default function App() {
  const [entrou, setEntrou] = useState(false);
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

  // Scroll reveal
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

  // -------- TELA INICIAL ROMÂNTICA --------
  if (!entrou) {
    return <EntradaRomantica onConfirm={() => setEntrou(true)} />;
  }

  // -------- CONTEÚDO PRINCIPAL --------
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
        <div className="circle"><img src="/img/foto4.jpg" alt="1" /></div>
        <div className="circle"><img src="/img/foto8.jpg" alt="2" /></div>
        <div className="circle"><img src="/img/foto3.jpg" alt="3" /></div>
      </section>

      <PostItSection
        id="historia"
        title="História"
        animated={true}
        content={[
          "Tudo começou no dia em que vi você naquele story",
          "e não consegui tirar você da minha cabeça",
          "eu queria saber mais sobre você, queria ser seu",
          "e com o tempo tomei vergonha na cara e fui te chamar no Insta",
          "foram muitas tentativas de te conquistar",
          "até você comentar sobre meu dedo quebrado e tudo mudar",
          "as conversas que eram só papo furado",
          "viraram noites até mais tarde com papos",
          "sobre a vida e cada risada na mensagem",
          "era um sorriso sincero na vida real",
          "e em uma fagulha de esperança",
          "fiz aquela aposta",
          "e fiquei com mais esperança quando você aceitou",
          "e se eu tinha alguma dúvida sobre o que a gente tinha",
          "no momento em que você disse olhando no meu olho",
          "que não queria que eu fosse um filho da puta",
          "eu tive certeza que eu queria você pra mim",
          "e queria ser seu mais que tudo naquele momento.",
          "E hoje depois de mais de um ano",
          "com você sendo minha oficialmente pra todo mundo",
          "tenho certeza que minha vida sem você não existe",
          "você já é parte da minha família, parte de mim",
          "Eu te amo minha Princesa"
        ]}
      />

      <PostItSection
        id="amo"
        title="10 Coisas que Odeio em você"
        animated={true}
        content={[
          "1  Odeio não sentir seu bafinho de manhã.",
          "2 Odeio brigar contigo.",
          "3 Odeio não poder acordar com você.",
          "4 Odeio não conseguir demonstrar metade do que sinto.",
          "5 Odeio não poder te beijar todos os dias.",
          "6 Odeio sentir seu cheiro nas minhas roupas e não sentir você nos meus braços.",
          "7 Odeio como você é gostosa e todo mundo pode te ver.",
          "8 Odeio quando sonho contigo e você não tá lá de verdade.",
          "9 Odeio acordar abraçando o travesseiro e não ser você de conchinha.",
          "10 Odeio ficar sem você."
        ]}
      />

      <Gallery />
    </div>
  );
}
