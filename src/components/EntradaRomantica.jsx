import React, { useState } from "react";
import "./entrada.css";

export default function EntradaRomantica({ onConfirm }) {
  const [pos, setPos] = useState({ top: "60%", left: "50%" });

  // botão NÃO se move aleatoriamente
  function moveButton() {
    const top = Math.random() * 80 + "%";
    const left = Math.random() * 80 + "%";
    setPos({ top, left });
  }

  return (
    <div className="entrada-container">
      <div className="entrada-box">
        <h2>Promete ficar comigo para sempre? ❤️</h2>

        <div className="btn-area">
          <button className="btn-sim" onClick={onConfirm}>
            Prometo
          </button>

          <button
            className="btn-nao"
            onMouseEnter={moveButton}
            onClick={moveButton}
            style={{ top: pos.top, left: pos.left }}
          >
            NÃO
          </button>
        </div>
      </div>
    </div>
  );
}
