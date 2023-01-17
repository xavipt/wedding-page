import Card from '../components/Card';
import styles from '../styles/Card.module.css';

const CardData = [{ title: 'A data', subTitle: '20 de Maio de 2023', description: 'Vamos casar-nos no sábado, dia 20 de Maio, e esperamos que possas celebrar connosco este momento tão importante das nossas vidas.'}];


export default function Home() {
  return (
    <div className={styles.bodyCards}>
        {
            CardData.map(({ title, subTitle, description }) => {
                return <Card title={title} subTitle={subTitle} description={description} />
            })
        }
    </div>
  )
}
