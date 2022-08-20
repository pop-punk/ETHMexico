export const searchSuperfluidGoerli = async (txHash) => {
  try {
    const url =
      "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli";
    const tx = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        {
          stream(id: "0x0004af1156e6db965d5f9ef131a5b4e87fd1ffe5-0x340d269382930125382db720d411e5b85fd16b4e-0xf2d68898557ccb2cf4c10c3ef2b034b2a69dad00-0.0") {
            id
            createdAtTimestamp
            createdAtBlockNumber
            currentFlowRate
            deposit
            token {
              name
              symbol
            }
            sender {
              id
            }
            receiver {
              id
            }
          }
        }`,
      }),
    })
    .then((res) => res.json())
    .then((result) => { return result });
    return tx;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
