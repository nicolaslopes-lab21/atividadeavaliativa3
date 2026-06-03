import "./style.css";

// Importa apenas a Foto 1 para o componente do Pai
import fotoPai1 from "../../../../assets/foto1.jpeg";

function Pai() {
  return (
    <section id="pai" className="section-pai">
      <h2>Meu Pai</h2>
      
      <div className="container-cards-pai">
        {/* Card Único com a Foto 1 */}
        <div className="card-pai">
          <img
            src={fotoPai1}
            alt="Meu Pai"
          />
          <p>
            Pai, obrigado por cada conselho prático, exemplo de integridade e
            incentivo constante. Sua determinação e honestidade me inspiram diariamente 
            a buscar meus objetivos com dignidade e foco.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pai;