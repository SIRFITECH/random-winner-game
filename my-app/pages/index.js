import { BigNumber } from "ethers";
import React, { useRef, useState } from "react";
import { providers } from "web3modal";

export default function Home() {
  const zero = BigNumber.from("0");
  const [walletConnected, setWalletConnect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [entryFee, setEntryFee] = useState(zero);
  const [maxPlayers, setMaxPlayers] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState();
  const [logs, setLogs] = useState([]);
  const web3ModalRef = useRef();
  
  // This is used to force react to re render the page when we want to
  // in our case we will use force update to show new logs
  const forceUpdate = React.useReducer(() => ({}), {})[1];

// the connect wallet button
  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnect(true);
    } catch (error) {
      console.log(error);
    }
  };

  // the getProviderOrSigner function, reeturns provider if fals and singner if true
  const getProviderOrSigner = async (needSigner = false) => {
    // fetch the web3Modal
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    // fetch the chainId of the provider
    const { chainId } = await web3Provider.getNetwork();
    if (chainId === 80001) {
      window.alert("Change the network to Mumbai");
      throw new Error("Change network to Mumbai");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  // function for GameStarted
  const startGame = async () => {
    try {
      // get the signer
      const signer = await getProviderOrSigner(true);
      // sign the transsaction
      const randomGameNFTContract = new Contract(
        RANDOM_GAME_NFT_CONTRACT_ADDRESS,
        abi,
        signer,
      );
      setLoading(true);
      // call the startGame function from the contract
      const tx = await randomGameNFTContract.startGame(maxPlayers, entryFee);
      await tx.wait();
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
}