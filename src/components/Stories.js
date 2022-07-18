
function Seta() {
    return (
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>);
}

const Storie = [
    { img: "assets/img/9gag.svg", text: "9gag" },
    { img: "assets/img/meowed.svg", text: "meowed" },
    { img: "assets/img/barked.svg", text: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", text: "nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", text: "wawawicomics" },
    { img: "assets/img/respondeai.svg", text: "respondeai" },
    { img: "assets/img/filomoderna.svg", text: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", text: "memeriagourmet" }
]

export default function Stories() {
    return (
        <div class="stories">
            {Storie.map(storie => (
                <div class="story">
                    <div class="imagem">
                        <img src={storie.img} />
                    </div>
                    <div class="usuario">
                        {storie.text}
                    </div>
                </div>))}
            <Seta/>
        </div>
    );
}