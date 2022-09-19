const sugestions = [
  { src: "assets/img/bad.vibes.memes.svg", title: "bad.vibes.memes",razao:"Segue você" },
  { src: "assets/img/chibirdart.svg", title: "chibirdart", razao:"Segue você" },
  { src: "assets/img/razoesparaacreditar.svg", title: "razoesparaacreditar",razao:"Novo no Instagram" },
  { src: "assets/img/adorable_animals.svg", title: "adorable_animals", razao:"Segue você" },
  { src: "assets/img/smallcutecats.svg", title: "smallcutecats", razao:"Segue você" }
];
function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.src} />
        <div class="texto">
          <div class="nome">{props.title}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestions.map((i) => <Sugestao src={i.src} title={i.title} razao={i.razao}/>)}
    </div>
  );
}
