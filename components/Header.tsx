import { Tabs } from '../pages/_app';
import styles from '../styles/Header.module.css'
import Image from 'next/image'

interface HeaderProps {
  tabSelected: Tabs
  setTabSelected: (select: Tabs) => void
}

const Header = ({ tabSelected, setTabSelected }: HeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        <Image
          src="/background_image.svg"
          alt=""
          fill
          className={styles.backgroundImage}
          // sizes="(max-width: 1200px) 100vw, 90vw"
          priority
          />
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="XDLogo"
            width={350}
            height={350}
            priority
          />
          <div className={styles.textHeaderRoot}>
            <p className={styles.textHeader}>
              Vamos Casar
              <Image
                src="/rings.svg"
                alt="rings"
                width={77}
                height={64}
                priority
                color="--gold-color"
              />
            </p>
            <p>
              Bem-vindos!!
            </p>
            <p>
              Estamos ansiosos para partilhar este momento especial na nossa vida com todos vocês e esperamos que possam celebrar comnosco este dia memorável
            </p>
          </div>
        </div>
        <button onClick={() => setTabSelected(Tabs.INFORMACAO)} >Button 1</button>
        <button onClick={() => setTabSelected(Tabs.RESPOSTA)}>Button 2</button>
      </div>
    </>
  );
};

export default Header;