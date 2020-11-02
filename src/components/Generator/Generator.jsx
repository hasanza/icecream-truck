import React, {useState} from 'react';
import styles from './Generator.module.css';

function Generator({setContract, setAbi}) {
    //input contract address and abi
    const [addressInput, setAddressInput] = useState('');
    const [abiInput, setAbiInput] = useState([]);

    const setAddrVal = (e) => {
        setAddressInput(e.target.value);
    }

    const setAbiVal = (e) => {
        setAbiInput(e.target.value);
    }

    const handleSubmit = () => {
        setContract(addressInput);
        setAbi(abiInput);
        console.log('the ABI input in the generator is:', abiInput);
    }

    return (
        <div>
            <form className={styles.form}>
                <h3>Contract Address</h3>
                <input onChange={setAddrVal} name="address" placeholder="0x..." /> <br/>
                <h3>Contract Abi</h3>
                <textarea onChange={setAbiVal} name="abi" placeholder="Contract ABI"/>
                <div onClick={handleSubmit} type="submit" className={styles.btn}>Generate Form</div>
            </form>
        </div>
    )
}

export default Generator
