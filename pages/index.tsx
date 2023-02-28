import Card from '../components/Card';
import styles from '../styles/Card.module.css';
import Link from 'next/link';

const CardData = [
  {
    title: 'A data',
    subTitle: '20 de Maio de 2023',
    description: 'Vamos casar-nos no sábado, dia 20 de Maio, e esperamos que possas celebrar connosco este momento tão importante das nossas vidas.',
    image: '/us.jpg'
  },
  {
    title: 'Cerimónia',
    subTitle: 'Igreja de Santa Eunfémia, 12h',
    description: <p>O ponto de encontro vai ser na <Link className={styles.linkText} target="_blank" href="https://goo.gl/maps/FTQPPsTe7kqGTvh36">Igreja de Sta. Eufémia</Link>, onde irá ser realizado o casamento às 12h.</p>,
    image: '/church.jpg'
  },
  {
    title: 'Festa',
    subTitle: 'Quinta do Ti Lucas',
    description: <p>A festa continua com o almoço na <Link className={styles.linkText} target="_blank" href="https://goo.gl/maps/AdkSnKyfhthwXbza7">Quinta do Ti Lucas</Link>, onde não irá faltar comida, diversão e boa disposição.</p>,
    image: '/party.jpg'
  }
];


export default function Home() {
  return (
    <div className={styles.bodyCards}>
      {
        CardData.map(({ title, subTitle, description, image }, index) => {
          return <Card key={`${index}-${title}`} title={title} subTitle={subTitle} description={description} image={image} detailImage={index % 2 ? '/flower2.png' : '/flower1.png'} />
        })
      }
    </div>
  )
}
