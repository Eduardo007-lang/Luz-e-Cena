import styles from'./Card.module.css'
import Tag from '../Tag'
import { type Categoria, type Censura } from '../Tag'

interface CardProps {
    src: string;
    alt?: string;
    titulo: string;
    genero: string;
    categoria: Categoria;
    duracao: string;
    censura: Censura;
}

const Card = (props: CardProps) => {

    const {src, alt, titulo, genero, categoria, duracao, censura} = props;

  return (
    <li className={styles.card}>
        <img src={src} alt={alt} />
        <div className={styles.container}>
            <h3>{titulo}</h3>
            <div className={styles.informacoes}>
               <div className={styles.linha1}>
                    <p>{genero}</p>
                    <Tag value={categoria} />
               </div>
               <div className={styles.linha2}>
                    <p>{duracao}</p>
                    <Tag value={censura} />
               </div>
            </div>
        </div>
    </li>
  )
}

export default Card
