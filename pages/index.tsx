import Card from '../components/Card';
import styles from '../styles/Card.module.css';

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
    description: 'O ponto de encontro vai ser na Igreja de Sta. Eufémia, onde irá ser realizado o casamento às 12h.',
    image: '/church.jpg'
  },
  {
    title: 'Festa',
    subTitle: 'Quinta do Ti Lucas',
    description: 'A festa continua com o almoço na Quinta do Ti Lucas, onde não irá faltar comida, diversão e boa disposição.',
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
