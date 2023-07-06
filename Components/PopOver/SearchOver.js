import { Button } from "@mui/material";
import RecentSearch from "Components/SearchJob/recentSearch";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const SearchOver = ({ children, onClick }) => {
  const [recommandJobsvalue, setRecommandJobsdata] = useState([]);
  const [isdataloaded, setisdataloaded] = useState(false);
  const dropdownRef = useRef(null);
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`inline-block w-full z-20 ${
        isOpen ? "fixed inset-0 z-50 bg-black bg-opacity-50 " : ""
      }  `}
    >
      <div className={`${isOpen ? "w-[50%] mx-auto mt-[11rem] " : ""}`}>
        <div onClick={handleClick}>{children}</div>
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
