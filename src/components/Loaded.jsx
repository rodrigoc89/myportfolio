import "../css/loader.css";
import Image from "react-bootstrap/Image";
const Loaded = () => {
  const text = " Bienvenido a mi portafolio";

  const loader = Array.from(text).map((char, index) => (
    <span key={index} className="m">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <>
      <h3 className="loader">{loader}</h3>
    </>
  );
};

export default Loaded;
