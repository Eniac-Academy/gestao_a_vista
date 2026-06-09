import './index.css';

interface CardRotinasProps {
    modo: string;
    text: string;
}

function CardRotinas({ modo, text }: CardRotinasProps) {
    return (
        <div className='conteudoEstacao-rotinas-box-item'>
            <h3 className='conteudoEstacao-rotinas-box-item-modo'>{modo}</h3>
            <p className='conteudoEstacao-rotinas-box-item-text'>{text}</p>
        </div>
    );
}

export default CardRotinas;