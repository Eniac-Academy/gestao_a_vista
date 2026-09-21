// Importação da estilização da página
import "./index.css";

import { icons } from "../../data/icons.tsx";

// Importação da imagem da logo
import logoEniacAcademy from "../../assets/logoEniacAcademy.png";

import { useDatabase } from "../../context/DatabaseContext";

import CardEstacao from "../../components/cardEstacao";

import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";

function Operacao() {
  const { database } = useDatabase();

  const navigate = useNavigate();

  const isLoading = Object.keys(database || {}).length === 0;

  const hubs = [
    "COMERCIAL",
    "HUB DE INOVAÇÃO",
    "HUB DE CARREIRAS",
    "HUB DE PROJETOS",
    "HUB SOCIAL",
  ];

  return (
    <section className="containerApp">
      <header className="headerApp">
        <article className="headerEstacao-botao" onClick={() => navigate(-1)}>
            <FaArrowLeft className="headerEstacao-botao-voltar" />
        </article>

        <div className="headerApp-logo">
          <img
            src={logoEniacAcademy}
            alt="Logo Eniac Academy"
            className="headerApp-logo-item"
          />
        </div>
      </header>

      <main className="conteudoApp">
        <section className="conteudoApp-box">
          <h1 className="conteudoApp-box-titulo">Operação</h1>

          {database["OPERAÇÃO"] && (
              <CardEstacao
                key={"OPERAÇÃO"}
                sigla={"OPERAÇÃO"}
                descricao={
                  database["OPERAÇÃO"].descricao ||
                  "Gestão de atividades operacionais"
                }
                totalProjetos={
                  database["OPERAÇÃO"].projects?.filter(
                    (projeto: any) =>
                      projeto["Status do Projeto"] === "Em andamento",
                  ).length || 0
                }
                icone={icons["OPERAÇÃO" as keyof typeof icons]}
              />

          )}

          <div className="conteudoApp-box-divisor"></div>
        </section>

        <section className="conteudoApp-estacao">
          <h2 className="conteudoApp-estacao-titulo">Selecione a estação</h2>
          <article className="conteudoApp-estacao-cards">
            {isLoading ? (
              <div className="loading-container">
                <div className="spinner"></div>
                <p className="loading-text">
                  Carregando as informações das estações...
                </p>
              </div>
            ) : (
              // Exclui da listagem as estações que estão no array `hubs` e a própria OPERAÇÃO
              (() => {
                const excluded = [...hubs, "OPERAÇÃO"];
                return Object.values(database)
                  .filter((station: any) => !excluded.includes(station.sigla))
                  .map((station: any) => (
                    <CardEstacao
                      key={station.sigla}
                      sigla={station.sigla}
                      descricao={station.descricao}
                      totalProjetos={
                        station.projects?.filter(
                          (projeto: any) =>
                            projeto["Status do Projeto"] === "Em andamento",
                        ).length || 0
                      }
                      icone={icons[station.sigla as keyof typeof icons]}
                    />
                  ));
              })()
            )}
          </article>
        </section>
      </main>

      <footer className="footerApp">
        <p className="footerApp-texto">
          &copy; Desenvolvido pela equipe de DEV (Desenvolvimento de Sistema)
        </p>
      </footer>
    </section>
  );
}

export default Operacao;
