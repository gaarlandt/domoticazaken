import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navButton}>
        Home
      </Link>
      <Link href="/solutions" className={styles.navButton}>
        Solutions
      </Link>
    </nav>
  );
};

export default Navigation; 