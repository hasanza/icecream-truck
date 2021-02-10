import React from "react";
import styles from "./Generated.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Card,
  CardContent,
  Button,
  CircularProgress,
  CardHeader,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";

function Generated({ contract, abi }) {
  //parse the ABI and generate a form based on that
  //parse abi and create a JSON that can be fed to a library
  const thisAbi = JSON.parse(abi);

  //init values for each form; can be address(string), uint(number) or bool
  const initialValues = {
    address:'',
    amount: '',
    bool: false
  }

  return (
    <>
      <CardHeader
        subheader="current contract"
        id={styles.myContract}
        title={contract}
      />
      {/* <div id={styles.container}>
        {thisAbi.map(
          (f) =>
            f.inputs.length > 0 &&
            f.type === "function" && (
              <Card id={styles.myCard}>
                <CardContent>
                  <label className={styles.funcLabel} htmlFor={f.name}>
                    {f.name}
                  </label>
                  <br />
                  {f.inputs.map((input) => (
                    <div>
                      <label
                        style={{ display: "inline-block", marginTop: "10px" }}
                        htmlFor={input.name}
                      >
                        {input.name}
                      </label>
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
              </Card>
            )
        )}
        MaterialUi Form:
      </div> */}
      <div id={styles.container}>
        {thisAbi.map(
          (f) =>
            f.inputs.length > 0 &&
            f.type === "function" && (
              <Formik
              //set initial values of a form
              //initialValues={}
              //validate the inputs of a form
              //validationSchema={}
              //handle submission of a function form
              //onSubmit={}
              >
                {(props) => (
                  <Card id={styles.myCard}>
                    <CardContent>
                      {/* THe function title */}
                      <label className={styles.funcLabel} htmlFor={f.name}>
                        {f.name}
                      </label>
                      <br />
                      {/* Next, the function form */}
                      <Form>
                        {f.inputs.map((input) => (
                          //for each input field
                            <Box paddingBottom={2}>
                              <Field
                                fullWidth
                                label={input.name}
                                type={input.type}
                                name={input.name}
                                component={TextField}
                              />
                            </Box>
                        ))}
                        <Box paddingBottom={2}>
                          <Button
                            id={styles.btn}
                            startIcon={
                              props.isSubmitting ? (
                                <CircularProgress
                                  id={styles.spinner}
                                  size="1rem"
                                />
                              ) : null
                            }
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            {props.isSubmitting
                              ? "Scheduling Call..."
                              : "Schedule Gelato Call"}
                          </Button>
                        </Box>
                      </Form>
                    </CardContent>
                  </Card>
                )}
              </Formik>
            )
        )}
      </div>
    </>
  );
}

export default Generated;
