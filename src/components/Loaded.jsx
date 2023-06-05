import "../css/loader.css";

const Loaded = () => {
  const text = " RODRIGO J. CASTELLANOS | DEVELOPER FULL STACK";

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
