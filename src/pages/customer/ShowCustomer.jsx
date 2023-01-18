// import React from "react";
// import { Button, Descriptions, Modal } from "antd";
// import { useState } from "react";

// export const ShowCustomer = (rowData) => {
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const showUpdateModal = () => {
//     setIsUpdateModalOpen(true);
//   };
//   const showDeleteModal = () => {
//     setIsDeleteModalOpen(true);
//   };
//   const handleUpdate = () => {
//     setIsUpdateModalOpen(false);
//   };
//   const handleDelete = () => {
//     setIsDeleteModalOpen(false);
//   };
//   const handleUpdateCancel = () => {
//     setIsUpdateModalOpen(false);
//   };

//   const handleDeleteCancel = () => {
//     setIsDeleteModalOpen(false);
//   };

// return (
// <div>
//   <h3>Mess Info</h3>
//   <Descriptions column={1} bordered>
//     <Descriptions.Item label="Mess Name">Super Mess</Descriptions.Item>
//     <Descriptions.Item label="Email">
//       super.mess@gmail.com
//     </Descriptions.Item>
//     <Descriptions.Item label="Phone">9618263578</Descriptions.Item>
//     <Descriptions.Item label="Address">
//       Hyderabad
//       <br />
//       500082
//     </Descriptions.Item>
//   </Descriptions>
//   <br />
//   <br />
//   <Button type="primary" onClick={showUpdateModal}>
//     Update Profile
//   </Button>
//   <Modal
//     title="Update Mess Details"
//     okText="Update"
//     open={isUpdateModalOpen}
//     onOk={handleUpdate}
//     onCancel={handleUpdateCancel}
//     centered={true}
//   >
//     <p>Are you sure??</p>
//   </Modal>
//   &nbsp;&nbsp;&nbsp;
// <Button type="primary" onClick={showDeleteModal}>
//   Delete Profile
// </Button>
//   <Modal
//     title="Delete Mess"
//     okText="Delete"
//     open={isDeleteModalOpen}
//     onOk={handleDelete}
//     onCancel={handleDeleteCancel}
//   >
//     <p>Are you sure??</p>
//   </Modal>
// </div>
//   );
// };
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Descriptions, Modal } from "antd";

const ShowCustomer = () => {
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const key = location.state.record.key;
    const data = location.state.allCustomersData?.find(
      (item) => item._id === key
    );
    setData(data);
    console.log(data);
  }, [location]);

  return (
    <>
      <div>
        <h2>Details</h2>
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Name">{data?.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{data?.email}</Descriptions.Item>
          <Descriptions.Item label="Phone No">
            {data?.phoneNo}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {`${data?.address?.street} ${data?.address?.city} ${data?.address?.state} ${data?.address?.pincode}`}
          </Descriptions.Item>
          <Descriptions.Item label="Gender">{data?.gender}</Descriptions.Item>
          <Descriptions.Item label="Meal Plan">
            {data?.planName}
          </Descriptions.Item>
          <Descriptions.Item label="Status">{data?.status}</Descriptions.Item>
          {/* <Descriptions.Item label="Plan End Date">
            {data?.startDate}
          </Descriptions.Item> */}
        </Descriptions>
        <br />
        <br />
        <Button type="primary">Update Customer</Button>
        &nbsp;&nbsp;
        <Button type="primary">Delete Customer</Button>
      </div>
    </>
  );
};

export default ShowCustomer;
