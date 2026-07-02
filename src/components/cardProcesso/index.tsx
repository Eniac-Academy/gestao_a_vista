import './index.css';

interface CardProcessoProps {
    modo: string;
    text: string;
    onClick?: () => void;
}

function CardProcesso({ modo, text, onClick }: CardProcessoProps) {
    return (
        <div className='conteudoEstacao-processo-box-item'>
            <h3 className='conteudoEstacao-processo-box-item-modo'>{modo}</h3>
            <p className='conteudoEstacao-processo-box-item-text'>{text}</p>
            <p className='conteudoEstacao-processo-box-item-vermais' onClick={onClick}>
                Ver Mais
            </p>
        </div>
    );
}

export default CardProcesso;