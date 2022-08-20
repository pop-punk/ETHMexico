import { Network, Alchemy } from "alchemy-sdk";

export const searchPolygonMainnet = async (txHash) => {
  try {
    const settings = {
      apiKey: 'ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho',
      network: Network.MATIC_MAINNET,
    }
    const alchemy = new Alchemy(settings);
    const tx = await alchemy.core.getTransaction(txHash)
      .then((data) => { return data });
    return tx;
  } catch (err) {
    return 0;
  }
};

export const searchPolygonMumbai = async (txHash) => {
  try {
    const settings = {
      apiKey: 'ItGSuftS2q8F_aBJQo4IkxtSrVIi-lho',
      network: Network.MATIC_MUMBAI,
    }
    const alchemy = new Alchemy(settings);
    const tx = await alchemy.core.getTransaction(txHash)
      .then((data) => { return data });
    return tx;
  } catch (err) {
    return 0;
  }
};