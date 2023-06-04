import styles from '../styles/nav.module.css';
import logo from '../static/logo2_tp.png';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.logoStyle} href='/'><img src={logo} alt='logo'/></a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
