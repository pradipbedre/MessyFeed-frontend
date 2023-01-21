import React, { useRef } from "react";
import axios from "axios";
import {
  Button,
  Row,
  Col,
  Divider,
  Card,
  Descriptions,
  Image,
  Pagination,
  Modal,
  Carousel,
  notification,
  Spin,
} from "antd";
import { useState, useEffect } from "react";
import UpdateMess from "./UpdateMess";
import ViewPlans from "./ViewPlans.jsx";
import { getCookie } from "../../utils/Cookie";
import StarRating from "../../components/user/starrRating/StarRating";

const tabList = [
  {
    key: "tab1",
    tab: "Meals",
  },
  {
    key: "tab2",
    tab: "Customers",
  },
];
const contentList = {
  tab1: (
    <p>
      Total meals sold <br /> <b>120</b>
    </p>
  ),
  tab2: (
    <p>
      Active customers
      <br /> <b>136</b>
    </p>
  ),
};

const ViewMess = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const [messData, setMessData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);

  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  const carouselRef = useRef(null);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, title, message) => {
    api[type]({
      message: title,
      description: message,
    });
  };

  // const [api, contextHolder] = notification.useNotification();

  // const openNotificationWithIcon = (type, title, message) => {
  //   api[type]({
  //     message: title,
  //     description: message,
  //   });
  // };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  useEffect(() => {
    const getMessData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}` + "user/mess/",
          {
            headers: {
              Authorization: `${getCookie("jwt_token")}`,
            },
          }
        );
        if (response?.data?.statusCode === 200) {
          setMessData(response?.data?.message);
        } else {
          console.log(response?.data?.message);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMessData();
  }, []);

  useEffect(() => {
    getReviewsData();
  }, []);

  const getReviewsData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}` + "user/mess/reviews",
      {
        headers: {
          Authorization: `${getCookie("jwt_token")}`,
        },
      }
    );
    setReviewsCount(response?.data?.message?.length || 0);
    setData(
      response?.data?.message?.map((review) => {
        return (
          <Col key={review?._id} sm={12} md={8} lg={4}>
            <Card
              style={{
                width: 200,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>{review?.review}</p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <StarRating rating={review?.rating} />
                </div>
              </div>
            </Card>
          </Col>
        );
      })
    );
  };

  const onChange = (currentPage) => {
    setCurrentPage(currentPage);
    getReviewsData();
  };

  const showImageModal = () => {
    setImageModal(true);
  };
  const showUpdateModal = () => {
    setUpdateModal(true);
  };
  const showDeleteModal = () => {
    setDeleteModal(true);
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

  const handleImage = () => {
    setImageModal(false);
  };
  const handleImageCancel = () => {
    setImageModal(false);
  };

  if (isLoading) return <Spin />;

  return messData ? (
    <>
      <div>
        <Row gutter={[24, 8]}>
          <Col xs={24} sm={8}>
            <h3>Mess Info</h3>

            <>
              <Descriptions column={1} bordered>
                <Descriptions.Item label="Name">
                  {messData?.name}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {messData?.email}
                </Descriptions.Item>
                <Descriptions.Item label="Phone No">
                  {messData?.contactNo}
                </Descriptions.Item>
                <Descriptions.Item label="Address">
                  {messData?.address + " " + messData?.pincode}
                </Descriptions.Item>
              </Descriptions>
              <br />
              <br />
              <Button type="primary" onClick={showUpdateModal}>
                Update Mess
              </Button>
              <Modal
                destroyOnClose={true}
                title="Update Mess Details"
                okText="Update"
                open={updateModal}
                onCancel={handleUpdateCancel}
                centered={true}
                footer={null}
              >
                <UpdateMess
                  messData={messData}
                  setMessData={setMessData}
                  setUpdateModal={setUpdateModal}
                  openNotificationWithIcon={openNotificationWithIcon}
                />
              </Modal>
              &nbsp;&nbsp;&nbsp;
              <Button type="primary" onClick={showDeleteModal}>
                Delete Mess
              </Button>
              <Modal
                destroyOnClose={true}
                title="Delete Mess"
                okText="Delete"
                open={deleteModal}
                onOk={handleDelete}
                onCancel={handleDeleteCancel}
              >
                <p>Are you sure??</p>
              </Modal>
            </>
          </Col>
          <Col xs={24} sm={8}>
            <h3>Mess Plans</h3>
            <ViewPlans openNotificationWithIcon={openNotificationWithIcon} />
          </Col>
          <Col xs={24} sm={6}>
            <h3>Mess Daily Reports</h3>
            <Card
              hoverable={true}
              tabList={tabList}
              activeTabKey={activeTabKey1}
              onTabChange={(key) => {
                onTab1Change(key);
              }}
            >
              {contentList[activeTabKey1]}
            </Card>
          </Col>
        </Row>
        <Divider></Divider>
        <h3>Mess Images</h3>
        <Row around="xs" gutter={[8, 8]}>
          {messData?.photos?.slice(0, 4)?.map((image) => (
            <Col sm={12} md={8} lg={4}>
              <Image width={200} src={image} />
            </Col>
          ))}
          {messData?.photos?.length > 4 && (
            <Col sm={12} md={8} lg={4}>
              <div width={200} textAlign="Center">
                <Button type="text" onClick={showImageModal}>
                  Show More
                </Button>
                <Modal
                  title="Gallery"
                  okText=""
                  cancelText=""
                  onOk={handleImage}
                  onCancel={handleImageCancel}
                  open={imageModal}
                  footer={null}
                >
                  <Carousel
                    ref={carouselRef}
                    autoplay={true}
                    footer={null}
                    style={{ backgroundColor: "#0e2e3c" }}
                  >
                    {messData?.photos?.map((image) => (
                      <Image src={image} />
                    ))}
                  </Carousel>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "space-around",
                    }}
                  >
                    <Button
                      style={{ textAlign: "left", marginTop: "10px" }}
                      onClick={handlePrev}
                    >
                      Previous
                    </Button>
                    <Button
                      style={{ textAlign: "right", marginTop: "10px" }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </div>
                </Modal>
              </div>
            </Col>
          )}
        </Row>
        <Divider></Divider>
        <h3>Mess Reviews</h3>
        <Row gutter={[8, 8]}>{data}</Row>
        <Divider></Divider>
        <Pagination
          onChange={onChange}
          defaultPageSize={5}
          defaultCurrent={1}
          total={reviewsCount}
        />
      </div>
      {contextHolder}
    </>
  ) : (
    <p>No data available</p>
  );
};

export default ViewMess;
