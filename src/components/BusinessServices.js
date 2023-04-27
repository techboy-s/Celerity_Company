import styles from "./BusinessServices.module.css";
const BusinessServices = () => {
  return (
    <div className={styles.services}>
      <div className={styles.iconsaxlinearbriefcaseParent}>
        <img
          className={styles.iconsaxlinearbriefcase}
          alt=""
          src="/iconsaxlinearbriefcase.svg"
        />
        <div className={styles.businessServices}>Business Services</div>
      </div>
      <div className={styles.servicesChild} />
      <div className={styles.weSupportYour}>
        We support your goals for growth with cargo insurance, online payments
        and paperless workflow. Take your business to the next level.
      </div>
    </div>
  );
};

export default BusinessServices;
