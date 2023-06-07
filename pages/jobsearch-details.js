import React from "react";
import JobSearchLeft from "Components/SearchJob/JobSearchLeft";
import MainSearch from "Components/SearchJob/MainSearch";
import JobSearchHeader from "../Components/SearchJob/JobSearchHeader";
import JobSearchRight from "Components/SearchJob/JobSearchRight";

const JobSearchDetails = () => {
  return (
    <div>
      <div className='bg-[#2B373C1C] pt-1 px-3 sm:px-10 h-fit flex gap-2 xl:flex-row lg:flex-row flex-col xl:items-baseline lg:items-baseline '>
        <div className='xl:hidden lg:hidden '>
          <JobSearchHeader />
        </div>
        <div className='mt-[20px] justify-center hidden xl:block lg:block'>
          <JobSearchLeft />
        </div>
        <div className='flex flex-col xl:m-[20px] lg:m-[20px] '>
          <div className='hidden xl:block lg:block'>
            <JobSearchHeader />
          </div>
          <div>
            <MainSearch />
          </div>
        </div>
        <div className=' xl:mr-[20px] lg:mr-[20px] my-[20px] bg-white xl:w-[289px] w-auto max-h-[462px] h-auto '>
          <JobSearchRight />
        </div>
        <div className='mt-[20px] justify-center  xl:hidden lg:hidden'>
          <JobSearchLeft />
        </div>
      </div>
    </div>
  );
};
export default JobSearchDetails;