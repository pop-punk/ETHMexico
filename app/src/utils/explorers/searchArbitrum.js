import { Network, Alchemy } from "alchemy-sdk";

export const searchArbitrumMainnet = async (txHash) => {
  try {
    const settings = {
      apiKey: "ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho",
      network: Network.ARB_MAINNET,
    };
    const alchemy = new Alchemy(settings);
    const tx = await alchemy.core.getTransaction(txHash).then((data) => {
      return data;
    });
    return tx;
  } catch (err) {
    return 0;
  }
};

export const searchArbitrumRinkeby = async (txHash) => {
  try {
    const settings = {
      apiKey: "ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho",
      network: Network.ARB_RINKEBY,
    };
    const alchemy = new Alchemy(settings);
    const tx = await alchemy.core.getTransaction(txHash).then((data) => {
      return data;
    });
    return tx;
  } catch (err) {
    return 0;
  }
};