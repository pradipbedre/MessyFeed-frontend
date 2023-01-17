import { Descriptions } from "antd";
export const ConfirmData = (formData) => {
  const data = formData.formData;
  return (
    <div>
      <h3>Confirm Details</h3>
      <Descriptions column={2} bordered>
        {Object.keys(data).map((key) =>
          data[key] in ["street", "city", "state", "pincode"] ? (
            ""
          ) : data[key] ? (
            <Descriptions.Item label={key}>{`${data[key]}`}</Descriptions.Item>
          ) : (
            ""
          )
        )}
        <Descriptions.Item label="address">{`${data["state"]}, ${data["city"]}, ${data["country"]}, ${data["pincode"]} `}</Descriptions.Item>
      </Descriptions>
      <br />
      <br />
    </div>
  );
};

{
  /* <Descriptions column={1} bordered>
  <Descriptions.Item label="Name">{data?.name}</Descriptions.Item>
  <Descriptions.Item label="Email">{data?.email}</Descriptions.Item>
  <Descriptions.Item label="Phone No">{data?.phone}</Descriptions.Item>
  <Descriptions.Item label="Address">{data?.address}</Descriptions.Item>
  <Descriptions.Item label="Gender">{data?.gender}</Descriptions.Item>
  <Descriptions.Item label="Meal Plan">{data?.plan}</Descriptions.Item>
  <Descriptions.Item label="Status">{data?.status}</Descriptions.Item>
  <Descriptions.Item label="Plan End Date">{data?.endDate}</Descriptions.Item>
</Descriptions>; */
}
export default ConfirmData;
