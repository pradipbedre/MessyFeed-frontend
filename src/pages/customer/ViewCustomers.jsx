import React, { useEffect } from "react";
import { Input, Space, Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const { Search } = Input;

// Sample table data const tableData = [
//   {
//     key: "1",
//     name: "Ram A",
//     email: "ram@gmail.com",
//     phone: "9282763453",
//     gender: "Male",
//     address: "Madhapur, Hyderabad, Telangana, India, 500082",
//     status: "Active",
//     plan: "One Meal",
//     endDate: "30-01-23",
//   },
// ];

const ViewCustomers = () => {
  const [allCustomersData, setAllCustomersData] = useState();
  const [plansData, setPlansData] = useState();
  const [customerData, setCustomerData] = useState();
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    const getPlansData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/plans",
          {
            headers: {
              Authorization: `${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
          }
        );
        setPlansData(response?.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getPlansData();
  }, []);

  useEffect(() => {
    const getCustomersData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/customer/all",

          {
            headers: {
              Authorization: `${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
          }
        );
        setAllCustomersData(
          response?.data?.map((data) => {
            data.key = data?._id;
            const selectedPlan = plansData?.find(
              (item) => item._id === data?.planId
            );
            data.planName = selectedPlan?.name;
            return data;
          })
        );
      } catch (err) {
        console.log(err.message);
      }
    };
    plansData ? getCustomersData() : "";
  }, [plansData]);

  useEffect(() => {
    setFilteredData(allCustomersData);
  }, [allCustomersData]);

  const handleSearch = (e) => {
    setSearchText(e);
    const filtered = allCustomersData.filter((item) =>
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
        <Link
          to="/user/mess/customer/view"
          state={{ record, allCustomersData }}
        >
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
      dataIndex: "phoneNo",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Plan",
      dataIndex: "planName",
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
