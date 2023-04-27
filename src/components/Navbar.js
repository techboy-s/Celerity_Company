import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.logoParent}>
      <b className={styles.logo}>
        <span>Ship</span>
        <span className={styles.mate}>mate.</span>
      </b>
      <div className={styles.loginParent}>
        <a className={styles.login} target="_blank" href="/shipping-details">
          <div className={styles.learnMore}>Login</div>
        </a>
        <div className={styles.login2}>
          <div className={styles.learnMore}>Learn more</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
