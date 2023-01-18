import { Drawer, Button } from "antd";
import { useState } from "react";

const Logout = () => {
  const [visible, setVisible] = useState(true);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        title="Are you sure you want to logout?"
        placement="right"
        closable={false}
        onClose={onClose}
        open={visible}
        width={320}
      >
        <p>You can put your logout logic here</p>
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #e9e9e9",
            padding: "10px 16px",
            background: "#fff",
            textAlign: "right",
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={onClose} type="primary">
            Logout
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Logout;
