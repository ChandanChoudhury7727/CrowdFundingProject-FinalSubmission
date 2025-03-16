import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs.jpg";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- Crowd Funding"
          />
        </div>
        <p className={styles.content}>
          <br />
          Welcome to our crowdfunding platform, where we believe that every child deserves a fair chance at education.
          Our mission is to bridge the gap between dreams and reality for underprivileged students by providing them with the resources they need to succeed.
          We understand that education is a powerful tool that can break the cycle of poverty and create a brighter future for all. 
          With your support, we can make a significant impact on the lives of countless children who lack access to quality education.
          <br />
          <br />
          At our core, we are a passionate team of individuals dedicated to making a difference in the world. 
          We come from diverse backgrounds, but we share a common goal: to empower underprivileged students through education. 
          We work tirelessly to identify deserving students, collaborate with local communities, and ensure that every donation reaches those who need it the most. 
          Our transparency and commitment to excellence are the cornerstones of our organization, and we take pride in the trust our supporters place in us.
          <br />
          <br />
          Every donation, no matter how small, has the potential to change a child's life. Through our platform, donors can choose specific projects or students to support, ensuring that their contributions have a direct and meaningful impact. 
          Whether it's providing school supplies, funding tuition fees, or supporting extracurricular activities, every dollar donated goes a long way in helping these students achieve their dreams. We believe that education is a fundamental right, and with your help, we can make it accessible to all.
          <br />
          Join us on this journey to create a world where every child has the opportunity to learn, grow, and thrive. 
          Together, we can break down barriers and build a brighter future for the next generation. Your generosity and support can make a lasting difference in the lives of underprivileged students, giving them the tools they need to succeed and transform their communities. 
          Thank you for believing in our mission and for being a part of this incredible movement to change the world through education.
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
