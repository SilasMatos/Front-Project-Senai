import React from "react";
import NavBar from "../../Navbar/Navbar";
import SectionBanner1 from "../../Section-Banner/Banner";
import prosen from "../../../Imagens/prosen.png";
import imgInstituicao from "../../../Imagens/imagem-instituicao.png";
import "../../Styles/Home.css";
import { HiLocationMarker } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import CardCarousel from "../../Carousel/Carousel";
import Vector from "../../../Imagens/Vector.png";
import CardEvent from "../../CardEvent/CardEvent";
import Devs from '../../../Imagens/devs.png';
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <SectionBanner1 />
      <div className="content-container">
        <div className="tx-cont container Section_Prosen">
          <h1>A Instituição</h1>
        </div>

        <section id="section">
          <div className="text-column">
            <div className="container edit-text">
              <h2 className="section-heading">SENAI Feira de Santana</h2>
              <p id="par-tx-edit">
                O Senai Feira de Santana tem como diferencial o uso de
                <br /> tecnologias avançadas em seus laboratórios e centros de{" "}
                <br />
                formação, proporcionando aos alunos uma formação prática
                <br /> e alinhada com as demandas do mercado de trabalho. Além{" "}
                <br />
                de possuir um corpo docente qualificado, composto por <br />
                profissionais experientes.
              </p>
              <div className="container-infos">
                <div className="div-ajust-loc">
                  <div className="loc-info">
                    <HiLocationMarker id="icon-loc" />
                    <p id="tx-icon">
                      Av. Eduardo Fróes da Mota, 5000 - Campo Limpo
                    </p>
                  </div>
                  <div className="loc-info">
                    <BiTimeFive id="icon-loc" />
                    <p id="tx-icon">
                      Segunda a Sexta: 08h - 20h / Sábado: 08h - 12h
                    </p>
                  </div>
                </div>
                <button className="btn-edit-loc">SAIBA MAIS</button>
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <img src={imgInstituicao} alt="Imagem" id="img-sec-01" />
            </div>
          </div>
        </section>
      </div>
      <div className=" container div-title">
        <h1>Nossos Cursos</h1>
      </div>
      <CardCarousel />

      <div>
        <div className="container">
          <div className="Section_Prosen">
            <h1>A plataforma</h1>
            <div className="ContainerBox">
              <img className="img-fluid" src={prosen} alt="ProSen Senai" />
              <div>
                <p className="paragraph">
                  O ProSen é plataforma de busca de trabalhos e divulgação de
                  eventos desenvolvidos no SENAI-FEIRA DE SANTANA. Essa
                  iniciativa visa promover a visibilidade dos projetos e estudos
                  realizados por alunos e profissionais ligados a instituição,
                  destacando seu potencial inovador e contribuição para o avanço
                  da indústria brasileira.
                </p>
                <p className="paragraph">
                  A plataforma oferece uma interface intuitiva e ferramentas de
                  pesquisa avançadas, permitindo aos usuários encontrar
                  trabalhos relacionados a áreas específicas e que estarão
                  disponíveis ao público.
                </p>
                <p className="paragraph">
                  Com essa plataforma, espera-se que o conhecimento gerado no
                  âmbito do SENAI-FEIRA DE SANTANA possa ser compartilhado de
                  forma ampla, facilitando a colaboração e impulsionando ainda
                  mais o desenvolvimento tecnológico e industrial em nossa
                  região.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="BoxRepositories no-margin">
          <p>Conheça o Repositório de Projetos SENAI Feira de Santana</p>
          <button>
            CLIQUE AQUI <img src={Vector} alt="Clique Aqui" />
          </button>
        </div>
      </div>
      <div className="contCards">
              <div className="container div-title ">
        <h1>Nossos Cursos</h1>
      </div>
      <div className="container-fluid edit-cont-cards">
        <div className="divEvent"><CardEvent /></div>
        <div className="divEvent"><CardEvent /></div>
        <div className="divEvent"><CardEvent /></div>
        <div className="divEvent"><CardEvent /></div>
      </div>
      <div className="seeButton">
        <button className="buttonCards">VER TODOS OS EVENTOS</button>
      </div>
      </div>
      <div className="showDevs">
          <img src={Devs} alt="Conheça nossos desenvolvedores" />
          <div className="devM">
            <p>Conheça os Idealizadores e Desenvolvedores do ProSen</p>
            <Link to='/equipe'>
            <button>
            CLIQUE AQUI <img src={Vector} alt="Clique Aqui" />
          </button>
          </Link>
          </div>
      </div>
      <Footer/>

    </div>
  );
};


