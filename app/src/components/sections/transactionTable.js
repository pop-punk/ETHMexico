import React from "react";

const TransactionTable = (props) => {
  const { tableData } = props;
  return (
    <><div class="line"></div>
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
        <td>{tableData.blockNumber}</td>
      </tr>
      <tr>
        <th>Confirmations:</th>
        <td>{tableData.confirmations}</td>
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
        <td>{tableData.gasUsed ? tableData.gasUsed.toString() : tableData.gasPrice.toString()}</td>
      </tr>
    </table></>
  );
};

export default TransactionTable;
