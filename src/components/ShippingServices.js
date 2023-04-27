import styles from "./ShippingServices.module.css";
const ShippingServices = () => {
  return (
    <div className={styles.services}>
      <div className={styles.iconsaxlinearglobalsearchParent}>
        <img
          className={styles.iconsaxlinearglobalsearch}
          alt=""
          src="/iconsaxlinearglobalsearch.svg"
        />
        <div className={styles.shippingLogistics}>{`Shipping & Logistics`}</div>
      </div>
      <div className={styles.servicesChild} />
      <div className={styles.findPowerfulSolutions}>
        Find powerful solutions to meet your diverse transportation needs. Agile
        solutions to handle all your supply chain needs.
      </div>
    </div>
  );
};

export default ShippingServices;
