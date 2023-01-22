import { Form, Input, Select, Button } from "antd";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
const { Option } = Select;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const UpdateProfile = ({ userData, setUserData, setUpdateModal }) => {
  const [form] = Form.useForm();
  // const [street, city, state, pincode] = userData?.address?.split("  ");

  const onFinish = () => {
    form
      .validateFields()
      .then(async (values) => {
        // const addr = `${values?.address?.street}  ${values?.address?.city}  ${values?.address?.state}  ${values?.address?.pincode}`;
        // const { address, ...otherValues } = values;
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_URL}` + "user/",
          // { address: addr, ...otherValues },
          values,
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        setUserData(response?.data?.message);
        form.resetFields();
        setUpdateModal(false);
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
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
          sm: { span: 12 },
        }}
        layout="horizontal"
        action=""
        initialValues={{
          remember: true,
          name: userData?.name,
          email: userData?.email,
          phoneNo: userData?.phoneNo,
          gender: userData?.gender,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please enter customer name here" },
          ]}
        >
          <Input placeholder="Enter the name of the Customer" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Pleasse enter valid email" },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="phoneNo"
          label="Phone No"
          rules={[
            {
              required: true,
              message: "Please input customer phone number",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item label="Address">
          <Form.Item
            name={["address", "street"]}
            initialValue={userData?.address?.street}
            noStyle
          >
            <Input
              placeholder="Street"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item
            name={["address", "city"]}
            initialValue={userData?.address?.city}
            noStyle
          >
            <Input placeholder="City" style={{ width: "45%" }} />
          </Form.Item>
          <br />
          <br />
          <Form.Item
            name={["address", "state"]}
            initialValue={userData?.address?.state}
            noStyle
          >
            <Input
              placeholder="State"
              style={{ width: "45%", marginRight: "3%" }}
            />
          </Form.Item>
          <Form.Item
            name={["address", "pincode"]}
            initialValue={userData?.address?.pincode}
            noStyle
          >
            <Input placeholder="Pincode" style={{ width: "45%" }} />
          </Form.Item>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
