import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import DeletePlan from "./DeletePlan.jsx";
import UpdatePlan from "./UpdatePlan.jsx";
import { getCookie } from "../../utils/Cookie.js";

const columns = [
  {
    title: "Plan Name",
    dataIndex: "name",
  },
  {
    title: "Plan Cost",
    dataIndex: "planCost",
  },
  {
    title: "Meal Count",
    dataIndex: "mealCount",
  },
  {
    title: "Actions",
    dataIndex: "actions",
  },
];

// Sample tableData = [
// {
//   key: "1",
//   name: "One Meal",
//   cost: 1000,
//   meals: 30,
//   actions: <TableActions />,
// }
// ];

const ViewPlans = () => {
  const [plansData, setPlansData] = useState();

  useEffect(() => {
    const getPlansData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/plans",

          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        setPlansData(
          response?.data?.map((data) => {
            data.key = data?._id;
            data.actions = (
              <>
                <UpdatePlan
                  planData={data}
                  plansData={plansData}
                  setPlansData={setPlansData}
                />
                &nbsp;&nbsp;&nbsp;
                <DeletePlan />
              </>
            );
            return data;
          })
        );
      } catch (err) {
        console.log(err.message);
      }
    };
    getPlansData();
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={plansData}
        bordered
        pagination={{ defaultPageSize: "3" }}
      />
    </div>
  );
};

export default ViewPlans;
