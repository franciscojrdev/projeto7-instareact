import Corpo from "./Corpo";
import Navbar from "./Navbar";

function Mobile() {
  return (
    <div className="fundo-mobile">
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Corpo />
      <Mobile />
    </>
  );
}
