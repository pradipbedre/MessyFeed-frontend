import React, { useEffect } from "react";
import axios from "axios";
import { Button, Descriptions, Modal, Spin, Typography } from "antd";
import { useState } from "react";
import { UpdateProfile } from "./UpdateProfile";
import { getCookie } from "../../utils/Cookie";
const { Title } = Typography;

export const ViewProfile = () => {
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}` + "user/",

        {
          headers: {
            Authorization: `${getCookie("jwt_token")}`,
          },
        }
      );
      setUserData(response?.data?.message);
      setIsLoading(false);
    };
    getUserData();
  }, []);

  const showUpdateModal = () => {
    setUpdateModal(true);
  };
  const showDeleteModal = () => {
    setDeleteModal(true);
  };

  const handleUpdate = () => {
    setDeleteModal(false);
  };
  const handleDelete = () => {
    setDeleteModal(false);
  };
  const handleUpdateCancel = () => {
    setUpdateModal(false);
  };

  const handleDeleteCancel = () => {
    setDeleteModal(false);
  };

  if (isLoading) return <Spin />;
  return (
    <>
      <Title level={2}>User Profile</Title>
      <div>
        {userData ? (
          <>
            <Descriptions column={1} bordered>
              <Descriptions.Item label="Name">
                {userData?.name}
              </Descriptions.Item>
              <Descriptions.Item label="Gender">
                {userData?.gender}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {userData?.email}
              </Descriptions.Item>
              <Descriptions.Item label="Phone No">
                {userData?.phoneNo}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {userData?.address}
              </Descriptions.Item>
              <Descriptions.Item label="Role">
                {userData?.role}
              </Descriptions.Item>
            </Descriptions>
            <br />
            <br />
            <Button type="primary" onClick={showUpdateModal}>
              Update Profile
            </Button>
            <Modal
              destroyOnClose={true}
              title="Update User Profile"
              okText="Update Profile"
              open={updateModal}
              onOk={handleUpdate}
              onCancel={handleUpdateCancel}
              centered={true}
              footer={null}
            >
              <UpdateProfile
                userData={userData}
                setUserData={setUserData}
                setUpdateModal={setUpdateModal}
              />
            </Modal>
            &nbsp;&nbsp;&nbsp;
            <Button type="primary" onClick={showDeleteModal}>
              Delete Profile
            </Button>
            <Modal
              destroyOnClose={true}
              title="Delete User Profile"
              okText="Delete"
              open={deleteModal}
              onOk={handleDelete}
              onCancel={handleDeleteCancel}
            >
              <p>Are you sure??</p>
            </Modal>
          </>
        ) : (
          <p>User data is not available</p>
        )}
      </div>
    </>
  );
};

export default ViewProfile;
