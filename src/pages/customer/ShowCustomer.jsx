import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button, Descriptions, Modal, notification } from "antd";
import UpdateCustomer from "./UpdateCustomer";
import { getCookie } from "../../utils/Cookie";
import SendOtp from "./SendOtp";
import ValidateOtp from "./ValidateOtp";
import PlanRenewal from "./PlanRenewal";

const ShowCustomer = () => {
  const location = useLocation();
  const [allCustomersData, setAllCustomersData] = useState();
  const [customerData, setCustomerData] = useState();
  const [updateModal, setUpdateModal] = useState(false);
  const [renewalModal, setRenewalModal] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, title, message) => {
    api[type]({
      message: title,
      description: message,
    });
  };

  const showUpdateModal = () => {
    setUpdateModal(true);
  };
  const showRenewalModal = () => {
    setRenewalModal(true);
  };
  const handleUpdate = () => {
    setUpdateModal(false);
  };
  const handleRenewal = () => {
    setRenewalModal(false);
  };
  const handleUpdateCancel = () => {
    setUpdateModal(false);
  };

  const handleRenewalCancel = () => {
    setRenewalModal(false);
  };

  useEffect(() => {
    const getCustomersData = async () => {
      try {
        const plansData = location?.state?.plansData;
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}user/mess/customer/${
            location?.state?.record?._id
          }`,
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        console.log("Response = ", response?.data?.message, plansData);
        if (response?.data?.statusCode === 200) {
          const selectedPlan = plansData?.find(
            (item) => item._id === response?.data?.message?.planId
          );
          response.data.message.planName = selectedPlan?.name;
          setCustomerData(response?.data?.message);
        } else {
          console.log(response?.data?.message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    try {
      getCustomersData();
    } catch (err) {
      console.log(err);
    }
  }, [location]);

  return (
    <>
      <div>
        <h2>Details</h2>
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Name">
            {customerData?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {customerData?.email}
          </Descriptions.Item>
          <Descriptions.Item label="Phone No">
            {customerData?.phoneNo}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {`${customerData?.address?.street} ${customerData?.address?.city} ${customerData?.address?.state} ${customerData?.address?.pincode}`}
          </Descriptions.Item>
          <Descriptions.Item label="Gender">
            {customerData?.gender}
          </Descriptions.Item>
          <Descriptions.Item label="Meal Plan">
            {customerData?.planName}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {customerData?.status}
          </Descriptions.Item>
          <Descriptions.Item label="Plan Start Date">
            {customerData?.planStartDate?.split("T")[0]}
          </Descriptions.Item>
          <Descriptions.Item label="Plan End Date">
            {customerData?.planEndDate?.split("T")[0]}
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <Button type="primary" onClick={showUpdateModal}>
          Update Customer
        </Button>
        <Modal
          destroyOnClose={true}
          title="Update Customer Details"
          okText="Update"
          open={updateModal}
          onOk={handleUpdate}
          onCancel={handleUpdateCancel}
          centered={true}
          footer={null}
        >
          <UpdateCustomer
            customerData={customerData}
            setUpdateModal={setUpdateModal}
            setCustomerData={setCustomerData}
          />
        </Modal>
        &nbsp;&nbsp;
        <Button type="primary" onClick={showRenewalModal}>
          Renew Plan
        </Button>
        <Modal
          title="Renew Plan"
          okText="Renew"
          open={renewalModal}
          onOk={handleRenewal}
          onCancel={handleRenewalCancel}
          footer={null}
        >
          <PlanRenewal
            email={customerData?.email}
            setRenewalModal={setRenewalModal}
            setCustomerData={setCustomerData}
            openNotificationWithIcon={openNotificationWithIcon}
          />
        </Modal>
      </div>
      {contextHolder}
    </>
  );
};

export default ShowCustomer;
