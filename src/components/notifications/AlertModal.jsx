// import { Modal, Form, Input, Button } from "antd";
// import { useState } from "react";
// import { useNavigate } from "react-router";

// const AlertModal = ({
//   message = "This is default text message",
//   title = "This is default title",
//   okText = "OK",
//   shouldNavigate = false,
//   destinationUrl = null,
//   showModal,
//   setShowModal,
// }) => {
//   const handleOK = () => {
//     if (shouldNavigate) navigate(destinationUrl);
//     setShowModal(false);
//   };

//   const handleModalCancel = () => {
//     setShowModal(false);
//   };
//   return (
//     <Modal
//       destroyOnClose={true}
//       title={title}
//       okText={okText}
//       onOk={handleOK}
//       open={showModal}
//       onCancel={handleModalCancel}
//       closable={false}
//       centered={true}
//       //   footer={null}
//     >
//       <p>{message}</p>
//     </Modal>
//   );
// };

// export default AlertModal;

import { Button, notification, Space } from "antd";
const AlertModal = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon("success")}>
          Success
        </Button>
        <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
        <Button onClick={() => openNotificationWithIcon("warning")}>
          Warning
        </Button>
        <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
      </Space>
    </>
  );
};
export default AlertModal;
