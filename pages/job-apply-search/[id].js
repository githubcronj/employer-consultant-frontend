import React, { useEffect } from "react";
import JobSearchLeft from "Components/SearchJob/JobSearchLeft";
import MainSearch from "Components/SearchJob/MainSearch";
import JobSearchHeader from "Components/SearchJob/JobSearchHeader";
import JobSearchRight from "Components/SearchJob/JobSearchRight";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsRequest } from "store/action/recommandedJobAction";
import { appliedJobSuccess } from "store/action/applyJobAction";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

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

  useEffect(() => {
    dispatch(fetchJobsRequest(jobData, finaltoken));
    dispatch(appliedJobSuccess(finaltoken));
  }, []);

  let finaldata = jobData?.filter((x, y) => {
    return id == x?._id;
  });

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
      <div className="pt-1 px-3 sm:px-10 h-fit flex gap-2 xl:flex-row lg:flex-row flex-col xl:items-baseline lg:items-baseline ">
        <div className="xl:hidden lg:hidden ">
          <JobSearchHeader />
        </div>
        <div className="mt-[20px] justify-center hidden xl:block lg:block">
          <JobSearchLeft />
        </div>
        <div className="flex flex-col xl:m-[20px] lg:m-[20px] ">
          <div className="hidden xl:block lg:block">
            <JobSearchHeader />
          </div>
          <div>
            <MainSearch finaldata={finaldata} appliedJobData={appliedJobData} />
          </div>
        </div>
        <div className=" xl:mr-[20px] lg:mr-[20px] my-[20px] bg-white xl:w-[289px] w-auto max-h-[462px] h-auto ">
          <JobSearchRight />
        </div>
        <div className="mt-[20px] justify-center  xl:hidden lg:hidden">
          <JobSearchLeft />
        </div>
      </div>
    </div>
  );
};
export default withConsultantAuth(JobSearchDetails);
