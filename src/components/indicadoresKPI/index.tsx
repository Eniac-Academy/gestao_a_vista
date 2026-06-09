import './index.css'

interface IndicadoresKPIProps {
   number: number;
   text: string;
}

function IndicadoresKPI({ number, text }: IndicadoresKPIProps) {
  return (
    <div className='conteudoEstacao-KPI-box-item'>
        <h3 className='conteudoEstacao-KPI-box-item-modo'>{number}</h3>
        <p className='conteudoEstacao-KPI-box-item-text'>{text}</p>
    </div>
  );
}

export default IndicadoresKPI;