import { searchSuperfluid } from "./explorers/searchSuperfluid";

export const findStream = async (txHash) => {
  const responses = [];
  const protocols = [
    "arbitrum-one", 
    "avalanche-fuji",
    "optimism-kovan",
    "arbitrum-rinkeby",
    "mumbai",
    "goerli",
    "ropsten",
    "kovan",
    "rinkeby"
  ];

  for (const protocol of protocols) {
    const stream = await searchSuperfluid(txHash, protocol).then((data) => {
      let result = data.data.stream;
      if (result !== null && result !== 0) {
        result["protocol"] = protocol;
      }
      return result;
    });
    responses.push(stream);
  }

  const foundStream = responses.find((stream) => stream !== null);
  return foundStream;
};