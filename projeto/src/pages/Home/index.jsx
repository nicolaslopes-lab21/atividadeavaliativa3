import Hero from "./components/Hero";
import Mae from "./components/Mae";
import Pai from "./components/Pai";
import Galeria from "./components/Galeria";
import Videos from "./components/Videos";
import "./style.css";

function Home() {
  return (
    <main className="home-container">
      <Hero />
      <Mae />
      <Pai />
      <Galeria />
      <Videos />
    </main>
  );
}

export default Home;