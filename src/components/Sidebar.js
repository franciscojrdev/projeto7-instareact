import User from "./User";
import Suggestions from "./Suggestions";

function Links() {
    return (<div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>);
}
function Rights() {
    return (<div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
    </div>)
}

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User />
            <Suggestions />
            <Links />
            <Rights />
        </div>
    );
}