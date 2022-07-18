
function CreateUser(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.title}</strong>
                {props.subtitle}
            </div>
        </div>
    )
}

export default function User() {
    return (
        <CreateUser img="assets/img/catanacomics.svg" title="canatacomics" subtitle="catana" />
    );
}