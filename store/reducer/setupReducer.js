import { SETUPDETAILS } from "store/action/setupDetails";

  
// Initial state
const initialState = {
  data: [],
};
  // Reducer
const setupReducer = (state = initialState, action) => {
  switch (action.type) {
  case SETUPDETAILS:
    console.log(action,"----");
    return {
      ...state,
      data: action.payload,
    };
  case "REMOVE_DATA":
    const newData = [...state.data];
    newData.splice(action.payload, 1);
    return {
      ...state,
      data: newData,
    };
  default:
    return state;
  }
};
  
export default setupReducer;
  