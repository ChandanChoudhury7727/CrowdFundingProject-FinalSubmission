import React from "react";
import config from "../config.js";
import styles from "./styles/donateform.module.css";

const DonateForm = (props) => {
  // Ensure props.id exists before using it
  const send_to = props.id ? config.donateTo(props.id) : "#";

  console.log("DonateForm props:", props);
  console.log("send_to URL:", send_to);

  return (
    <React.Fragment>
      <form
        className="row"
        method="POST"
        action={send_to}
        onSubmit={(e) => {
          if (!props.isActivated) {
            e.preventDefault(); // Prevent form submission if campaign is inactive
            alert("This campaign is not accepting donations at the moment.");
          }
        }}
      >
        <div className="form-group col-7">
          <span className={styles.rupeeInput}>
            <i className="fa fa-inr" aria-hidden="true"></i>{" "}
            <input
              className={styles.input}
              type="number"
              name="amount"
              placeholder="Enter Amount"
              min="1"
              disabled={!props.isActivated}
              required
              value={props.amount || ""}
              onChange={props.onAmountChange}
            />
          </span>
        </div>

        <div className={`col-5 ${styles.submit}`}>
          <button
            type="submit"
            disabled={!props.isActivated}
            className={`btn col-12 ${styles.btn} ${
              props.isActivated
                ? `btn-success ${styles.active}`
                : `btn-secondary ${styles.disabled}`
            }`}
          >
            Donate Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default DonateForm;
