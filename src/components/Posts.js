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
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.profile} />
          {props.name}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.src} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={click === true?"heart":"heart-outline"} class={click === true?"clicado":""} onClick={() => setClick(!click)}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={save === true?"bookmark":"bookmark-outline"} onClick={() => setSave(!save)}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.liked} />
          <div class="texto">
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
    <div class="posts">
      {arrPost.map((i) => (
        <Post
          profile={i.profile}
          name={i.name}
          src={i.src}
          liked={i.liked}
          likedName={i.likedName}
          qtdLikes={i.qtdLikes}
        />
      ))}
    </div>
  );
}
