import React from "react";
import Table from "../../components/Table";

const TableComponent = (props) => {
  const column = [
    {
      title: "STT",
      width: 300,
      render: (_, __, idx) => idx + 1,
    },
    {
      title: "Tên",
      width: 120,
      dataIndex: "name",
    },
    {
      title: "Tuổi",
      width: 120,
      dataIndex: "age",
    },
    {
      title: "Địa chỉ",
      width: 120,
      dataIndex: "address",
    },
    {
      title: "Email",
      width: 300,
      dataIndex: "email",
    },
  ];
  return (
    <Table
      column={column}
      dataSource={[
        {
          name: "Ngô Hiếu",
          age: "22",
          address: "Hà nội",
          email:
            "hieu@gmail.com, hieu@gmail.com, hieu@gmail.com, hieu@gmail.com, hieu@gmail.com, hieu@gmail.com, hieu@gmail.com, hieu@gmail.com, ",
        },
        {
          name: "Ngô Hiếu",
          age: "22",
          address: "Hà nội",
          email: "hieu@gmail.com",
        },
        {
          name: "Ngô Hiếu",
          age: "22",
          address: "Hà nội",
          email: "hieu@gmail.com",
        },
      ]}
    ></Table>
  );
};

export default TableComponent;
