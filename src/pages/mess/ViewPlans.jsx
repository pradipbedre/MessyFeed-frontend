import React from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import DeletePlan from "./DeletePlan.jsx";
import UpdatePlan from "./UpdatePlan.jsx";

const TableActions = () => (
  <>
    <UpdatePlan />
    &nbsp;&nbsp;&nbsp;
    <DeletePlan />
  </>
);
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
  {
    title: "Actions",
    dataIndex: "actions",
  },
];
const tableData = [
  {
    key: "1",
    name: "One Meal",
    cost: 1000,
    meals: 30,
    actions: <TableActions />,
  },
  {
    key: "2",
    name: "Two Meal",
    cost: 2000,
    meals: 60,
    actions: <TableActions />,
  },
  {
    key: "3",
    name: "Mixed Meal",
    cost: 1500,
    meals: 45,
    actions: <TableActions />,
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
