import "./Options.css";

const Options = ({ setView }) => {
  return (
    <div>
      <ul id="Options">
        <li onClick={(e) => setView(true)}>Calcular desconto</li>
        <li onClick={(e) => setView(false)}>Buscar folha</li>
      </ul>
    </div>
  );
};

export default Options;
