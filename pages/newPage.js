import React, { useState } from "react";
import OutSorceConsultant from "../Components/outsorceDetails/outsorceConsultant";
const Newpage = () => {
  const [popup, setPopup] = useState(true);
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
export default Newpage;
