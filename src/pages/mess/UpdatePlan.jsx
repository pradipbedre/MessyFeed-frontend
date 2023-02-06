import { Modal, Form, Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
import { useNavigate } from "react-router";

export const UpdatePlan = ({
  planData,
  plansData,
  setPlansData,
  openNotificationWithIcon,
}) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    form
      .validateFields()
      .then(async (values) => {
        const { mealCount, planCost, ...otherValues } = values;
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_URL}` +
            "user/mess/plan/" +
            `${planData._id}`,
          {
            mealCount: parseInt(mealCount),
            planCost: parseInt(planCost),
            ...otherValues,
          },
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        if (response.status === 200) {
          setPlansData((prevState) => {
            const newPlansData = [...prevState];
            const index = newPlansData.findIndex(
              (obj) => obj._id === response?.data?.message?._id
            );
            newPlansData[index].name = response?.data?.message?.name;
            newPlansData[index].mealCount = response?.data?.message?.mealCount;
            newPlansData[index].planCost = response?.data?.message?.planCost;
        //    console.log("New Plans Data = ", newPlansData);
            return newPlansData;
          });

          openNotificationWithIcon(
            "success",
            "Success!",
            "Congratulations!!! Plan updated successfuly"
          );
          form.resetFields();

          setUpdateModal(false);
        }
      })
      .catch((errorInfo) => {
      //  console.log(errorInfo);
        openNotificationWithIcon(
          "error",
          "Error!",
          "Something went wrong! Please try again."
        );
      });
  };

  const onFinishFailed = (errorInfo) => {
    //console.log("Failed:", errorInfo);
  };

  const showUpdateModal = () => {
    setUpdateModal(true);
  };

  const handleUpdateCancel = () => {
    setUpdateModal(false);
  };

  return (
    <>
      <a href="#">
        <EditOutlined style={{ color: "blue" }} onClick={showUpdateModal} />
      </a>
      <Modal
        destroyOnClose={true}
        title="Update Plan Details"
        okText="Update"
        open={updateModal}
        onCancel={handleUpdateCancel}
        centered={true}
        footer={null}
      >
        <Form
          form={form}
          labelCol={{
            xs: { span: 24 },
            sm: { span: 8 },
          }}
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 10 },
          }}
          layout="horizontal"
          action=""
          initialValues={{
            remember: "true",
            name: planData?.name,
            planCost: planData?.planCost,
            mealCount: planData?.mealCount,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Plan Name"
            name="name"
            rules={[
              { required: true, message: "Please enter name of the meal plan" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Plan Cost"
            name="planCost"
            rules={[{ required: true, message: "Please enter the plan cost" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Meal count"
            name="mealCount"
            rules={[
              { required: true, message: "Please enter no of meals per plan" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Update Plan
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdatePlan;
