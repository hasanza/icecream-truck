import "./App.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import {Connect, Nav} from './components';

function App() {
  const [signer, setSigner] = useState({});
  const [account, setAccount] = useState("");
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState("");
  const [abi, setAbi] = useState([]);

  useEffect(() => {
    //add the listener here...
    async function changeListener() {
      window.ethereum.on("accountsChanged", async function () {
        let accounts = await window.ethereum.send("eth_requestAccounts");
        console.log("New accounts are: ", accounts.result[0]);
        setAccount(accounts.result[0]);
      });
    }
    changeListener();
  }, []);

  const loadBlockchain = async () => {
    const accounts = await window.ethereum.send("eth_requestAccounts");
    console.log("The current signer address is: ", accounts.result[0]);
    setAccount(accounts.result[0]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("The provider object is: ", provider);
    let thisSigner = provider.getSigner();
    setSigner(thisSigner);
    console.log("connected to Ethereum via Metamask");
    console.log("The signer object is: ", signer);
    setConnected(true);
  };

  if(account=="") {
    return (
      <Connect/>
    )
  }

  return (
    <Nav account={account} loadBlockchain={loadBlockchain}/>
  );
}
export default App;
