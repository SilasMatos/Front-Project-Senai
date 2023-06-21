import React from "react";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SectionBanner2 from "../../Section-Banner/Banner2";
import {AiOutlineMail,AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import imgEquipe1 from "../../../Imagens/foto-erick.png"
import imgEquipe2 from "../../../Imagens/foto-ingrid.png"
import "../../Styles/Equipe.css"



function Equipe(){
    return (
        <>
        <NavBar/>
        <SectionBanner2/>
        <div className="content-container">
        <div className="tx-cont container Section_Prosen">
          <h1>Idealizadores</h1>
        </div>
        </div>
        <div class="sec-equipe-1">
    <div class="image-container-s">
        <img alt="" src={imgEquipe1} />
    </div>
    <div class="sec-equipe-2">
        <div class="container edit1">
            <h4 id="edit-tx-h4">Erik do Carmo Marques</h4>
            <p id="edit-tx">Pós graduando no Programa de Pós-Graduação em Ciência da Computação. Possui Pós Graduação <br/>lato-sensu no Curso de Especialização em Gestão da informação com ênfase em Redes de Computadores e<br/> Aplicações Web pela Faculdade Santissimo Sacramento (2018), MBA em Business intelligence<br/> e graduação em Sistemas para Internet pela Faculdade Anísio Teixeira (2016). Tem experiência na área<br/> acadêmica ministrando aulas em cursos de qualificação profissional, ensino técnico e superior além de<br/> trabalhar em projetos de desenvolvimento Web como freelancer. Atualmente exerce a função de Gestor<br/> Mis da Qualidade na empresa Tel Centro de Contatos.</p>
            <div id="icons-divs">
                <AiOutlineMail id="icons-equipe" />
                <AiFillLinkedin id="icons-equipe" />
            </div>
        </div>
    </div>
</div>
<div class="sec-equipe-1">
    <div class="sec-equipe-2-v2">
        <div class="container edit1-v2">
            <h4 id="edit-tx-h4-v2">Ingrid Barreto de Almeida Passos</h4>
            <p id="edit-tx-v2">Especialista em Gestão de Projetos (2022) e Gestão de Pessoas (2015). Graduada em<br/>Administração pela Universidade Salvador (2014). Experiência na área Administrativa <br/>Responsabilidade Social Empresarial e Empreendedorismo. Docente e Orientadora de Projetos<br/> com prática de ensino em Comunicação Empresarial, Gestão de Pessoas, Inovação e <br/>Empreendedorismo, Gestão de Projetos, Liderança de Equipes e outros.</p>
            <div id="icons-divs-2">
                <AiOutlineMail id="icons-equipe" />
                <AiFillLinkedin id="icons-equipe" />
            </div>
        </div>
    </div>
    <div class="image-container2">
        <img alt="" src={imgEquipe2} />
    </div>
</div>
<div className="tx-cont container Section_Prosen">
          <h1>Idealizadores</h1>
        </div>
        <div class="sec-equipe-1">
    <div class="image-container-s">
        <img alt="" src={imgEquipe1} />
    </div>
    <div class="sec-equipe-2">
        <div class="container edit1">
            <h4 id="edit-tx-h4">Erik do Carmo Marques</h4>
            <p id="edit-tx">Pós graduando no Programa de Pós-Graduação em Ciência da Computação. Possui Pós Graduação <br/>lato-sensu no Curso de Especialização em Gestão da informação com ênfase em Redes de Computadores e<br/> Aplicações Web pela Faculdade Santissimo Sacramento (2018), MBA em Business intelligence<br/> e graduação em Sistemas para Internet pela Faculdade Anísio Teixeira (2016). Tem experiência na área<br/> acadêmica ministrando aulas em cursos de qualificação profissional, ensino técnico e superior além de<br/> trabalhar em projetos de desenvolvimento Web como freelancer. Atualmente exerce a função de Gestor<br/> Mis da Qualidade na empresa Tel Centro de Contatos.</p>
            <div id="icons-divs">
                <AiOutlineMail id="icons-equipe" />
                <AiFillLinkedin id="icons-equipe" />
            </div>
        </div>
    </div>
</div>
<div class="sec-equipe-1">
    <div class="sec-equipe-2-v2">
        <div class="container edit1-v2">
            <h4 id="edit-tx-h4-v2">Ingrid Barreto de Almeida Passos</h4>
            <p id="edit-tx-v2">Especialista em Gestão de Projetos (2022) e Gestão de Pessoas (2015). Graduada em<br/>Administração pela Universidade Salvador (2014). Experiência na área Administrativa <br/>Responsabilidade Social Empresarial e Empreendedorismo. Docente e Orientadora de Projetos<br/> com prática de ensino em Comunicação Empresarial, Gestão de Pessoas, Inovação e <br/>Empreendedorismo, Gestão de Projetos, Liderança de Equipes e outros.</p>
            <div id="icons-divs-2">
                <AiOutlineMail id="icons-equipe" />
                <AiFillLinkedin id="icons-equipe" />
            </div>
        </div>
    </div>
    <div class="image-container2">
        <img alt="" src={imgEquipe2} />
    </div>
</div>
<Footer/>
        </>
    )
}


export default Equipe