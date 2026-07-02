// Importação da estilos CSS para o componente ModalProjetos
import "./index.css";

import { FaExternalLinkAlt } from "react-icons/fa";

import iconeDocumento from '../../assets/icone-documento.png'

interface ModalAtividadeProps {
  onClose: () => void;
  rotina?: any;
  processo?: any;
  atividade?: any;
}

function ModalAtividade({ onClose, rotina, processo, atividade }: ModalAtividadeProps) {

  const getAtividade = () => {
    if (atividade === 'Rotina') {
      return rotina;
    }
    if (atividade === 'Processo') {
      return processo;
    }
    return null;
  };

  const atividadeSelecionada = getAtividade();

  console.log(atividadeSelecionada);

  return (
    <div className="modalAtividade">
      <div className="modalAtividade-item">
        <header className="modalAtividade-item-header">
          <h1 className="modalAtividade-item-header-titulo">Informações do Rotinas</h1>
          <span className="modalAtividade-item-header-fechar" onClick={onClose}>
            &times;
          </span>
        </header>
        
        <main className="modalAtividade-item-main">
         <section className="modalAtividade-item-main-informacoes">
            <article className="modalAtividade-item-main-informacoes-box">
                <p className="modalAtividade-item-main-informacoes-box-titulo">Período</p>
                <div className="modalAtividade-item-main-informacoes-box-item">
                  <p className="modalAtividade-item-main-informacoes-box-item-text">{atividadeSelecionada["Período"] || atividadeSelecionada["Periodo"]}</p>
                </div>
            </article>

            <article className="modalAtividade-item-main-informacoes-box">
                <p className="modalAtividade-item-main-informacoes-box-titulo">Processo</p>
                <div className="modalAtividade-item-main-informacoes-box-item">
                  <p className="modalAtividade-item-main-informacoes-box-item-text">{atividadeSelecionada["Processo"] || atividadeSelecionada["Rotinas"]}</p>
                </div>
            </article>

            <article className="modalAtividade-item-main-informacoes-box">
                <p className="modalAtividade-item-main-informacoes-box-titulo">Descrição</p>
                <div className="modalAtividade-item-main-informacoes-box-item">
                  <p className="modalAtividade-item-main-informacoes-box-item-text">{atividadeSelecionada["Descrição"]}</p>
                </div>
            </article>

            <article className="modalAtividade-item-main-informacoes-box">
                <p className="modalAtividade-item-main-informacoes-box-titulo">Responsável</p>
                <div className="modalAtividade-item-main-informacoes-box-item">
                  <p className="modalAtividade-item-main-informacoes-box-item-text">{atividadeSelecionada["responsável"]}</p>
                </div>
            </article>

            { atividadeSelecionada["Anexo"] && (
                <article className="modalAtividade-item-main-informacoes-box">
                <p className="modalAtividade-item-main-informacoes-box-titulo">Anexo</p>
                <div className="modalAtividade-item-main-informacoes-box-item-drive">
                  <div className="modalAtividade-item-main-informacoes-box-item-drive-conteudo"> 
                    <img src={iconeDocumento} alt="ENIAC Link+" className="modalAtividade-item-main-informacoes-box-item-drive-icone"/>
                    <p className="modalAtividade-item-main-informacoes-box-item-text">Arquivo de Anexo</p>
                  </div>
                  
                  <a href={atividadeSelecionada["Anexo"]} target="_blank" className="modalAtividade-item-main-informacoes-box-item-drive-link">
                    <FaExternalLinkAlt className="modalAtividade-item-main-informacoes-box-item-drive-link-icone"/>
                  </a>
                </div>
              </article>
            )}

            
         </section>
        </main>
      </div>
    </div>
  );
}

export default ModalAtividade;
