import React from "react";

const StreamTable = (props) => {
  const { streamData } = props;
  console.log(streamData);
  return (
    <><div class="line"></div>
    <table>
      <tr>
        <th>Chain:</th>
        <td className="text-color-primary">{streamData.protocol}</td>
      </tr>
      <tr>
        <th>Id:</th>
        <td className="text-color-primary">{streamData.id}</td>
      </tr>
      <tr>
        <th>Created at:</th>
        <td className="text-color-primary">{streamData.createdAtTimestamp}</td>
      </tr>
    </table></>
  );
};

export default StreamTable;