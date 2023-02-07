import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import './App.css';
import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import NewBlog from "./pages/NewBlog";
import Blog from "./components/Blog";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const GOERLI_CHAINID = `0x${Number(5).toString(16)}`;
const BNB_TESTNET_CHAINID = `0x${Number(97).toString(16)}`;
const ABI = require("./Blog.json").abi;
const CONTRACT_ADDRESS = "0x38C3Be349f8C47D8da4f992e73c09FDA16fDbaFf";

export function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};

function App() {

  const [metaMaskEnabled, setMetaMaskEnabled] = useState(false);
  async function connectWallet() {
    const { ethereum } = window;
    if (! ethereum) {
      setMetaMaskEnabled(false);
      return;
    }

    // Change network;
    const accounts = await ethereum.request({method: "eth_requestAccounts"});
    await ethereum.request({method: "wallet_switchEthereumChain", params: [{ chainId: BNB_TESTNET_CHAINID }]});
    console.log("accounts: ", accounts);
    console.log("Connected ", accounts[0]);

    setMetaMaskEnabled(true);
  }

  useEffect(() => {
    connectWallet();
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => window.location.reload());
      window.ethereum.on("accountsChanged", () => connectWallet());
    }
    else {
      setMetaMaskEnabled(false);
    }
  }, []);
  
  return (
    <BrowserRouter>
    {metaMaskEnabled ? (
        <div className="App">
          <div className="leftBar">
            <LeftBar />
          </div>
          <div className="mainWindow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new-blog" element={<NewBlog />} />
              <Route path="/my-blogs" element={<MyBlogs />} />
              <Route path="/blog/:url" element={<Blog />} />
            </Routes>
          </div>
          <div className="rightBar">
            <RightBar />
          </div>
        </div>
    ) : (
      <div className="unConnectWallet">
        <h1>Dapp of team 16</h1>
        <p>Let's enable metamask wallet to start</p>
      </div>
    )}
    </BrowserRouter>
  );
}

export default App;
