import React from "react";
import { Button, Descriptions, Modal } from "antd";
import { useState } from "react";

export const ViewProfile = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const showUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };
  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleUpdate = () => {
    setIsUpdateModalOpen(false);
  };
  const handleDelete = () => {
    setIsDeleteModalOpen(false);
  };
  const handleUpdateCancel = () => {
    setIsUpdateModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <h3>Mess Info</h3>
      <Descriptions column={1} bordered>
        <Descriptions.Item label="Mess Name">Super Mess</Descriptions.Item>
        <Descriptions.Item label="Email">
          super.mess@gmail.com
        </Descriptions.Item>
        <Descriptions.Item label="Phone">9618263578</Descriptions.Item>
        <Descriptions.Item label="Address">
          Hyderabad
          <br />
          500082
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Button type="primary" onClick={showUpdateModal}>
        Update Profile
      </Button>
      <Modal
        title="Update Mess Details"
        okText="Update"
        open={isUpdateModalOpen}
        onOk={handleUpdate}
        onCancel={handleUpdateCancel}
        centered={true}
      >
        <p>Are you sure??</p>
      </Modal>
      &nbsp;&nbsp;&nbsp;
      <Button type="primary" onClick={showDeleteModal}>
        Delete Profile
      </Button>
      <Modal
        title="Delete Mess"
        okText="Delete"
        open={isDeleteModalOpen}
        onOk={handleDelete}
        onCancel={handleDeleteCancel}
      >
        <p>Are you sure??</p>
      </Modal>
    </div>
  );
};

export default ViewProfile;
