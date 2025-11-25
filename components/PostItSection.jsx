import React from 'react';

export default function PostItSection({ id, title, content=[] , animated=false }){
  return (
    <section id={id}>
      <h2>{title}</h2>
      <div className={`postit ${animated ? 'animated-section' : ''}`}>
        {content.map((p,i)=> <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}
