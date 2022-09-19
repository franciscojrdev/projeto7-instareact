import storyImg from "../data/story";

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
