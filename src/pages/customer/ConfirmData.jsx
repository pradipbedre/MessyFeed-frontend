import { Descriptions } from "antd";
export const ConfirmData = ({ formData, selectedData }) => {
  const data = formData;
  console.log(data);
  return (
    <div>
      <h3>Confirm Details</h3>
      <Descriptions column={2} bordered>
        {Object.keys(data).map((key) => {
          return key === "address" ? (
            data[key] ? (
              <Descriptions.Item
                label={key}
              >{`${data[key]["street"]} ${data[key]["city"]}, ${data[key]["state"]}, ${data[key]["pincode"]}`}</Descriptions.Item>
            ) : (
              ""
            )
          ) : key === "mealPlan" ? (
            selectedData ? (
              <Descriptions.Item
                label={key}
              >{`${selectedData}`}</Descriptions.Item>
            ) : (
              ""
            )
          ) : data[key] ? (
            <Descriptions.Item label={key}>{`${data[key]}`}</Descriptions.Item>
          ) : (
            ""
          );
        })}
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
