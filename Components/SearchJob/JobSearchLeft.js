import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import spotify from "../../public/Assets/spotify.svg";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
const leftmapping = [
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
];

const JobSearchLeft = ({ jobId }) => {
  const job = useSelector((state) => state?.jobsReducer?.GetjobData);
  const router = useRouter();
  const { id } = router.query;
  const [jobData, setJobData] = useState(null);
  useEffect(() => {
    setJobData(job);
  }, [job]);

  const nextclick = (id) => {
    router.push(`/job-apply-search/${id}`);
  };

  return (
    <div>
      {job ? (
        <div
          className="bg-white max-h-[850px] h-auto pb-4 overflow-y-scroll "
          style={{ borderRadius: "6px" }}
        >
          <p className="font-semibold text-xl pt-[24px] pl-[22px]">
            {jobData?.length} Jobs
          </p>

          {jobData?.map((item, index) => {
            return (
              <div
                className={`pt-2 px-4`}
                style={{
                  borderLeft: id === item._id ? "4px solid #5e9af8" : "none",
                  background:
                    id === item._id
                      ? "linear-gradient(to left, #5e9af800, #5e9af833)"
                      : "transparent",
                }}
                key={index}
              >
                <div
                  className="flex gap-3 items-center pt-3 w-auto h-auto cursor-pointer"
                  onClick={() => nextclick(item._id)}
                >
                  <div>
                    <img
                      src={spotify.src}
                      alt="logo"
                      className="w-[46px] h-[46px]"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div>
                      <p className="font-semibold text-lg -mt-1.5">
                        {item.jobTitle}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <p>{item.employerData[0].companyName}</p>
                      <p className="font-extrabold text-xl -mt-1">.</p>
                      <p>
                        {item.experience} <span>Years exp</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] h-[1px] border my-3"></div>
              </div>
            );
          })}
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "50%",
          }}
        >
          <CircularProgress sx={{ color: "#EF4444" }} />
        </Box>
      )}
    </div>
  );
};
export default JobSearchLeft;
