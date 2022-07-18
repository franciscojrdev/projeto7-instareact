import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import BackMobile from "./components/BackMobile";

function App() {
    return (
    <div class="main">
        <Navbar />
        <Main />
        <BackMobile />
    </div>
    );
}
ReactDOM.render(<App />, document.querySelector(".root"));