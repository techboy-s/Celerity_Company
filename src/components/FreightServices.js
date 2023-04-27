import styles from "./FreightServices.module.css";
const FreightServices = () => {
  return (
    <div className={styles.services}>
      <div className={styles.iconsaxlinearshipParent}>
        <img
          className={styles.iconsaxlinearship}
          alt=""
          src="/iconsaxlinearship1.svg"
        />
        <div className={styles.freightServices}>Freight Services</div>
      </div>
      <div className={styles.servicesChild} />
      <div className={styles.openNewOpportunites}>
        Open new Opportunites to grow your busniess. Enter new markets and
        discover new contitnents, We are with you, door-to-door.
      </div>
    </div>
  );
};

export default FreightServices;
