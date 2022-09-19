const storyImg = [
  { img: "assets/img/9gag.svg", title: "9gag" },
  { img: "assets/img/meowed.svg", title: "meowed" },
  { img: "assets/img/barked.svg", title: "barked" },
  { img: "assets/img/nathanwpylestrangeplanet.svg", title: "nathanwpylestrangeplanet" },
  { img: "assets/img/wawawicomics.svg", title: "wawawicomics" },
  { img: "assets/img/respondeai.svg", title: "respondeai" },
  { img: "assets/img/filomoderna.svg", title: "filomorderna" },
  { img: "assets/img/memeriagourmet.svg", title: "memeriagourmet" }
];

function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.src} alt={props.title}/>
      </div>
      <div className="usuario">{props.title}</div>
    </div>
  );
}

export default function Stories() {
  return (
    <div className="stories">
      {storyImg.map((el,i) => <Story key={i} src={el.img} title={el.title}/>)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
