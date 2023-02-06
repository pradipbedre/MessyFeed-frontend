import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { removeCookie } from "../../utils/Cookie";
import { Modal } from "antd";

const Logout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleOk = () => {
 //   console.log("enter");
    removeCookie("jwt_token");
    navigate("/signin");
  };

  // useEffect(() => {}, []);

  return (
    <>
      <Modal
        destroyOnClose={true}
        title="Logout"
        okText="Logout"
        open={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </>
  );
};

export default Logout;
