// Importação da estilos CSS para o componente ModalProjetos
import "./index.css";

// Importação do icone do google drive
import googleDriveIcon from "../../assets/icone-google-drive.png";
import linkIcon from "../../assets/logo-link.png";

// Importação do icone de link externo
import { FaExternalLinkAlt } from "react-icons/fa";

interface ModalProjetosProps {
  onClose: () => void;
  projeto: any;
}


function ModalProjetos({ onClose, projeto }: ModalProjetosProps) {

  return (
    <div className="modalProjeto">
      <div className="modalProjeto-item">
        <header className="ModalProjeto-item-header">
          <h1 className="ModalProjeto-item-header-titulo">Informações do Projeto</h1>
          <span className="ModalProjeto-item-header-fechar" onClick={onClose}>&times;</span>
        </header>
        
        <main className="modalProjeto-item-main">
         <section className="modalProjeto-item-main-informacoes">
            <section className="modalProjeto-item-main-informacoes-esquerda">
              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">Nome do Projeto</p>
                <div className="modalProjeto-item-main-informacoes-box-item">
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["Nome do projeto"]}</p>
                </div>
              </article>

              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">ID do Projeto</p>
                <div className="modalProjeto-item-main-informacoes-box-item">
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["ID do projeto"]}</p>
                </div>
              </article>

              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">Nome do Desafio</p>
                <div className="modalProjeto-item-main-informacoes-box-item">
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["nome do desafio"]}</p>
                </div>
              </article>

              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">ID do Desafio</p>
                <div className="modalProjeto-item-main-informacoes-box-item">
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["ID do desafio"]}</p>
                </div>
              </article>

              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">Responsável</p>
                <div className="modalProjeto-item-main-informacoes-box-item">
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["Responsável"]}</p>
                </div>
              </article>

              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">Ciclo do Projeto</p>
                <div className="modalProjeto-item-main-informacoes-box-item">
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["Clclo do Projeto"]}</p>
                </div>
              </article>
            </section>
            <section className="modalProjeto-item-main-informacoes-direita">
              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">Sprints</p>
                <div className="modalProjeto-item-main-informacoes-box-item-modificador">
                  <p className="modalProjeto-item-main-informacoes-box-item-titulo">Sprint 1º</p>
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["Sprint 1°"]}</p>
                </div>

                <div className="modalProjeto-item-main-informacoes-box-item-modificador">
                  <p className="modalProjeto-item-main-informacoes-box-item-titulo">Sprint 2º</p>
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["Sprint 2°"]}</p>
                </div>

                <div className="modalProjeto-item-main-informacoes-box-item-modificador">
                  <p className="modalProjeto-item-main-informacoes-box-item-titulo">Sprint 3º</p>
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["Sprint 3°"]}</p>
                </div>

                <div className="modalProjeto-item-main-informacoes-box-item-modificador">
                  <p className="modalProjeto-item-main-informacoes-box-item-titulo">Sprint 4º</p>
                  <p className="modalProjeto-item-main-informacoes-box-item-text">{projeto["Sprint 4º"]}</p>
                </div>
              </article>

              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">Link da pasta do drive</p>
                <div className="modalProjeto-item-main-informacoes-box-item-drive">
                  <div className="modalProjeto-item-main-informacoes-box-item-drive-conteudo"> 
                    <img src={googleDriveIcon} alt="Google Drive" className="modalProjeto-item-main-informacoes-box-item-drive-icone"/>
                    <p className="modalProjeto-item-main-informacoes-box-item-text">Pasta do Google Drive</p>
                  </div>
                  
                  <a href={projeto["Link da Pasta no Drive"]} target="_blank" className="modalProjeto-item-main-informacoes-box-item-drive-link">
                    <FaExternalLinkAlt className="modalProjeto-item-main-informacoes-box-item-drive-link-icone"/>
                  </a>
                </div>
              </article>

              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">Link da a ENIAC Link+</p>
                <div className="modalProjeto-item-main-informacoes-box-item-drive">
                  <div className="modalProjeto-item-main-informacoes-box-item-drive-conteudo"> 
                    <img src={linkIcon} alt="ENIAC Link+" className="modalProjeto-item-main-informacoes-box-item-drive-icone"/>
                    <p className="modalProjeto-item-main-informacoes-box-item-text">ENIAC Link+     </p>
                  </div>
                  
                  <a href={projeto["Link para a ENIAC Link+"]} target="_blank" className="modalProjeto-item-main-informacoes-box-item-drive-link">
                    <FaExternalLinkAlt className="modalProjeto-item-main-informacoes-box-item-drive-link-icone"/>
                  </a>
                </div>
              </article>

              <article className="modalProjeto-item-main-informacoes-box">
                <p className="modalProjeto-item-main-informacoes-box-titulo">Integrantes</p>
                <div className="modalProjeto-item-main-informacoes-box-item">
                  <p className="modalProjeto-item-main-informacoes-box-item-text">
                    {projeto["Integrantes do projeto"]}
                  </p>
                </div>
              </article>
            </section>
         </section>

         <section className="modalProjeto-item-main-atividades">
            <article className="modalProjeto-item-main-atividades-box">
                <p className="modalProjeto-item-main-atividades-box-titulo">Observação</p>
                <div className="modalProjeto-item-main-atividades-box-item">
                  <p className="modalProjeto-item-main-atividades-box-item-text">{projeto["Observações"]}</p>
                </div>
              </article>
         </section>
        </main>
      </div>
    </div>
  );
}

export default ModalProjetos;
