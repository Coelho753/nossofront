import React, { useState } from "react";

export default function Gallery({ photos = [], apiBase, onUpload, onFileChange, message, setMessage }){
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <section id="galeria">
      <h2>Galeria</h2>

      {/* upload postit */}
      <div className="postit upload-postit">
        <form className="upload-form" onSubmit={onUpload}>
          <h3>Adicionar Foto</h3>
          <input type="file" accept="image/*" onChange={onFileChange}/>
          <input type="text" placeholder="Mensagem" value={message} onChange={e=>setMessage(e.target.value)} />
          <button className="btn" type="submit">Enviar foto</button>
        </form>
      </div>

      {/* galeria */}
      <div className="postit">
        <div className="gallery">
          <div className="main">
            {photos.length===0 ? <div className="placeholder">Nenhuma foto ainda</div> : (
              <div className="main-img-wrapper">
                <img className="gallery-main-img" src={`${apiBase}${photos[mainIndex].url}`} alt="main" />
                <div className="img-overlay">{photos[mainIndex].message}</div>
              </div>
            )}
          </div>

          <div className="gallery-grid">
            {photos.map((p, i)=> (
              <div key={p._id} className="gallery-item thumb" onClick={()=> setMainIndex(i)}>
                <img className="gallery-img" src={`${apiBase}${p.url}`} alt={p.originalname} />
                <div className="thumb-overlay">{p.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
