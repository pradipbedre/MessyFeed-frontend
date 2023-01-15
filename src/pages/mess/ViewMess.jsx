import React from "react";
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
} from "antd";
import { useState, useEffect } from "react";
import UpdateMess from "./UpdateMess";
import ViewPlans from "./ViewPlans.jsx";

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
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const arr = [1, 2, 3, 4, 5];
    const dArr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    let tempData = "";
    let i = -1;
    if (currentPage % 2 === 1) {
      tempData =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad error,temporibus odit tenetur itaque iusto, qui unde provident blanditiis,earum deleniti facere! Culpa, molestias possimus.";
    } else {
      tempData =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio incidunt magni sint, ducimus pariatur.";
    }
    setData(
      arr.map(() => {
        i = i + 1;
        return (
          <Col key={(currentPage - 1) * 5 + i} sm={12} md={8} lg={4}>
            <Card
              style={{
                width: 200,
              }}
            >
              {tempData}
              {/* {currentPage},{(currentPage - 1) * 5 + i},
              {dArr[(currentPage - 1) * 5 + i]} */}
            </Card>
          </Col>
        );
      })
    );
    //   dArr.slice((currentPage - 1) * 5, currentPage * 5).map((value) => (
    //     <Col key={(currentPage - 1) * 5 + i} sm={12} md={8} lg={4}>
    //       <Card
    //         style={{
    //           width: 200,
    //         }}
    //       >
    //         {(currentPage - 1) * 5}
    //         {currentPage * 5}
    //       </Card>
    //     </Col>
    //   ))
    // );
  };

  const onChange = (currentPage) => {
    console.log(currentPage);
    setCurrentPage(currentPage);
    fetchData();
  };

  const showImageModal = () => {
    setIsImageModalOpen(true);
  };
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

  const handleImage = () => {
    setIsImageModalOpen(false);
  };
  const handleImageCancel = () => {
    setIsImageModalOpen(false);
  };

  return (
    <div>
      <Row gutter={[24, 8]}>
        <Col xs={24} sm={8}>
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
            Update Mess
          </Button>
          <Modal
            title="Update Mess Details"
            okText="Update"
            open={isUpdateModalOpen}
            onOk={handleUpdate}
            onCancel={handleUpdateCancel}
            centered={true}
          >
            <UpdateMess />
          </Modal>
          &nbsp;&nbsp;&nbsp;
          <Button type="primary" onClick={showDeleteModal}>
            Delete Mess
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
        </Col>
        <Col xs={24} sm={8}>
          <h3>Mess Plans</h3>
          <ViewPlans />
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
      {/* <Divider></Divider>
      <Row>
        <ViewPlans />
      </Row> */}
      <Divider></Divider>
      <h3>Mess Images</h3>
      <Row around="xs" gutter={[8, 8]}>
        {[1, 2, 3, 4].map(() => (
          <Col sm={12} md={8} lg={4}>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        ))}
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
              open={isImageModalOpen}
            >
              <Carousel autoplay={true}>
                {[1, 2, 3, 4].map(() => (
                  <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                ))}
              </Carousel>
            </Modal>
          </div>
        </Col>
      </Row>
      <Divider></Divider>
      <h3>Mess Reviews</h3>
      <Row gutter={[8, 8]}>{data}</Row>
      <Divider></Divider>
      <Pagination
        onChange={onChange}
        defaultPageSize={5}
        defaultCurrent={1}
        total={20}
      />
    </div>
  );
};

export default ViewMess;
