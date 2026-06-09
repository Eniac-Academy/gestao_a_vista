import { useNavigate } from 'react-router-dom';

import './index.css';



interface CardEstacaoProps {
  sigla: string;
  descricao: string;
  totalProjetos: number;
  icone: React.ReactNode;
}

function CardEstacao({ sigla, descricao, totalProjetos, icone }: CardEstacaoProps) {

  const navigate = useNavigate();

  return (
    <div
      className='card'
      onClick={() => navigate(`/estacao/${sigla}`)}
    >

      <div className='card-icone'>
        {icone}
      </div>

      <p className='card-titulo'>
        {sigla}
      </p>

      <p className='card-descricao'>
        {descricao}
      </p>

      <p className='card-projetos'>
        {totalProjetos} projetos
      </p>

    </div>
  );
}

export default CardEstacao;