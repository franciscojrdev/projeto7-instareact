import { useState } from "react";

const arrPost = [
  {
    profile: "assets/img/meowed.svg",
    name: "meowed",
    src: "assets/img/gato-telefone.svg",
    liked: "assets/img/respondeai.svg",
    likedName: "respondeai",
    qtdLikes: 101523
  },
  {
    profile: "assets/img/barked.svg",
    name: "barked",
    src: "assets/img/dog.svg",
    liked: "assets/img/adorable_animals.svg",
    likedName: "adorable_animals",
    qtdLikes: 99159
  },
];
function Post(props) {
  const [click,setClick] = useState(false);
  const [save,setSave] = useState(false);

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.profile} />
          {props.name}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.src} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={click === true?"heart":"heart-outline"} className={click === true?"clicado":""} onClick={() => setClick(!click)}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={save === true?"bookmark":"bookmark-outline"} onClick={() => setSave(!save)}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.liked} />
          <div className="texto">
            Curtido por <strong>{props.likedName}</strong> e{" "}
            <strong>outras {(click === true ? props.qtdLikes+1 : props.qtdLikes)} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  return (
    <div className="posts">
      {arrPost.map((el,i) => (
        <Post
          key={i}
          profile={el.profile}
          name={el.name}
          src={el.src}
          liked={el.liked}
          likedName={el.likedName}
          qtdLikes={el.qtdLikes}
        />
      ))}
    </div>
  );
}
