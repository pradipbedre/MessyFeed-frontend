import { notification } from "antd";

const [api, contextHolder] = notification.useNotification();
const openNotificationWithIcon = (type, title, message) => {
  api[type]({
    message: title,
    description: message,
  });
};

export { contextHolder, openNotificationWithIcon };
