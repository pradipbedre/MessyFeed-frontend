import { Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const handleCancel = (e) => {
  console.log("Cancelled");
};
const handleConfirm = (e) => {
  console.log(e);
};

export const DeletePlan = () => (
  <Popconfirm
    title="Delete the Plan"
    description="Are you sure to delete this plan?"
    okText="Yes"
    cancelText="No"
    onCancel={handleCancel}
    onConfirm={handleConfirm}
  >
    <a href="#">
      <DeleteOutlined style={{ color: "red" }} />
    </a>
  </Popconfirm>
);

export default DeletePlan;
