import React from "react";
import styles from "./Generated.module.css";

function Generated({ abi }) {
  //parse the ABI and generate a form based on that
  //parse abi and create a JSON that can be fed to a library
  const thisAbi = JSON.parse(abi);

  return (
    <div className={styles.form}>
      <h1>form generated as per the ABI</h1>
      {console.log(abi)}
      {thisAbi.map((f) => (
        <div className={styles.function}>
          {f.inputs.map((input) => (
            <div>
              <label htmlFor={input.name}>
                {input.name}
                <br />
              </label>
              <input
                className={styles.input}
                name={input.name}
                placeholder={input.type}
                label={input.name}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Generated;
