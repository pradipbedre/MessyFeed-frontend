import axios from "axios";
import { DatePicker, Form, Input, Select, Button, notification } from "antd";
import { getCookie } from "../../utils/Cookie";
const { Option } = Select;

const AddPlan = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, title, message) => {
    api[type]({
      message: title,
      description: message,
    });
  };

  const onFinish = () => {
    form
      .validateFields()
      .then(async (values) => {
        const { mealCount, planCost, ...otherValues } = values;
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/plan/",
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
        if (response?.data?.statusCode === 200) {
          openNotificationWithIcon(
            "success",
            "Success!",
            "Congratulations!!! New Mess plan added successfuly"
          );
          form.resetFields();
        } else {
          console.log(response?.data?.message);
          openNotificationWithIcon(
            "error",
            "Error!",
            "Something went wrong! Please try again."
          );
        }
      })
      .catch((errorInfo) => {
        console.log(errorInfo);

        openNotificationWithIcon(
          "error",
          "Error!",
          "Something went wrong! Please try again."
        );
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
        initialValues={{ remember: "true" }}
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
            Add Plan
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  );
};

export default AddPlan;
