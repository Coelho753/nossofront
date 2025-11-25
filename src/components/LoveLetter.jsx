import React from "react";
import "./LoveLetter.css";

export default function LoveLetter({ title = "Motivo", message = "" }) {
  return (
    <div className="postit love-postit">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
