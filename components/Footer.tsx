import styles from '../styles/Card.module.css';
import Link from 'next/link';

const FormCard = {
  title: 'Resposta ao Convite',
  subTitle: 'Queremos partilhar o dia contigo...',
  description: <p>Para podermos organizar o casamento da melhor forma, responde <Link className={styles.linkText} target="_blank" href="https://forms.gle/Ae7R2w3VzTbdgo9L9">aqui</Link>.</p>,
  detailImage: 'flower3.png',
  detailImage2: 'flower4.png',
};


const Card = () => {
  const { title, subTitle, description, detailImage, detailImage2 } = FormCard;

  return  (
    <div className={styles.footer}>
      <div className={styles.bodyCards}>
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
          {/*<div className={styles.detailImage}>*/}
          {/*  <img src={detailImage}/>*/}
          {/*</div>*/}

          {/*<div className={styles.detailImage2}>*/}
          {/*  <img src={detailImage2} />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Card;