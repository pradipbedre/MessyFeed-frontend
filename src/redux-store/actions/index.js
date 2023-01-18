export const setPin = (value) => {
  return {
    type: "SETPINCODE",
    payload: value,
  };
};

export const setMessId = (value) => {
  return {
    type: "SETMESSID",
    payload: value,
  };
};
