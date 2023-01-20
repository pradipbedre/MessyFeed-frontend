const initialState = 0;
const setCommonMessId = (state = initialState, action) => {
  switch (action.type) {
    case "SETMESSID":
      return (state = action.payload);
    default:
      return state;
  }
};

export default setCommonMessId;
