import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
        We'd love to hear from you! Whether you have questions, suggestions, or simply want to know more about our mission, feel free to reach out to us. 
        Our dedicated team is here to assist you and provide any information you may need. Together, we can make a difference in the lives of underprivileged students through education. 
        Contact us today, and let's work together to build a brighter future.
          <br />
          <br />
          <div className={styles.map}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1413952373728!2d85.83184317469524!3d20.294413712596285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19090030eb398f%3A0x769d962573c8ee1f!2sOdisha%20Technology%20Centre!5e0!3m2!1sen!2sin!4v1740209287679!5m2!1sen!2sin"
              width="600"
              height="380"
              frameBorder="0"
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>CHANDAN CORPORATION</b>
                <br />
                HEAD OFFICE,
                <br />
                Odisha Technology Centre,
                <br /> Bhubaneswar, Odisha 751022
                <br /> <br />
                For any queries, reach us out at email : chandanchoudhury7727@gmail.com
                <br />
                +91-8280912554
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
