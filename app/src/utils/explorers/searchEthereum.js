import { Network, Alchemy } from "alchemy-sdk";

export const searchEthereumMainnet = async (txHash) => {
  try {
    const settings = {
      apiKey: "ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho",
      network: Network.ETH_MAINNET,
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

export const searchEthereumGoerli = async (txHash) => {
  try {
    const settings = {
      apiKey: "ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho",
      network: Network.ETH_GOERLI,
    };
    const alchemy = new Alchemy(settings);
    const tx = await alchemy.core.getTransaction(txHash).then((data) => {
      return data;
    })
    return tx;
  } catch (err) {
    return 0;
  }
};
