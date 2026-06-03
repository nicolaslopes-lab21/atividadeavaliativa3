import "./style.css";

function Videos() {
  return (
    /* O segredo está aqui: o id PRECISA ser "videos" para o link do menu funcionar */
    <section id="videos" className="section-video">
      <h2>🎵 Dedicatória em Vídeo</h2>
      
      <div className="container-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mg2EsqkXZrY"
          title="Caetano Veloso - O Leãozinho"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      <p className="legenda-video">
        "Gosto muito de te ver, leãozinho..." 🦁
      </p>
    </section>
  );
}

export default Videos;