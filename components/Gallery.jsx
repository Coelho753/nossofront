// Gallery.jsx — estática
import React, { useState } from "react";

export default function Gallery({ photos }) {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <section id="galeria">
      <h2>Galeria</h2>

      <div className="postit">
        <div className="gallery">
          <div className="main">
            {photos.length > 0 ? (
              <div className="main-img-wrapper">
                <img src={photos[mainIndex].url} alt="" />
                <div className="img-overlay">{photos[mainIndex].message}</div>
              </div>
            ) : (
              <div className="placeholder">Nenhuma foto cadastrada</div>
            )}
          </div>

          <div className="gallery-grid">
            {photos.map((p, i) => (
              <div
                key={p.id}
                className="thumb"
                onClick={() => setMainIndex(i)}
              >
                <img src={p.url} alt="" />
                <div className="thumb-overlay">{p.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
