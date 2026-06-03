import "./style.css";

// Importando as fotos para a galeria
import fotoGaleria1 from "../../../../assets/foto2.jpeg";
import fotoGaleria2 from "../../../../assets/foto4.jpeg";
import fotoGaleria3 from "../../../../assets/foto5.jpeg";

function Galeria() {
  return (
    <section id="galeria" className="section-galeria">
      <h2>📸 Galeria de Memórias</h2>
      
      <div className="container-galeria">
        {/* Card 1 - Foto 2 */}
        <div className="card-galeria">
          <img src={fotoGaleria1} alt="Memória 1" />
        </div>

        {/* Card 2 - Foto 4 */}
        <div className="card-galeria">
          <img src={fotoGaleria2} alt="Memória 2" />
        </div>

        {/* Card 3 - Foto 5 */}
        <div className="card-galeria">
          <img src={fotoGaleria3} alt="Memória 3" />
        </div>
      </div>
    </section>
  );
}

export default Galeria;