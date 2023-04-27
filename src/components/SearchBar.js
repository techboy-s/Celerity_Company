import styles from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.originParent}>
        <div className={styles.origin}>
          <img
            className={styles.iconsaxlinearlocation}
            alt=""
            src="/iconsaxlinearlocation.svg"
          />
          <div className={styles.originPortCity}>Delhi, 110003</div>
        </div>
        <div className={styles.origin}>
          <img
            className={styles.iconsaxlinearlocation}
            alt=""
            src="/iconsaxlinearlocation.svg"
          />
          <div className={styles.originPortCity}>Shanghai 200080</div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.date}>
          <img
            className={styles.iconsaxlinearlocation}
            alt=""
            src="/iconsaxlinearcalendar.svg"
          />
          <div className={styles.originPortCity}>13 April 2023</div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.load}>
          <img
            className={styles.iconsaxlinearlocation}
            alt=""
            src="/iconsaxlinearship.svg"
          />
          <div className={styles.originPortCity}>114.21KG - AIR</div>
        </div>
      </div>
      <div className={styles.frameChild} />
      <img
        className={styles.iconsaxlinearlocation}
        alt=""
        src="/iconsaxlinearedit2.svg"
      />
    </div>
  );
};

export default SearchBar;
