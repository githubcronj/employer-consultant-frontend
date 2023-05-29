
export const SETUPDETAILS = "SETUPDETAILS";
export const REMOVE_DATA = "REMOVE_DATA";

export function detailsInfo(payload) {
    // console.log(payload)
    return {
      type: SETUPDETAILS,
      payload: payload,
    };
  }

  export const removeData = (index) => {
    return {
      type: 'REMOVE_DATA',
      payload: index,
    };
  };