import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>

        <section id="inicio" className="hero">
          <h2> Uma Homenagem Especial </h2>

          <p>
            Esta página foi criada com muito carinho para homenagear as duas
            pessoas mais importantes da minha vida: minha mãe e meu pai.
          </p>
        </section>

        <section id="mae" className="section">
          <h2>Minha Mãe</h2>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Mãe"
            />

            <p>
              Mãe, obrigado por cada conselho, cada abraço e por todo amor
              incondicional. Sua força e dedicação me inspiram todos os dias.
              Você é um exemplo de carinho, coragem e determinação.
            </p>
          </div>
        </section>

        <section id="pai" className="section">
          <h2>👨‍👧 Meu Pai</h2>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Pai"
            />

            <p>
              Pai, obrigado pelos ensinamentos, pela proteção e por mostrar o
              verdadeiro valor da honestidade e do trabalho. Seu exemplo estará
              sempre presente na minha vida.
            </p>
          </div>
        </section>

        <section id="galeria" className="section">
          <h2>📸 Galeria de Memórias</h2>

          <div className="gallery">
            <img src="https://picsum.photos/300/200?1" alt="" />
            <img src="https://picsum.photos/300/200?2" alt="" />
            <img src="https://picsum.photos/300/200?3" alt="" />
            <img src="https://picsum.photos/300/200?4" alt="" />
          </div>
        </section>

        <section id="videos" className="section">
          <h2>🎥 Dedicatória em Vídeo</h2>

          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aqz-KE-bpKQ"
              title="Vídeo"
              allowFullScreen
            ></iframe>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;