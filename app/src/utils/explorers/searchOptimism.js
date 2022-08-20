import { Network, Alchemy } from "alchemy-sdk";

export const searchOptimismMainnet = async (txHash) => {
  try {
    const settings = {
      apiKey: 'ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho',
      network: Network.OPT_MAINNET,
    }
    const alchemy = new Alchemy(settings);
    const tx = await alchemy.core.getTransaction(txHash)
      .then((data) => { return data });
    return tx;
  } catch (err) {
    return 0;
  }
};

export const searchOptimismGoerli = async (txHash) => {
  try {
    const settings = {
      apiKey: 'ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho',
      network: Network.OPT_GOERLI,
    }
    const alchemy = new Alchemy(settings);
    const tx = await alchemy.core.getTransaction(txHash)
      .then((data) => { return data });
    return tx;
  } catch (err) {
    return 0;
  }
};

export const searchOptimismKovan = async (txHash) => {
  try {
    const settings = {
      apiKey: 'ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho',
      network: Network.OPT_KOVAN,
    }
    const alchemy = new Alchemy(settings);
    const tx = await alchemy.core.getTransaction(txHash)
      .then((data) => { return data });
    return tx;
  } catch (err) {
    return 0;
  }
};