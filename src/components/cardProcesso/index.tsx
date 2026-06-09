import './index.css';

interface CardProcessoProps {
    modo: string;
    text: string;
}

function CardProcesso({ modo, text }: CardProcessoProps) {
    return (
        <div className='conteudoEstacao-processo-box-item'>
            <h3 className='conteudoEstacao-processo-box-item-modo'>{modo}</h3>
            <p className='conteudoEstacao-processo-box-item-text'>{text}</p>
        </div>
    );
}

export default CardProcesso;