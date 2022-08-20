export const searchSuperfluid = async (txHash, protocol) => {
  try {
    const url =
      `https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-${protocol}`;
    const tx = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        {
          stream(id: "${txHash}") {
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
    return 0;
  }
};
