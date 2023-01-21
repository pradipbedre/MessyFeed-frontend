import React, { useEffect } from "react";
import { Button, Input, Space, Spin, Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
import SendOtp from "./SendOtp";
import ValidateOtp from "./ValidateOtp";

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPlansData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/plans",
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        setPlansData(response?.data?.message);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
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
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        setAllCustomersData(
          response?.data?.message?.map((customer) => {
            customer.key = customer?._id;
            const selectedPlan = plansData?.find(
              (item) => item._id === customer?.planId
            );
            customer.planName = selectedPlan?.name;
            // customer.actions =
            //   customer?.otp > 0 ? (
            //     <ValidateOtp email={customer?.email} />
            //   ) : (
            //     <SendOtp email={customer?.email} />
            //   );
            // console.log(customer);
            return customer;
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
      render: (text, record) => {
        return (
          <Link to="/user/mess/customer/view" state={{ record, plansData }}>
            {text}
          </Link>
        );
      },
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
    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    // },
  ];

  if (isLoading) return <Spin />;

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
