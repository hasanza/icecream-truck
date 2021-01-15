import React from "react";
import styles from "./Connect.module.css";
import { Card, CardContent, Button } from "@material-ui/core";

function Connect({ loadBlockchain }) {
  return (
    <Card id={styles.myCard}>
      <CardContent>
      <h2>Please connect MetaMask to continue</h2>
      <Button id={styles.btn} onClick={loadBlockchain} color="primary" variant="contained" size="large">
        Connect
      </Button>
      </CardContent>
      
    </Card>
  );
}

export default Connect;
