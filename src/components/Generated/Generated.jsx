import React from 'react';
import styles from './Generated.module.css';

function Generated({abi}) {
    //generate input as per abi
    return (
        <div className={styles.form}>
            <h1>form generated as per the ABI</h1>
        </div>
    )
}

export default Generated
