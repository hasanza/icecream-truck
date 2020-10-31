import React from 'react'
import styles from './Nav.module.css';

function Nav({account}) {
    return (
        <div className={styles.nav}>
            <h2 className={styles.logo}>IcecreamTruck</h2>
            <h4>{account} <span class={styles.connected}></span></h4> 
        </div>
    )
}

export default Nav
