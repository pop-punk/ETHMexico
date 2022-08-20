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
  const ethMainnet = await searchEthereumMainnet(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Ethereum Mainnet";
    }

    return result;
  });

  if (ethMainnet !== null && ethMainnet !== 0) {
    return ethMainnet;
  }

  const ethGoerli = await searchEthereumGoerli(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Ethereum Goerli";
    }
    return result;
  });

  if (ethGoerli !== null && ethGoerli !== 0) {
    return ethGoerli;
  }

  const polygonMainnet = await searchPolygonMainnet(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Polygon Mainnet";
    }
    return result;
  });

  if (polygonMainnet !== null && polygonMainnet !== 0) {
    return polygonMainnet;
  }

  const polygonMumbia = await searchPolygonMumbai(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Polygon Mumbai";
    }
    return result;
  });

  if (polygonMumbia !== null && polygonMumbia !== 0) {
    return polygonMumbia;
  }

  const gnosisMainnet = await searchGnosisMainnet(txHash).then((data) => {
    let result = data.result;
    if (result !== null && result !== 0) {
      result["protocol"] = "Gnosis Mainnet";
    }
    return result;
  });

  if (gnosisMainnet !== null && gnosisMainnet !== 0) {
    return gnosisMainnet;
  }

  const gnosisTestnet = await searchGnosisTestnet(txHash).then((data) => {
    let result = data.result;
    if (result !== null && result !== 0) {
      result["protocol"] = "Gnosis Testnet";
    }
    return result;
  });

  if (gnosisTestnet !== null && gnosisTestnet !== 0) {
    return gnosisTestnet;
  }

  const optimismMainnet = await searchOptimismMainnet(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Optimism Mainnet";
    }
    return result;
  });

  if (optimismMainnet !== null && optimismMainnet !== 0) {
    return optimismMainnet;
  }

  const optimismGoerli = await searchOptimismGoerli(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Optimism Goerli";
    }
    return result;
  });

  if (optimismGoerli !== null && optimismGoerli !== 0) {
    return optimismGoerli;
  }

  const optimismKovan = await searchOptimismKovan(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Optimism Kovan";
    }
    return result;
  });

  if (optimismKovan !== null && optimismKovan !== 0) {
    return optimismKovan;
  }

  const arbitrumMainnet = await searchArbitrumMainnet(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Arbitrum Mainnet";
    }
    return result;
  });

  if (arbitrumMainnet !== null && arbitrumMainnet !== 0) {
    return arbitrumMainnet;
  }

  const arbitrumRinkeby = await searchArbitrumRinkeby(txHash).then((data) => {
    let result = data;
    if (result !== null && result !== 0) {
      result["protocol"] = "Arbitrum Rinkeby";
    }
    return result;
  });

  if (arbitrumRinkeby !== null && arbitrumRinkeby !== 0) {
    return arbitrumRinkeby;
  }

  const minaMainnet = await searchMina(txHash).then((data) => {
    let result = data.data.transaction;
    if (result !== null && result !== 0) {
      result["protocol"] = "Mina Mainnet";
    }
    return result;
  });

  if (minaMainnet !== null && minaMainnet !== 0) {
    return minaMainnet;
  }

  return undefined;
};
