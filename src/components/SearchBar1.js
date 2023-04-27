import styles from "./SearchBar1.module.css";
const SearchBar1 = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.orginClickStateParent}>
        <div className={styles.orginClickState}>
          <img
            className={styles.iconsaxlinearlocation}
            alt=""
            src="/iconsaxlinearlocation5.svg"
          />
          <div className={styles.originPortCity}>Origin, Port, City</div>
        </div>
        <div className={styles.destinationClickState}>
          <img
            className={styles.iconsaxlinearlocation}
            alt=""
            src="/iconsaxlinearlocation6.svg"
          />
          <div className={styles.originPortCity}>Destination, Port, City</div>
        </div>
        <div className={styles.groupChild} />
        <div className={styles.dateClickState}>
          <img
            className={styles.iconsaxlinearcalendar}
            alt=""
            src="/iconsaxlinearcalendar1.svg"
          />
          <div className={styles.april2023}>13 April 2023</div>
        </div>
        <div className={styles.groupItem} />
        <div className={styles.load}>
          <img
            className={styles.iconsaxlinearcalendar}
            alt=""
            src="/iconsaxlinearship2.svg"
          />
          <div className={styles.april2023}>Load</div>
        </div>
        <div className={styles.groupInner} />
        <img
          className={styles.iconsaxlineararrowright}
          alt=""
          src="/iconsaxlineararrowright.svg"
        />
      </div>
    </div>
  );
};

export default SearchBar1;
