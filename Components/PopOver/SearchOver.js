import { Button } from "@mui/material";
import RecentSearch from "Components/SearchJob/recentSearch";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchOver = ({ children, onClick }) => {
  const [recommandJobsvalue, setRecommandJobsdata] = useState([]);
  const [isdataloaded, setisdataloaded] = useState(false);
  const recommandJobsData = useSelector(
    (state) => state?.jobsReducer?.getrecommandjob
  );
  const isgetdata = useSelector((state) => state.jobsReducer.isgetdata);
  useEffect(() => {
    setRecommandJobsdata(recommandJobsData);
    // const id = recommandJobsData[0]?._id;
    // router.push(`/job-apply-search/${id}`);
  }, [recommandJobsData]);

  // useEffect(() => {
  //   if (isgetdata) {
  //     setisdataloaded(true);
  //     handleClick();
  //   }
  // }, [isgetdata]);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`inline-block w-full z-20 ${
        isOpen ? "fixed inset-0 z-50 bg-black bg-opacity-50 " : ""
      }  `}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={`${isOpen ? "w-[50%] mx-auto mt-[11rem] " : ""}`}>
        <div className={`${isOpen ? " " : ""}`}>{children}</div>
        {isOpen && (
          <div className={`${isOpen ? " " : ""}`}>
            <RecentSearch />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOver;
