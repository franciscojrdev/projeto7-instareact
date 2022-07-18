import ReactDOM from "react-dom";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

function App() {
    return (
    <div class="main">
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>

        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <div class="sidebar">
                <div class="usuario">
                    <img src="assets/img/catanacomics.svg" />
                    <div class="texto">
                        <strong>catanacomics</strong>
                        Catana
                    </div>
                </div>

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/bad.vibes.memes.svg" />
                            <div class="texto">
                                <div class="nome">bad.vibes.memes</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/chibirdart.svg" />
                            <div class="texto">
                                <div class="nome">chibirdart</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/razoesparaacreditar.svg" />
                            <div class="texto">
                                <div class="nome">razoesparaacreditar</div>
                                <div class="razao">Novo no Instagram</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/adorable_animals.svg" />
                            <div class="texto">
                                <div class="nome">adorable_animals</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                            <img src="assets/img/smallcutecats.svg" />
                            <div class="texto">
                                <div class="nome">smallcutecats</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>

        <div class="fundo-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    </div>
    );
}
ReactDOM.render(<App />, document.querySelector(".root"));