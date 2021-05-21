import React from 'react'
import styles from './Nav.module.css';

function Nav({account}) {
    return (
        <div className={styles.nav}>
            <h4>{account} <span class={styles.connected}></span></h4> 
            <h2 className={styles.logo}>IcecreamTruck</h2>
        </div>
    )
}

export default Nav
