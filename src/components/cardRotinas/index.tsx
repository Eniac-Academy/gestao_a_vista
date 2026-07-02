import './index.css';

interface CardRotinasProps {
    modo: string;
    text: string;
    onClick?: () => void;
}

function CardRotinas({ modo, text, onClick }: CardRotinasProps) {
    return (
        <div className='conteudoEstacao-rotinas-box-item'>
            <h3 className='conteudoEstacao-rotinas-box-item-modo'>{modo}</h3>
            <p className='conteudoEstacao-rotinas-box-item-text'>{text}</p>
            <p className='conteudoEstacao-rotinas-box-item-vermais' onClick={onClick}>
                Ver Mais
            </p>
        </div>
    );
}

export default CardRotinas;