import React from "react";
import styles from "./Generator.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Card,
  CardContent,
  Button,
  CircularProgress,
  TextField,
} from "@material-ui/core";

function Generator({ setContract, setAbi }) {
  //input contract address and abi

  const initialValues = {
    abi: [],
    contract: "",
  };

  const handleSubmit = (values) => {
    //pass field values to setContract and setAbi functions
    console.log(values);
    setContract(values.contract);
    setAbi(values.abi);
  };

  const validationSchema = Yup.object({
    abi: Yup.array().required("Contract ABI is needed").nullable(),
    contract: Yup.string()
      .required("Contract address is needed")
      .min(42, "Address must be exactly 42 characters long")
      .max(42, "Address must be exactly 42 characters long"),
  });

  return (
    <div>
      <Card className={styles.myCard}>
        <CardContent>
          <Formik
            label="Contract Details"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form onSubmit={formik.onSubmit}>
                <Box paddingBottom={2}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="contract"
                    label="Contract Address"
                  />
                  <br />
                  <ErrorMessage
                    name="contract"
                    render={(msg) => (
                      <span style={{ color: "red" }}>{msg}</span>
                    )}
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="abi"
                    label="Contract ABI"
                  />
                  <br />
                  <ErrorMessage
                    name="abi"
                    render={(msg) => (
                      <span style={{ color: "red" }}>{msg}</span>
                    )}
                  />
                </Box>
                <Button variant="contained" color="primary" type="submit">
                  Generate Form
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}

export default Generator;
