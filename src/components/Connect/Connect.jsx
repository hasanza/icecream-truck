import React from "react";
import styles from "./Connect.module.css";

function Connect() {
  return (
    <div className={styles.connect}>
      <h2>Please connect MetaMask to continue</h2>
      <div className={styles.btn}>Connect</div>
    </div>
  );
}

export default Connect;
