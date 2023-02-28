import { Tabs } from '../pages/_app';
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import backgroundImage from '../public/background_image.png'

interface HeaderProps {
  tabSelected: Tabs
  setTabSelected: (select: Tabs) => void
}

const Header = ({ tabSelected, setTabSelected }: HeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.backgroundImageSection}>
          <Image
            src={backgroundImage}
            alt=""
            className={styles.backgroundImage}
            priority
          />
        </div>
        <div className={styles.headerBody}>
          <div className={styles.logo}>
            <p className={styles.logoNames}>Débora<br/>+<br/>Xavier</p>
            <img className={styles.logoImage} src="/logo_frame.png" alt="XDLogo"/>
          </div>
          <div className={styles.textHeaderRoot}>
            <p className={styles.textHeader}>
              Vamos Casar
              <img className={styles.textHeaderImage} src="/rings.png" alt="rings"/>
            </p>
            <p className={styles.textSubHeaderBold}>
              Bem-vindos!
            </p>
            <p className={styles.textSubHeader}>
              Estamos ansiosos para partilhar este momento especial na nossa vida com todos vocês e esperamos que possam celebrar connosco este dia memorável.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;