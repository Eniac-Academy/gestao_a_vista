// Importação da estilização
import "./index.css";

// Importação da logo do ENIAC Academy
import logo from "../../assets/logoEniacAcademy.png";

// Importação do Modal de Projetos
import ModalProjetos from "../../components/ModalProjetos";

import { useState } from "react";

import IndicadoresKPI from "../../components/indicadoresKPI";

import CardRotinas from "../../components/cardRotinas";

import CardProcesso from "../../components/cardProcesso";

import CardProjeto from "../../components/cardProjeto";

import { useParams, useNavigate } from "react-router-dom";

import { useDatabase } from "../../context/DatabaseContext";

import { FaArrowLeft } from "react-icons/fa6";

function Estacao() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const { sigla } = useParams();

  const { database } = useDatabase();

  const navigate = useNavigate();

  const station = Object.values(database).find(
    (item: any) => item.sigla === sigla,
  );

  const projetosEmAndamento = station.projects.filter((projeto: any) =>
      projeto["Status do Projeto"] === "Em andamento"
  );

  return (
    <section className="containerEstacao">
      {isModalOpen && <ModalProjetos onClose={() => setIsModalOpen(false)} projeto={selectedProject}/>}

      <header className="headerEstacao">
        <article className="headerEstacao-botao" onClick={() => navigate(`/`)}>
            <FaArrowLeft className="headerEstacao-botao-voltar"/>
        </article>

        <article className="headerEstacao-principal">
          <div className="headerEstacao-principal-logo">
            <img
              src={logo}
              alt="Logo do ENIAC Academy"
              className="headerEstacao-principal-logo-item"
            />
          </div>
          <div className="headerEstacao-principal-divisor"></div>
          <div className="headerEstacao-principal-texto">
            <p className="headerEstacao-principal-texto-titulo">
              Desenvolvimento de Sistemas
            </p>
            <p className="headerEstacao-principal-texto-subtitulo">
              Gestão à Vista
            </p>
          </div>
        </article>
        <article className="headerEstacao-secundario">
          <p className="headerEstacao-secundario-text">
            <span className="text-bold">Líder(s):</span> {station.lider}
          </p>
          <p className="headerEstacao-secundario-text">
            <span className="text-bold">Více Líder:</span> {station.viceLider}
          </p>
        </article>
      </header>

      <main className="conteudoEstacao">
        <section className="conteudoEstacao-KPI">
          <h2 className="conteudoEstacao-KPI-titulo">
            Indicadores Rápidos (KPI)
          </h2>
          <article className="conteudoEstacao-KPI-box">
            <IndicadoresKPI
              number={projetosEmAndamento.length}
              text="Projetos em Andamento"
            />
            <IndicadoresKPI
              number={station.processes.length}
              text="Processos sendo realizados"
            />
            <IndicadoresKPI
              number={station.routines.length}
              text="Rotinas sendo realizados"
            />
          </article>
        </section>

        <section className="conteudoEstacao-rotinas">
          <h2 className="conteudoEstacao-rotinas-titulo">Rotinas</h2>
          <article className="conteudoEstacao-rotinas-box">
            {station.routines.length > 0 ? (
              station.routines.map((rotina: any, index: number) => (
                <CardRotinas
                  key={index}
                  modo={rotina.Período}
                  text={rotina.Rotinas}
                />
              ))
            ) : (
              <p className="conteudoEstacao-rotinas-box-vazio">
                Nenhuma rotina cadastrada
              </p>
            )}
          </article>
        </section>

        <section className="conteudoEstacao-processos">
          <h2 className="conteudoEstacao-processos-titulo">Processos Ativos</h2>
          <article className="conteudoEstacao-processo-box">
            {station.processes.length > 0 ? (
              station.processes.map((processo: any, index: number) => {
                return (
                  <CardProcesso
                    key={index}
                    modo={processo.Periodo}
                    text={processo.Processo}
                  />
                );
              })
            ) : (
              <p className="conteudoEstacao-processo-box-vazio">
                Nenhum processo cadastrado
              </p>
            )}
          </article>
        </section>

        <section className="conteudoEstacao-projetos">
          <h2 className="conteudoEstacao-projetos-titulo">
            Projetos em andamento
          </h2>

          <article className="conteudoEstacao-projetos-statusCor">
            <div className="conteudoEstacao-projetos-statusCor-item">
              <div className="conteudoEstacao-projetos-statusCor-item-status em-andamento"></div>
              <p className="conteudoEstacao-projetos-statusCor-item-titulo">
                Em andamento
              </p>
            </div>

            <div className="conteudoEstacao-projetos-statusCor-item">
              <div className="conteudoEstacao-projetos-statusCor-item-status finalizado"></div>
              <p className="conteudoEstacao-projetos-statusCor-item-titulo">
                Finalizado
              </p>
            </div>

            <div className="conteudoEstacao-projetos-statusCor-item">
              <div className="conteudoEstacao-projetos-statusCor-item-status nao-iniciado"></div>
              <p className="conteudoEstacao-projetos-statusCor-item-titulo">
                Não iniciado
              </p>
            </div>

            <div className="conteudoEstacao-projetos-statusCor-item">
              <div className="conteudoEstacao-projetos-statusCor-item-status em-atraso"></div>
              <p className="conteudoEstacao-projetos-statusCor-item-titulo">
                Atrasado
              </p>
            </div>
          </article>

          <article className="conteudoEstacao-projetos-box">
            {projetosEmAndamento.length > 0 ? (
              projetosEmAndamento.map((projeto: any, index: number) => {
                return (
                  <CardProjeto
                    key={index}
                    id_projeto={projeto["ID do projeto"]}
                    nome_projeto={projeto["Nome do projeto"]}
                    sprint1={projeto["Sprint 1°"]}
                    sprint2={projeto["Sprint 2°"]}
                    sprint3={projeto["Sprint 3°"]}
                    sprint4={projeto["Sprint 4º"]}
                    onClick={() => {
                        setSelectedProject(projeto);
                        setIsModalOpen(true);
                    }}
                  />
                );
              })
            ) : (
              <p className="conteudoEstacao-processo-box-vazio">
                Nenhum projeto cadastrado
              </p>
            )}
          </article>
        </section>
      </main>
    </section>
  );
}

export default Estacao;
