import React, { useState } from "react";
import styles from "./Generator.module.css";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {Generated} from '../';
import {
  Box,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Grid
} from "@material-ui/core";
import {TextField} from 'formik-material-ui';

const sleep = (time) => new Promise(acc => setTimeout(acc, time));

function Generator({contract, abi, setContract, setAbi, setVal }) {

  const[submitted, setSubmitted] = useState(false);

  const initialValues = {
    contract: "",
    abi: [],
  };

  const validationSchema = Yup.object({
    contract: Yup.string()
      .required("contract address is required")
      .min(42, "contract address must be exactly 42 characters long")
      .max(42, "contract address must be exactly 42 characters long"),
    abi: Yup.array().min(1, "contract ABI is required"),
  });

  const handleFormikSubmit = async (values, actions) => {
    await sleep(3000);
    console.log(values);
    setContract(values.contract);
    setAbi(values.abi);
    setSubmitted(true);
  };

  if(!submitted) {
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormikSubmit}
        >
          {(props) => (
            <Card className={styles.myCard}>
              <CardContent>
                <Form>
                  <Box paddingBottom={2}>
                    <Field
                    fullWidth
                      label="Contract Address"
                      type="text"
                      name="contract"
                      component={TextField}
                    />
                  </Box>
                  <Box paddingBottom={2}>
                    <Field
                    fullWidth
                      label="Contract ABI"
                      type="text"
                      name="abi"
                      component={TextField}
                    />
                  </Box>
                  <Grid container spacing={2}>
                    
                      <Grid item>
                        <Button
                        id={styles.btn}
                        startIcon={
                          props.isSubmitting ? <CircularProgress id={styles.spinner} size="1rem" /> : null
                        }
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          {props.isSubmitting ? "Generating Form" : "Generate Form"}
                        </Button>
                      </Grid>
                  </Grid>
                </Form>
              </CardContent>
            </Card>
          )}
        </Formik>
      </div>
    );
  } 
  else {
    return <Generated contract = {contract} abi={abi} setVal={setVal}/>
  }
}

export default Generator;
