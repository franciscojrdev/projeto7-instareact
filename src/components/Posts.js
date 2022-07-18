
const post = [{
    img: "assets/img/meowed.svg",
    title: "meowed",
    backImg: "assets/img/gato-telefone.svg",
    profile: "respondeai",
    liked: 101.523
},
{
    img: "assets/img/meowed.svg",
    title: "meowed",
    backImg: "assets/img/dog.svg",
    profile: "adorable_animals",
    liked: 99.159
}]

export default function Posts() {
    return (
        <div class="posts">
            {post.map(info => (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={info.img} />
                        {info.title}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={info.backImg} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" />
                        <div class="texto">
                            Curtido por <strong>{info.profile}</strong> e <strong>outras {info.liked} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>))}
        </div>);
}