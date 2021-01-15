import "./App.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Connect, Nav, Generator, Generated } from "./components";


function App() {
  const [signer, setSigner] = useState({});
  const [account, setAccount] = useState("");
  //const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState("");
  const [abi, setAbi] = useState([]);
  //array of function inputs; an object for input values of each function
  //e.g. the input object for transfer would have an address and int, and so on
  const [values, setVal] = useState([]);

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
    //setConnected(true);
  };

  const newContract = () => {
    setContract('');
    setAbi([]);
  }

  if (account === "") {
    return <Connect loadBlockchain={loadBlockchain} />;
  }
  else {
    return (
      <>
        <Nav account={account} loadBlockchain={loadBlockchain} />
        <Generator contract = {contract} abi={abi} setVal={setVal} setAbi={setAbi} setContract={setContract} />
      </>
    );
  }

}
export default App;
