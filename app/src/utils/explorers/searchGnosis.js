export const searchGnosisMainnet = async (txHash) => {
  try {
    const url = `https://blockscout.com/xdai/mainnet/api?module=transaction&action=gettxinfo&txhash=${txHash}`;

    const tx = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    return tx;
  } catch (err) {
    return 0;
  }
};

export const searchGnosisTestnet = async (txHash) => {
  try {
    const url = `https://blockscout.com/xdai/testnet/api?module=transaction&action=gettxinfo&txhash=${txHash}`;

    const tx = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    return tx;
  } catch (err) {
    return 0;
  }
};
