import styles from '../styles/Card.module.css';
import Image from 'next/image';

interface CardProps {
  title: string
  subTitle: string
  description: string
}

const Card = ({ title, subTitle, description }: CardProps) => {
  console.log({ title, subTitle, description });
  return  (
    <div className={styles.card}>
      <div className={styles.textHeaderRoot}>
        <p className={styles.textHeader}>
          {title}
        </p>
        <p className={styles.textSubHeaderBold}>
          {subTitle}
        </p>
        <p className={styles.textSubHeader}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;