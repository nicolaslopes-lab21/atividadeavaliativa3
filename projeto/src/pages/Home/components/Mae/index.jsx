import "./style.css";

// Importa a foto 3 subindo 4 níveis para chegar em assets
import fotoMae from "../../../../assets/foto3.jpeg";

function Mae() {
  return (
    <section id="mae" className="section-mae">
      <h2>Minha Mãe</h2>
      <div className="card-mae">
        <img
          src={fotoMae}
          alt="Minha Mãe"
        />
        <p>
          Mãe, obrigado por todo amor, carinho e dedicação. Seu apoio incondicional 
          e sua força sempre foram os pilares que me sustentam e me inspiram a 
          ser uma pessoa melhor a cada dia.
        </p>
      </div>
    </section>
  );
}

export default Mae;