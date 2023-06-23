import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Box, Paper, Grid, Button } from "@mui/material";
import { useSession } from "next-auth/react";
import JobSearchResultData from "../../Components/SearchJobComp/JobSearchResultData";
import NotificationSideBar from "../../Components/SearchJobComp/NotificationSideBar";
import ProfileSideBar from "../../Components/SearchJobComp/ProfileSideBar";
import JobAlert from "Components/SearchJob/jobAlert";
import RecentJob from "Components/SearchJob/recentJob";
import SearchBlock from "Components/SearchJob/searchBlock";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";
import RecentSearch from "Components/SearchJob/recentSearch";
import Searchover from "Components/PopOver/SearchOver";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";
import { fetchRecommendJobs } from "../../store/action/recommandedJobAction";

const SearchJob = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const recommanddata = useSelector((state) => state?.jobsReducer?.isgetdata);
  const [recommandJobsvalue, setRecommandJobsdata] = useState([]);
  const recommandJobsData = useSelector(
    (state) => state?.jobsReducer?.getrecommandjob
  );
  const isgetdata = useSelector((state) => state.jobsReducer.isgetdata);
  const [isgetJobData, setIsgetJobData] = useState(false);
  const [showBox1, setShowBox1] = useState(false);
  const [recommandvalue, setRecommanddata] = useState(false);

  console.log(recommandJobsData, "recommandJobsData", isgetdata);

  useEffect(() => {
    setRecommandJobsdata(recommandJobsData);
    // const id = recommandJobsData[0]?._id;
    // router.push(`/job-apply-search/${id}`);
  }, [recommandJobsData]);

  useEffect(() => {
    setRecommanddata(recommanddata);
  }, [recommanddata]);

  useEffect(() => {
    setIsgetJobData(isgetdata);
  }, [isgetdata]);

  const [searchData, setSearchData] = useState({
    jobTitle: "",
    location: "",
  });

  const searchOnChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();

  const searchSubmitHandler = () => {
    if (finaltoken) {
      dispatch(fetchRecommendJobs(searchData, finaltoken));
      console.log(isgetdata, "isGetData");
      if (isgetJobData) {
        const id = recommandJobsvalue[0]?._id;
        router.push(`/job-apply-search/${id}`);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isgetdata) {
      // const id = recommandJobsvalue[0]?._id;
      // router.push(`/job-apply-search/${id}`);
      searchSubmitHandler();
    }
  }, [isgetJobData]);

  useEffect(() => {
    if (recommandvalue) {
      setSearchData({
        jobTitle: "",
        location: "",
      });
    }
  }, [recommandvalue]);

  const handleBox1Click = () => {
    // setShowBox1(!showBox1);
  };

  const handleCloseSection = () => {
    setShowBox1(false);
  };

  return (
    <>
      <Box sx={{ background: "#F3F5F8" }}>
        <Box
          sx={{
            maxWidth: "1536px",
            margin: "auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", lg: "row" },
            justifyContent: "space-between",
            py: "3rem",
            px: { xs: ".8rem", sm: "2rem", md: "5rem" },
            height: { xs: "auto", sm: "auto" },
            justifyContent: "center",
            width: { xs: "100%", sm: "100%", md: "100%" },
          }}
        >
          <ProfileSideBar data={session} />
          <JobSearchResultData
            handleBox1Click={handleBox1Click}
            showBox1={showBox1}
            searchOnChangeHandler={searchOnChangeHandler}
            searchSubmitHandler={searchSubmitHandler}
            searchData={searchData}
          />
          <NotificationSideBar />
        </Box>
      </Box>
    </>
  );
};

export default withConsultantAuth(SearchJob);
