import React from "react";
import styles from "./Generated.module.css";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {
  Box,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Grid,
  CardHeader
} from "@material-ui/core";

function Generated({contract, abi }) {
  //parse the ABI and generate a form based on that
  //parse abi and create a JSON that can be fed to a library
  const thisAbi = JSON.parse(abi);

  return (
    <Card id={styles.myCard}>
      <CardContent>
      <CardHeader subheader="current contract" id={styles.myContract} title={contract}/>
      {console.log(abi)}
      {thisAbi.map(
        (f) =>
          (f.inputs.length > 0 && f.type === "function") && (
            <CardContent>
              <label className={styles.funcLabel} htmlFor={f.name}>
                {f.name}
              </label>
              <br />
              {f.inputs.map((input) => (
                <div>
                  <label style={{display:"inline-block", marginTop: "10px"}} htmlFor={input.name}>{input.name}</label>
                  <br />
                  {f.inputs.length !== 0 && (
                    <input
                      className={styles.input}
                      name={input.name}
                      placeholder={input.type}
                      label={input.name}
                    />
                  )}
                </div>
              ))}
            </CardContent>
          )
      )}
      </CardContent>
    </Card>
  );
}

export default Generated;
