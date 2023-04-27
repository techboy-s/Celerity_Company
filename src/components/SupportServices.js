import styles from "./SupportServices.module.css";
const SupportServices = () => {
  return (
    <div className={styles.services}>
      <div className={styles.iconsaxlineari24supportParent}>
        <img
          className={styles.iconsaxlineari24support}
          alt=""
          src="/iconsaxlineari24support.svg"
        />
        <div className={styles.support}>24/7 Support</div>
      </div>
      <div className={styles.servicesChild} />
      <div className={styles.receiveSupportFrom}>
        Receive support from our experts all over the world at every stage of
        the process, 24/7.
      </div>
    </div>
  );
};

export default SupportServices;
