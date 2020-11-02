import React from "react";
import styles from "./Connect.module.css";

function Connect({loadBlockchain}) {
  return (
    <div className={styles.connect}>
      <h2>Please connect MetaMask to continue</h2>
      <div onClick={loadBlockchain} className={styles.btn}>Connect</div>
    </div>
  );
}

export default Connect;
