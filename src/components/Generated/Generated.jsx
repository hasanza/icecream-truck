import React from "react";
import styles from "./Generated.module.css";

function Generated({newContract, contract, abi }) {
  //parse the ABI and generate a form based on that
  //parse abi and create a JSON that can be fed to a library
  const thisAbi = JSON.parse(abi);

  return (
    <div className={styles.form}>
      <h4 className={styles.contract}>{contract}</h4>
      {console.log(abi)}
      {thisAbi.map(
        (f) =>
          (f.inputs.length > 0 && f.type === "function") && (
            <div className={styles.function}>
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
            </div>
          )
      )}
      <div onClick={newContract} className={styles.btn}>New Contract</div>
    </div>
  );
}

export default Generated;
