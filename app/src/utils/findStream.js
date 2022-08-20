import { searchSuperfluidGoerli } from "./explorers/searchSuperfluid";

export const findStream = async (txHash) => {
  const responses = [];

  const superfluidGoerli = await searchSuperfluidGoerli(txHash).then((data) => {
    let result = data.data.stream;
    if (result !== null && result !== 0) {
      result["protocol"] = "Superfluid Goerli";
    }
    return result;
  });
  responses.push(superfluidGoerli);

  const foundStream = responses.find((stream) => stream !== null);
  console.log(foundStream);
  return foundStream;
};