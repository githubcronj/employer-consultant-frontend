import React, { useEffect, useRef, useState } from "react";
import JobSearchLeft from "Components/SearchJob/JobSearchLeft";
import MainSearch from "Components/SearchJob/MainSearch";
import JobSearchHeader from "Components/SearchJob/JobSearchHeader";
import JobSearchRight from "Components/SearchJob/JobSearchRight";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobsRequest,
  fetchRecommendJobs,
} from "store/action/recommandedJobAction";
import { appliedJobSuccess } from "store/action/applyJobAction";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import SearchOver from "Components/PopOver/SearchOver";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";

const JobSearchDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };

  const finaltoken = getToken();
  const jobData = useSelector((state) => state.jobsReducer.GetjobData);
  const appliedJobData = useSelector((state) => state.appliedJobReducer.data);
  console.log("data", jobData);

  useEffect(() => {
    dispatch(fetchJobsRequest(jobData, finaltoken));
    dispatch(appliedJobSuccess(finaltoken));
  }, []);

  let finaldata = jobData?.filter((x, y) => {
    return id == x?._id;
  });

  const [showBox1, setShowBox1] = useState(false);
  const [searchData, setSearchData] = useState({
    jobTitle: "",
    location: "",
  });
  const [recommandJobsvalue, setRecommandJobsdata] = useState([]);
  const [isgetJobData, setIsgetJobData] = useState(false);
  const [recommandvalue, setRecommanddata] = useState(false);
  const isgetdata = useSelector((state) => state.jobsReducer.isgetdata);
  const recommandJobsData = useSelector(
    (state) => state?.jobsReducer?.getrecommandjob
  );
  const recommanddata = useSelector((state) => state?.jobsReducer?.isgetdata);

  useEffect(() => {
    setRecommanddata(recommanddata);
  }, [recommanddata]);

  useEffect(() => {
    setIsgetJobData(isgetdata);
  }, [isgetdata]);

  useEffect(() => {
    setRecommandJobsdata(recommandJobsData);
    // const id = recommandJobsData[0]?._id;
    // router.push(`/job-apply-search/${id}`);
  }, [recommandJobsData]);

  const searchOnChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let searchId = useRef(null);

  const searchSubmitHandler = () => {
    if (
      recommandJobsvalue[0]?._id === null ||
      recommandJobsvalue[0]?._id === undefined
    ) {
      searchId.current = "no-data-available";
    } else {
      searchId.current = recommandJobsvalue[0]?._id;
    }

    if (finaltoken) {
      dispatch(fetchRecommendJobs(searchData, finaltoken));
      console.log(isgetdata, "isGetData");
      if (isgetJobData) {
        const id = searchId.current;
        router.push(`/job-apply-search/${searchId.current}`);
      }
    } else {
      router.push(`/job-apply-search/no-data-available`);
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

  return (
    <div className="bg-[#2B373C1C] flex flex-col justify-center items-center ">
      <Stack
        direction="row"
        mb={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "0px",
          marginTop: "20px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          src="/Assets/backbtn.svg"
          alt="back button"
          width={42}
          height={42}
          className="cursor-pointer -ml-[15rem]"
          onClick={() => router.push("/search_job")}
        />
        <Typography
          sx={{
            color: "#2B373C",
            fontSize: "26px",
            fontWeight: "bold",
            marginLeft: "10.5rem",
          }}
        >
          Search Jobs
        </Typography>
      </Stack>
      <div className="pt-1 px-3 sm:px-10 h-fit lg:max-w-[1400px] ">
        <div className="xl:hidden lg:hidden ">
          <JobSearchHeader />
        </div>
        <div class="lg:grid lg:grid-cols-12 md:grid-cols-3  gap-4">
          <div class="col-span-3 lg:col-span-3 md:col-span-12 ">
            <div className="mt-[20px] sm:mt-[30px] justify-center  xl:block lg:block">
              <JobSearchLeft jobId={id} />
            </div>
          </div>
          <div class="col-span-6 lg:col-span-6 md:col-span-12 sm:mt-[30px] ">
            <div className="flex flex-col lg:m-[20px] lg:mt-0 sm:mt-[30px] gap-8 ">
              <div className="hidden xl:block lg:block">
                {/* <JobSearchHeader /> */}
                <div className="relative w-full">
                  <SearchOver>
                    <SearchJobInput
                      handleBox1Click={handleBox1Click}
                      showBox1={showBox1}
                      searchOnChangeHandler={searchOnChangeHandler}
                      searchSubmitHandler={searchSubmitHandler}
                      searchData={searchData}
                    />
                  </SearchOver>
                </div>
              </div>
              <div>
                <MainSearch
                  finaldata={finaldata}
                  appliedJobData={appliedJobData}
                />
              </div>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-3 md:col-span-12">
            <div className="xl:mr-[20px] lg:mr-[20px] my-[30px] bg-white max-h-[462px] h-auto">
              <JobSearchRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withConsultantAuth(JobSearchDetails);
