import React from "react";

const StreamTable = (props) => {
  const { streamData } = props;
  return (
    <><div class="line"></div>
    <table>
      <tr>
        <th>Chain:</th>
        <td className="text-color-primary">{streamData.protocol}</td>
      </tr>
      <tr>
        <th>Id:</th>
        <td>{streamData.id}</td>
      </tr>
      <tr>
        <th>Created at:</th>
        <td>{streamData.createdAtTimestamp}</td>
      </tr>
      <tr>
        <th>Block #:</th>
        <td>{streamData.createdAtBlockNumber}</td>
      </tr>
      <tr>
        <th>Flow Rate:</th>
        <td>{streamData.currentFlowRate / 1e18}</td>
      </tr>
      <tr>
        <th>Deposit:</th>
        <td>{streamData.deposit / 1e18}</td>
      </tr>
      <tr>
        <th>To:</th>
        <td>{streamData.receiver.id}</td>
      </tr>
      <tr>
        <th>From:</th>
        <td>{streamData.sender.id}</td>
      </tr>
      <tr>
        <th>Token:</th>
        <td>{streamData.token.name} ({streamData.token.symbol})</td>
      </tr>
    </table></>
  );
};

export default StreamTable;