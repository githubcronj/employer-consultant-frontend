import { Button } from "@mui/material";
import RecentSearch from "Components/SearchJob/recentSearch";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const SearchOver = ({ children, onClick, id }) => {
  const [recommandJobsvalue, setRecommandJobsdata] = useState([]);
  const [isdataloaded, setisdataloaded] = useState(false);
  const dropdownRef2 = useRef(null);
  const recommandJobsData = useSelector(
    (state) => state?.jobsReducer?.getrecommandjob
  );
  const isgetdata = useSelector((state) => state.jobsReducer.isgetdata);
  useEffect(() => {
    setRecommandJobsdata(recommandJobsData);
  }, [recommandJobsData]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
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
      <div
        className={`${
          isOpen
            ? `${
                id == 1
                  ? "mx-[1rem] md:mx-auto md:w-[700px] lg:w-[684px] xl:w-[850px]"
                  : "w-[600px]"
              } mx-auto mt-[32rem] md:mt-[28rem] lg:mt-[11rem] `
            : ""
        }`}
        ref={dropdownRef2}
      >
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
