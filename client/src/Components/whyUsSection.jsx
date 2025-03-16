import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para} style={{ textIndent: "50px", margin: "20px 0" }}>
          We believe every child deserves access to quality education, regardless of their socio-economic background. Our crowdfunding initiative is dedicated to bridging the education gap for underprivileged children, ensuring they receive the resources, support, and opportunities they need to thrive. By contributing to our cause, you are empowering the next generation with the tools to break the cycle of poverty, realize their potential, and build a brighter future. Together, we can make a tangible difference in their lives and create a more equitable society. Join us in our mission to transform dreams into reality, one child at a time.
          </p>

        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
