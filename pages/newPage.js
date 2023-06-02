import React, { useState } from "react";
import OutSorceConsultant from "../Components/outsorceDetails/outsorceConsultant";
const newpage = () => {
  const [popup, setPopup] = useState(false);
  const click = () => {
    setPopup(true);
  };
  return (
    <div className=''>
      {popup && <OutSorceConsultant setPopup={setPopup} />}
      <button onClick={click}>click me</button>
    </div>
  );
};
export default newpage;
