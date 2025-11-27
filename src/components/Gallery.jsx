import React from "react";

export default function Gallery() {
  const images = [
    { "id": 1,
    "url": "/img/foto9.jpg",
    "message": "Nosso primeiro momento juntos"
  },
  {
    "id": 2,
    "url": "/img/foto5.jpg",
    "message": "uma das nossas primeiras fotos"
  },
  {
    "id": 3,
    "url": "/img/foto6.jpg",
    "message": "Dia do Pula-Pula"
  },
  {
    "id": 6,
    "url": "/img/foto2.jpg",
    "message": "Fotasso da porra"
  },
  {
    "id": 4,
    "url": "/img/foto1.jpg",
    "message": "Foto bem Gay"
  },
  {
    "id": 5,
    "url": "/img/foto7.jpg",
    "message": "Hallowenn"
  }


  ];

  return (
    <section id="galeria">
      <h2>Galeria</h2>

      <div className="postit gallery-column">
        {images.map((img) => (
          <div key={img.id} className="polaroid reveal visible float-anim">
            <img 
              src={img.url}
              alt={img.message || "Foto"}   /* <<< AQUI CORRIGIDO */
              className="polaroid-img"
            />
            <p className="polaroid-text">{img.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
