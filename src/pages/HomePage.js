import LoginPage from "../components/LoginPage";
import Navbar from "../components/Navbar";
import FreightServices from "../components/FreightServices";
import BusinessServices from "../components/BusinessServices";
import ShippingServices from "../components/ShippingServices";
import SupportServices from "../components/SupportServices";
import SearchBar1 from "../components/SearchBar1";
import styles from "./HomePage.module.css";
const HomePageWoLoginForPrototyp = () => {
  return (
    <div className={styles.homepageWologinForPrototyp}>
      <LoginPage />
      <Navbar />
      <div className={styles.hassleFreeShippingSolutionsParent}>
        <div className={styles.hassleFreeShippingSolutions}>
          Hassle-Free Shipping Solutions
        </div>
        <div className={styles.compareBookAnd}>
          Compare, book, and manage your freight across the world’s top
          logistics providers, all on one platform.
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.services1}>Services</div>
        <div className={styles.tabs}>
          <FreightServices />
          <BusinessServices />
          <ShippingServices />
          <SupportServices />
        </div>
      </div>
      <SearchBar1 />
      <img className={styles.chatButtonIcon} alt="" src="/chat-button1.svg" />
    </div>
  );
};

export default HomePageWoLoginForPrototyp;
