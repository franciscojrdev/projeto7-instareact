import { useState } from "react";

export default function Usuario() {

  const [name,setName] = useState("Catana");
  const [perfil, setPerfil] = useState("assets/img/catanacomics.svg")


  return (
    <div className="usuario">
      <img src={perfil} onClick={() => setPerfil(prompt("Informe o link da foto"))}/>
      <div className="texto">
        <strong>{name}</strong>
        <span>
          {name}
          <ion-icon name="pencil" onClick={() => setName(prompt("Informe seu nome"))}></ion-icon>
        </span>
      </div>
    </div>
  );
}
