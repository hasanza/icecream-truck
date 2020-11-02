import React from 'react';
import styles from './Generated.module.css';

function Generated({abi}) {
    //parse the ABI and generate a form based on that
    //parse abi and create a JSON that can be fed to a library
    return (
        <div className={styles.form}>
            <h1>form generated as per the ABI</h1>
        </div>
    )
}

export default Generated
