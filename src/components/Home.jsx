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
          <a href="#footer" className="cta-btn">
            Contacto
          </a>
          <a
            href="https://www.canva.com/design/DAFgdcs6Ggk/88aqTqF8IOt7HzfZOZNZYQ/view?utm_content=DAFgdcs6Ggk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelinkr"
            target="_blank"
            className="cta-btn">
            CV
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
