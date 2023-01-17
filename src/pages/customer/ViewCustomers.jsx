import React from "react";
import { Input, Space, Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Search } = Input;

const tableData = [
  {
    key: "1",
    name: "Ram A",
    email: "ram@gmail.com",
    phone: "9282763453",
    gender: "Male",
    address: "Madhapur, Hyderabad, Telangana, India, 500082",
    status: "Active",
    plan: "One Meal",
    endDate: "30-01-23",
  },
  {
    key: "2",
    name: "Seeta B",
    email: "seeta@gmail.com",
    phone: "9282773453",
    gender: "Female",
    address: "Gachibowli, Hyderabad, Telangana, India, 500083",
    status: "Active",
    plan: "Two Meal",
    endDate: "31-01-23",
  },
  {
    key: "3",
    name: "Anshu C",
    email: "anshu@gmail.com",
    phone: "9282769453",
    gender: "Female",
    address: "Panjagutta, Hyderabad, Telangana, India, 500084",
    status: "Active",
    plan: "One Meal",
    endDate: "25-01-23",
  },
  {
    key: "4",
    name: "Krishna D",
    email: "krishna@gmail.com",
    phone: "9222763453",
    gender: "Male",
    address: "Hitech City, Hyderabad, Telangana, India, 500085",
    status: "Inactive",
    plan: "One Meal",
    endDate: "29-12-22",
  },
  {
    key: "5",
    name: "Chiru E",
    email: "chiru@gmail.com",
    phone: "9282563453",
    gender: "Male",
    address: "Madhapur, Hyderabad, Telangana, India, 500082",
    status: "Active",
    plan: "One Meal",
    endDate: "30-01-23",
  },
  {
    key: "6",
    name: "Harini D",
    email: "harini@gmail.com",
    phone: "9282764453",
    gender: "Female",
    address: "Kukatpally, Hyderabad, Telangana, India, 500086",
    status: "Active",
    plan: "Two Meal",
    endDate: "07-02-23",
  },
  {
    key: "7",
    name: "Kiran A",
    email: "kiran@gmail.com",
    phone: "9282763452",
    gender: "Male",
    address: "Gachibowli, Hyderabad, Telangana, India, 500083",
    status: "Inactive",
    plan: "One Meal",
    endDate: "30-012-22",
  },
];

const ViewCustomers = () => {
  const [data, setData] = useState(tableData);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    setSearchText(e);
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <Link to="/user/mess/customer/view" state={record}>
          {text}
        </Link>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone No",
      dataIndex: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Plan",
      dataIndex: "plan",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
  ];

  return (
    <div>
      <Space direction="vertical">
        <Search placeholder="Search" onSearch={handleSearch} enterButton />
      </Space>

      <Table
        columns={columns}
        dataSource={filteredData}
        bordered
        title={() => "All Customers"}
        pagination={{ defaultPageSize: "5" }}
      />
    </div>
  );
};

export default ViewCustomers;
