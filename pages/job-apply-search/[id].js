import React, { useEffect } from "react";
import JobSearchLeft from "Components/SearchJob/JobSearchLeft";
import MainSearch from "Components/SearchJob/MainSearch";
import JobSearchHeader from "../Components/SearchJob/JobSearchHeader";
import JobSearchRight from "Components/SearchJob/JobSearchRight";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchJobsRequest } from "store/action/recommandedJobAction";

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
  console.log(finaltoken,'finaltoken')

  useEffect(() => {
    dispatch(fetchJobsRequest(jobData,finaltoken));
  }, []);


  return (
    <div>
      <div className="bg-[#2B373C1C] pt-1 px-3 sm:px-10 h-fit flex gap-2 xl:flex-row lg:flex-row flex-col xl:items-baseline lg:items-baseline ">
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
            <MainSearch />
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
export default JobSearchDetails;
