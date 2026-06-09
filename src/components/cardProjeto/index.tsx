import "./index.css";

interface CardProjetoProps {
  id_projeto: number;
  nome_projeto: string;
  sprint1: string;
  sprint2: string;
  sprint3: string;
  sprint4: string;
  onClick?: () => void;
}

function CardProjeto({
  id_projeto,
  nome_projeto,
  sprint1,
  sprint2,
  sprint3,
  sprint4,
  onClick,
}: CardProjetoProps) {
  let progresso = 0;

  function calcularProgresso(
    sprint1: string,
    sprint2: string,
    sprint3: string,
    sprint4: string,
  ) {
    const sprints = [sprint1, sprint2, sprint3, sprint4];
    const totalSprints = sprints.length;
    const sprintsFinalizados = sprints.filter(
      (sprint) => sprint === "Finalizado",
    ).length;
    progresso = Math.round((sprintsFinalizados / totalSprints) * 100);
  }

  function getStatusClass(
    sprint1: string,
    sprint2: string,
    sprint3: string,
    sprint4: string,
  ) {
    const sprints = [sprint1, sprint2, sprint3, sprint4];
    return sprints.map((sprint) => {
      if (sprint === "Finalizado") {
        return "finalizado";
      }
      if (sprint === "Em andamento") {
        return "em-andamento";
      }
      if (sprint === "Não Iniciado") {
        return "nao-iniciado";
      }
      if (sprint === "Em atraso") {
        return "em-atraso";
      }
      return "";
    });
  }

  const statusClasses = getStatusClass(sprint1, sprint2, sprint3, sprint4);
  calcularProgresso(sprint1, sprint2, sprint3, sprint4);

  return (
    <div className="conteudoEstacao-projetos-box-item">
      <p className="conteudoEstacao-projetos-box-item-titulo">
        {id_projeto} - {nome_projeto}
      </p>

      <div className="conteudoEstacao-projetos-box-item-sprints-item">
        <div className="conteudoEstacao-projetos-box-item-sprints-item-status">
          <p className="conteudoEstacao-projetos-box-item-sprints-item-titulo">
            S1
          </p>
          <div
            className={`conteudoEstacao-projetos-box-item-sprints-item-tarefas ${statusClasses[0]}`}
          ></div>
        </div>

        <div className="conteudoEstacao-projetos-box-item-sprints-item-status">
          <p className="conteudoEstacao-projetos-box-item-sprints-item-titulo">
            S2
          </p>
          <div
            className={`conteudoEstacao-projetos-box-item-sprints-item-tarefas ${statusClasses[1]}`}
          ></div>
        </div>

        <div className="conteudoEstacao-projetos-box-item-sprints-item-status">
          <p className="conteudoEstacao-projetos-box-item-sprints-item-titulo">
            S3
          </p>
          <div
            className={`conteudoEstacao-projetos-box-item-sprints-item-tarefas ${statusClasses[2]}`}
          ></div>
        </div>

        <div className="conteudoEstacao-projetos-box-item-sprints-item-status">
          <p className="conteudoEstacao-projetos-box-item-sprints-item-titulo">
            S4
          </p>
          <div
            className={`conteudoEstacao-projetos-box-item-sprints-item-tarefas ${statusClasses[3]}`}
          ></div>
        </div>
      </div>

      <div className="conteudoEstacao-projetos-box-item-sprints-item-progresso">
        <div className="conteudoEstacao-projetos-box-item-sprints-item-progresso-item">
          <div
            className="conteudoEstacao-projetos-box-item-sprints-item-progresso-item-bar"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
        <p className="conteudoEstacao-projetos-box-item-sprints-item-progresso-dado">
          {progresso}%
        </p>
      </div>

      <button
        type="button"
        className="conteudoEstacao-projetos-box-item-sprints-item-ver-mais"
        onClick={onClick}
      >
        Ver Mais
      </button>
    </div>
  );
}

export default CardProjeto;
