import React from "react";
import { StyledTable } from "./styled";

const Table = ({ className, column = [], dataSource = [] }) => {
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {column.map(({ title, width }, index) => (
              <th key={index} style={{ width }}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, index) => (
            <tr key={index}>
              {column.map(({ dataIndex, width, render }, idx) => (
                <td key={idx}>
                  {render
                    ? render(data[dataIndex], data, index)
                    : data[dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  );
};

Table.propTypes = {};

export default Table;
