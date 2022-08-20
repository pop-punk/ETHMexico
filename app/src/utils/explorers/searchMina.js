export const searchMina = async (txHash) => {
  try {
    const url = "https://graphql.minaexplorer.com/";
    const tx = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query MyQuery {
          transaction(query: {hash: "${txHash}"}) {
            from
            hash
            block {
              blockHeight
            }
            from
            to
            fee
          }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
    return tx;
  } catch (err) {
    return 0;
  }
};
