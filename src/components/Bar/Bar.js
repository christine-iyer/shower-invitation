import { Link } from "react-router-dom";
import styles from "./Bar.module.scss";

export default function Bar(props) {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link to="/">Word Game</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/haikus">Haikus</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/assets">Assets</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/blahg">Franky</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/toss">Toss</Link>
      </li>
      
    </ul>
  </nav>
  
     
  );
}