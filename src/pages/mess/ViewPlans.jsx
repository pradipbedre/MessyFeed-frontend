import React from "react";
import { Input, Space, Table } from "antd";
import { useState } from "react";

const { Search } = Input;

const columns = [
  {
    title: "Plan Name",
    dataIndex: "name",
  },
  {
    title: "Plan Cost",
    dataIndex: "cost",
  },
  {
    title: "Meal Count",
    dataIndex: "meals",
  },
];
const tableData = [
  {
    key: "1",
    name: "One Meal",
    cost: 1000,
    meals: 30,
  },
  {
    key: "2",
    name: "Two Meal",
    cost: 2000,
    meals: 60,
  },
  {
    key: "3",
    name: "Mixed Meal",
    cost: 1500,
    meals: 45,
  },
];

const ViewPlans = () => {
  //   const [data, setData] = useState(tableData);
  //   const [searchText, setSearchText] = useState("");
  //   const [filteredData, setFilteredData] = useState(data);

  //   const handleSearch = (e) => {
  //     setSearchText(e);
  //     const filtered = data.filter((item) =>
  //       Object.values(item).some((val) =>
  //         val.toString().toLowerCase().includes(searchText.toLowerCase())
  //       )
  //     );
  //     setFilteredData(filtered);
  //   };

  return (
    <div>
      {/* <Space direction="vertical">
        <Search placeholder="Search" onSearch={handleSearch} enterButton />
      </Space> */}

      <Table
        columns={columns}
        dataSource={tableData}
        bordered
        // title={() => "All Customers"}
        pagination={{ defaultPageSize: "5" }}
      />
    </div>
  );
};

export default ViewPlans;
