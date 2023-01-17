import { Modal, Form, Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";

export const UpdatePlan = ({ planData, plansData, setPlansData }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    form
      .validateFields()
      .then(async (values) => {
        const { mealCount, planCost, ...otherValues } = values;
        const response = await axios.put(
          "http://localhost:8800/api/user/mess/plan/" + `${planData._id}`,
          {
            mealCount: parseInt(mealCount),
            planCost: parseInt(planCost),
            ...otherValues,
          },
          {
            headers: {
              Authorization: `${import.meta.env.VITE_ACCESS_TOKEN}`,
            },
          }
        );

        setPlansData((prevState) => {
          const newPlansData = [...prevState];
          const index = newPlansData.findIndex(
            (obj) => obj._id === response?.data?._id
          );
          newPlansData[index].name = response?.data?.name;
          newPlansData[index].mealCount = response?.data?.mealCount;
          newPlansData[index].planCost = response?.data?.planCost;
          return newPlansData;
        });
        form.resetFields();
        setUpdateModal(false);
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
