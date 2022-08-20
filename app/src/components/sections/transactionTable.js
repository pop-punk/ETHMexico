import React from "react";

const TransactionTable = (props) => {
  const { tableData } = props;
  let gas;
  if (tableData.gasUsed) {
    gas = tableData.gasUsed.toString();
  } else if (tableData.gasPrice) {
    gas = tableData.gasPrice.toString();
  } else {
    gas = tableData.fee;
  }
  return (
    <>
      <div class="line"></div>
      <table>
        <tr>
          <th>Chain:</th>
          <td className="text-color-primary">{tableData.protocol}</td>
        </tr>
        <tr>
          <th>Transaction Hash:</th>
          <td>{tableData.hash}</td>
        </tr>
        <tr>
          <th>Block #:</th>
          <td>{tableData.blockNumber ? tableData.blockNumber : tableData.block.blockHeight}</td>
        </tr>
        <tr>
          <th>Confirmations:</th>
          <td>{tableData.confirmations ? tableData.confirmations : 'N/A'}</td>
        </tr>
        <tr>
          <th>From:</th>
          <td>{tableData.from}</td>
        </tr>
        <tr>
          <th>To:</th>
          <td>{tableData.to}</td>
        </tr>
        <tr>
          <th>Gas Used:</th>
          <td>{gas}</td>
        </tr>
      </table>
    </>
  );
};

export default TransactionTable;
