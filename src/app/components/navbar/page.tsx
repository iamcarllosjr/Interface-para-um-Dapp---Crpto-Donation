'use client'

import { useState, useEffect } from "react";

const Navbar = () => {
    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        getCurrentWallet();
        addWalletListener();
      });

      //function for connect Wallet
  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* Metamask is Installed */
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        setWalletAddress(accounts[0]);
        console.log(accounts[0]) //For test
      } catch (err){
        if (err instanceof Error)
        console.error(err.message);
      }
    } else {
      /* Metamask is not installed */
      console.log("Please install Metamask") 
    }
  };

  const getCurrentWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        
        const accounts = await window.ethereum.request({ method: "eth_accounts"});
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]) //For test
        } else {
          console.log("Connect to Metamask using the Connect Button ")
        }
      } catch (err) {
        if (err instanceof Error)
        //TypeScript knows err is Error
        console.error(err.message);
      }
    } 
  };

  //Function so that when disconnecting from the wallet, change the state of the button on the page
  const addWalletListener = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      window.ethereum.on("accountsChanged", (accounts: string) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* Metamask is not installed */
      setWalletAddress("");
      console.log("Please connect to wallet address")
    };
  };

    return (
        <header className="w-full h-16 bg-black/20 fixed z-10 uppercase">
            <div className="flex justify-between items-center p-3">
              <div>
                <a className="text-white" href="#">Logo</a>
              </div>
           
                <button className="btn-connect" onClick={connectWallet}>{(walletAddress && walletAddress.length > 0) ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}</button>
            </div>
        </header>
    )
}

export default Navbar;