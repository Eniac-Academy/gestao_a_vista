import { useNavigate } from "react-router-dom";

// Importação da estilização da página
import "./index.css";

import { icons } from "../../data/icons.tsx";

// Importação da imagem da logo
import logoEniacAcademy from "../../assets/logoEniacAcademy.png";

import { useDatabase } from "../../context/DatabaseContext";

import CardEstacao from "../../components/cardEstacao";


function Home() {
  const { database } = useDatabase();

  const isLoading = Object.keys(database || {}).length === 0;

  const hubs = [
    "COMERCIAL",
    "HUB DE INOVAÇÃO",
    "HUB DE CARREIRAS",
    "HUB DE PROJETOS",
    "HUB SOCIAL",
  ];

  const navigate = useNavigate();

  return (
    <section className="containerApp">
      <header className="headerApp">
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
          <h1 className="conteudoApp-box-titulo">Bem-vindo ao sistema</h1>
          <h1 className="conteudoApp-box-titulo-secundario">Gestão à Vista</h1>
          <h1 className="conteudoApp-box-titulo-principal">
            Ecossistema de Inovação ENIAC
          </h1>
          <p className="conteudoApp-box-descricao">
            Escolha a baixo o setor que deseja visualizar{" "}
            <span className="text-color01">projetos</span>,{" "}
            <span className="text-color02">processos</span>,{" "}
            <span className="text-color03">rotinas</span> e muito mais.
          </p>
          <div className="conteudoApp-box-divisor"></div>
        </section>

        <section className="conteudoApp-estacao">
          <h2 className="conteudoApp-estacao-titulo">Selecione a estação</h2>
          <article className="conteudoApp-estacao-cards">
            {isLoading ? (
              <div className="loading-container">
                <div className="spinner"></div>
                <p className="loading-text">
                  Carregando as informações dos Hubs...
                </p>
              </div>
            ) : (
              <div className="conteudoApp-estacao-grid">
                <div className="row top-row">
                  <div className="card" onClick={() => navigate(`/operacao`)}>
                    <div className="card-icone">{icons["OPERAÇÃO"]}</div>
                    <p className="card-titulo">OPERAÇÃO</p>
                    <p className="card-descricao">
                      Gestão de atividades operacionais
                    </p>
                    <p className="card-projetos">projetos</p>
                  </div>

                  {/** Comercial como segundo card no topo */}
                  {database["COMERCIAL"] && (
                    <CardEstacao
                      key="COMERCIAL"
                      sigla="COMERCIAL"
                      descricao={database["COMERCIAL"].descricao}
                      totalProjetos={
                        database["COMERCIAL"].projects?.filter(
                          (projeto: any) =>
                            projeto["Status do Projeto"] === "Em andamento",
                        ).length || 0
                      }
                      icone={icons["COMERCIAL" as keyof typeof icons]}
                    />
                  )}
                </div>

                <div className="row bottom-row">
                  {hubs
                    .filter((hub) => hub !== "OPERAÇÃO" && hub !== "COMERCIAL")
                    .map((hub) => {
                      const data = database[hub];
                      if (!data) return null;

                      return (
                        <CardEstacao
                          key={hub}
                          sigla={hub}
                          descricao={data.descricao}
                          totalProjetos={
                            data.projects?.filter(
                              (projeto: any) =>
                                projeto["Status do Projeto"] === "Em andamento",
                            ).length || 0
                          }
                          icone={icons[hub as keyof typeof icons]}
                        />
                      );
                    })}
                </div>
              </div>
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

export default Home;
