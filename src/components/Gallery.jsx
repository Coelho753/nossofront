import React from "react";

export default function Gallery() {
  const images = [
    { id: 1, url: "/img/foto4.jpg", message: "Nosso primeiro momento juntos" },
    { id: 2, url: "/img/foto5.jpg", message: "Um dia especial" },
    { id: 3, url: "/img/foto6.jpg", message: "Eu amo você" }
  ];

  return (
    <section id="galeria">
      <h2>Galeria</h2>

      <div className="postit gallery-column">
        {images.map((img) => (
          <div key={img.id} className="polaroid reveal float-anim">
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
