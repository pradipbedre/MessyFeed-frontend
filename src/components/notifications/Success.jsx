import { Modal, Form, Input, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Success = ({ message }) => {
  const [updateModal, setUpdateModal] = useState(true);
  const navigate = useNavigate();

  const handleOK = () => {
    setUpdateModal(false);
    // navigate("/user/mess/view/");
  };

  return (
    <>
      <Modal
        destroyOnClose={true}
        title="Success"
        okText="Update"
        onOk={handleOK}
        open={updateModal}
        // onCancel={handleUpdateCancel}
        closable={false}
        centered={true}
        // footer={null}
      >
        <p>Congratulations!!! Mess has been registered successfuly</p>
      </Modal>
    </>
  );
};

export default Success;
