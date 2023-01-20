const initialState = 0;
const setCommonPincode = (state = initialState, action) => {
  switch (action.type) {
    case "SETPINCODE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default setCommonPincode;
