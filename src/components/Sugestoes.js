import sugestions from "../data/sugestions";

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.src} alt={props.title}/>
        <div className="texto">
          <div className="nome">{props.title}</div>
          <div className="razao">{props.razao}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestions.map((el,i) => <Sugestao key={i} src={el.src} title={el.title} razao={el.razao}/>)}
    </div>
  );
}
