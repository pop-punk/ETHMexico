import {
  searchEthereumGoerli,
  searchEthereumMainnet,
} from "./explorers/searchEthereum";
import {
  searchPolygonMainnet,
  searchPolygonMumbai,
} from "./explorers/searchPolygon";
import {
  searchGnosisMainnet,
  searchGnosisTestnet,
} from "./explorers/searchGnosis";
import {
  searchOptimismMainnet,
  searchOptimismGoerli,
  searchOptimismKovan,
} from "./explorers/searchOptimism";
import {
  searchArbitrumMainnet,
  searchArbitrumRinkeby,
} from "./explorers/searchArbitrum";
import { searchMina } from "./explorers/searchMina";

export const findHash = async (txHash) => {
  const responses = [];

  const ethMainnet = await searchEthereumMainnet(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Ethereum Mainnet";
    }

    return result;
  });
  responses.push(ethMainnet);

  const ethGoerli = await searchEthereumGoerli(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Ethereum Goerli";
    }
    return result;
  });
  responses.push(ethGoerli);

  const polygonMainnet = await searchPolygonMainnet(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Polygon Mainnet";
    }
    return result;
  });
  responses.push(polygonMainnet);

  const polygonMumbia = await searchPolygonMumbai(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Polygon Mumbai";
    }
    return result;
  });
  responses.push(polygonMumbia);

  const gnosisMainnet = await searchGnosisMainnet(txHash).then((data) => {
    let result = data.result;
    if (result !== null && result !== 0) {
      result["protocol"] = "Gnosis Mainnet";
    }
    return result;
  });
  responses.push(gnosisMainnet);

  const gnosisTestnet = await searchGnosisTestnet(txHash).then((data) => {
    let result = data.result;
    if (result !== null && result !== 0) {
      result["protocol"] = "Gnosis Testnet";
    }
    return result;
  });
  responses.push(gnosisTestnet);

  const optimismMainnet = await searchOptimismMainnet(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Optimism Mainnet";
    }
    return result;
  });
  responses.push(optimismMainnet);

  const optimismGoerli = await searchOptimismGoerli(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Optimism Goerli";
    }
    return result;
  });
  responses.push(optimismGoerli);

  const optimismKovan = await searchOptimismKovan(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Optimism Kovan";
    }
    return result;
  });
  responses.push(optimismKovan);

  const arbitrumMainnet = await searchArbitrumMainnet(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Arbitrum Mainnet";
    }
    return result;
  });
  responses.push(arbitrumMainnet);

  const arbitrumRinkeby = await searchArbitrumRinkeby(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Arbitrum Rinkeby";
    }
    return result;
  });
  responses.push(arbitrumRinkeby);

  const minaMainnet = await searchMina(txHash).then((data) => {
    let result = data.data.transaction;
    if (result !== null && result !== 0) {
      result["protocol"] = "Mina Mainnet";
    }
    return result;
  });
  responses.push(minaMainnet);

  const foundTx = responses.find((tx) => tx !== null && tx !== 0);
  return foundTx;
};
