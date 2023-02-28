import styles from '../styles/Card.module.css';
import Image from 'next/image';

interface CardProps {
  title: string
  subTitle: string
  description: string | JSX.Element
  image: string
  detailImage: string
}

const Card = ({ title, subTitle, description, image, detailImage }: CardProps) => {
  return  (
    <div className={styles.card}>
      <div className={styles.textHeaderRoot}>
        <p className={styles.textHeader}>
          {title}
        </p>
        <p className={styles.textSubHeaderBold}>
          {subTitle}
        </p>
        <div className={styles.textSubHeader}>
          {description}
        </div>
      </div>
      <div className={styles.cardImage}>
        <img src={image}/>
      </div>
      <div className={styles.detailImage}>
        <img src={detailImage}/>
      </div>
    </div>
  );
};

export default Card;