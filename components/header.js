import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.siteLogo}>And4Web</div>
      <nav className={styles.navBar}>
        <ul className={styles.navItems}>
          <span>
            <a className={styles.navItem}>Home</a>
          </span>
          <span>
            <a className={styles.navItem}>Projects</a>
          </span>
          <span>
            <a className={styles.navItem}>Contact</a>
          </span>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
