import "../css/Hero.css";
import Loaded from "./Loaded";
const Home = () => {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>
            <Loaded />
          </h1>
          <p>
            Soy un desarrollador web apasionado por crear experiencias
            digitales.
          </p>
          <a href="#contact" className="cta-btn">
            Contacto
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
