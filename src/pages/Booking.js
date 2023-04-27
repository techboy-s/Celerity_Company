import styles from "./Booking.module.css";
const Booking = () => {
  return (
    <div className={styles.booking}>
      <div className={styles.update}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>1</div>
          </div>
          <div className={styles.search}>Search</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <div className={styles.div}>2</div>
          </div>
          <div className={styles.search}>Recommended services</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.wrapper}>
            <div className={styles.div}>3</div>
          </div>
          <div className={styles.search}>Results</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.wrapper}>
            <div className={styles.div}>4</div>
          </div>
          <div className={styles.search}>Booking</div>
        </div>
        <div className={styles.updateChild} />
        <div className={styles.updateItem} />
        <div className={styles.updateInner} />
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.bookingSummaryParent}>
            <div className={styles.bookingSummary}>Booking summary</div>
            <div className={styles.plane}>
              <div className={styles.frameParent3}>
                <div className={styles.iconParent}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                  <div className={styles.delhi110003IndiaContainer}>
                    <p className={styles.delhi}>Delhi,</p>
                    <p className={styles.delhi}> 110003 India</p>
                  </div>
                </div>
                <div className={styles.iconParent}>
                  <img className={styles.icon} alt="" src="/icon1.svg" />
                  <div className={styles.shanghai200080ChinaContainer}>
                    <p className={styles.delhi}>Shanghai</p>
                    <p className={styles.delhi}>200080, China</p>
                  </div>
                </div>
              </div>
              <div className={styles.planeIconParent}>
                <img
                  className={styles.planeIcon}
                  alt=""
                  src="/plane-icon.svg"
                />
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.express}>Express</div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent5}>
                <div className={styles.totalWeightvolumeParent}>
                  <div className={styles.div}>Total Weight/Volume</div>
                  <img
                    className={styles.iconsaxlinearweightmeter}
                    alt=""
                    src="/iconsaxlinearweightmeter.svg"
                  />
                </div>
                <b className={styles.kg}>114.21KG</b>
              </div>
            </div>
            <div className={styles.loadParent}>
              <div className={styles.load}>Load</div>
              <div className={styles.frameParent6}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <b className={styles.pallets}>Pallets</b>
                </div>
                <div className={styles.div}>230 X 140 X 120 CM</div>
              </div>
              <b className={styles.x}>1X</b>
            </div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.sellerPrimetimeWorldwideParent}>
              <div className={styles.sellerPrimetimeWorldwideContainer}>
                <span>Seller:</span>
                <span className={styles.primetimeWorldwide}>
                  {" "}
                  Primetime Worldwide
                </span>
              </div>
              <img
                className={styles.frameInner}
                alt=""
                src="/frame-64@2x.png"
              />
            </div>
            <div className={styles.sellerPrimetimeWorldwideParent}>
              <div className={styles.sellerPrimetimeWorldwideContainer}>
                <span>Insurance:</span>
                <span className={styles.primetimeWorldwide}>Xcover.com</span>
              </div>
              <img className={styles.xcoverIcon} alt="" src="/xcover.svg" />
            </div>
          </div>
        </div>
        <div className={styles.priceDetails}>
          <div className={styles.priceDetailsParent}>
            <div className={styles.div}>Price details</div>
            <div className={styles.iconsaxlinearstar1Parent}>
              <img
                className={styles.iconsaxlinearstar1}
                alt=""
                src="/iconsaxlinearstar1.svg"
              />
              <div className={styles.pallets}>Known shipper</div>
            </div>
          </div>
          <div className={styles.seller}>
            <div className={styles.div}>Seller’s Quote</div>
            <div className={styles.div}>$ 3,659.25</div>
          </div>
          <div className={styles.dutiesAdnInsurance}>
            <div className={styles.dutoes}>
              <div className={styles.div}>Duties and taxes</div>
              <div className={styles.div}>Not Included</div>
            </div>
            <div className={styles.insurance}>
              <div className={styles.insuranceParent}>
                <div className={styles.div}>Insurance</div>
                <div className={styles.div}>$323.40</div>
              </div>
              <div className={styles.pallets}>Based on the items cost</div>
            </div>
          </div>
          <div className={styles.addAPromoCodeParent}>
            <div className={styles.pallets}>
              <span>{`Add a `}</span>
              <span className={styles.promoCode}>promo code</span>
            </div>
            <div className={styles.platform}>
              <div className={styles.div}>Platform fee</div>
              <div className={styles.pallets}>$119.48</div>
            </div>
          </div>
          <div className={styles.priceDetailsChild} />
          <div className={styles.priceDetailsItem} />
          <div className={styles.priceDetailsInner} />
          <div className={styles.total}>
            <div className={styles.div}>Total:</div>
            <b className={styles.pallets}>$ 4,102.13</b>
          </div>
          <div className={styles.checkoutWrapper}>
            <b className={styles.pallets}>Checkout</b>
          </div>
        </div>
      </div>
      <div className={styles.logoParent}>
        <b className={styles.div}>
          <span>Ship</span>
          <span className={styles.mate}>mate.</span>
        </b>
        <div className={styles.iconsaxlineardollarsquareParent}>
          <img
            className={styles.iconsaxlineardollarsquare}
            alt=""
            src="/iconsaxlineardollarsquare.svg"
          />
          <div className={styles.loginWrapper}>
            <div className={styles.login}>
              <div className={styles.trackShipment}>Track shipment</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.chatButtonIcon} alt="" src="/chat-button.svg" />
    </div>
  );
};

export default Booking;
