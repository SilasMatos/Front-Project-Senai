import React from "react";
import imgEquipe2 from "../../Imagens/foto1.jpg"
import "../Styles/StyleContents/Profile.css"

function Profile(){
    return(
    <>
   <div className="content-action">
        <div className="content-avatar">
        <div class="avatar">
            <img src={imgEquipe2} alt="Descrição da imagem"/>
            </div>
        </div>
        <div className="content-dados">
          <div>
            <p><span>Nome: </span>Ingrid Barreto de Almeida Passos </p>
            <p><span>Cargo: </span>Professora</p>
            <p><span>Email: </span>ingrid.passos@gmail.com </p>
            <p><span>Telefone: </span>(75) 9 9999 - 9999</p>
          </div>
        </div>
       </div>
    </>
    )
}

export default Profile