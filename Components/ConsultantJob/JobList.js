import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  appliedJobRequest,
  appliedJobSuccess,
} from "store/action/applyJobAction";

const JobList = ({ setDetail }) => {
  // added
  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };

  const finaltoken = getToken();

  const jobData = useSelector((state) => state?.appliedJobReducer?.data);

  useEffect(() => {
    setDetail(jobData[0]?._id);
  }, [jobData]);

  useEffect(() => {
    dispatch(appliedJobSuccess(finaltoken));
  }, []);

  // added
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    if (jobData && jobData.length > 0) {
      setSelectedItemId(jobData[0]._id); // Select the first item by default
      setDetail(jobData[0]._id);
    }
  }, [jobData]);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    setDetail(itemId);
  };

  return (
    <Box
      py={{ xs: 1, lg: 2 }}
      sx={{
        height: { xs: "auto", md: "720px" },
        overflowY: "scroll",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Typography
        px={{ xs: 1, md: 2, lg: 3 }}
        mb={2}
        sx={{ fontSize: "18px", fontWeight: "bold", color: "#1E0F3B" }}
      >
        {`${jobData?.length} Jobs`}
      </Typography>
      <Box>
        {jobData?.map((item, index) => {
          const isSelected = item?._id === selectedItemId;
          // const isRemoved = item?.id === ;
          return (
            <Box
              py={2}
              px={{ xs: 1, md: 2, lg: 3 }}
              key={index}
              onClick={() => handleItemClick(item?._id)}
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: ".5px solid #EAE9EA",
                borderLeft: isSelected ? "4px solid #5e9af8" : "none",
                background: isSelected
                  ? "linear-gradient(to left, #5e9af800, #5e9af833)"
                  : "transparent",
                // backgroundColor: isSelected ? "blue" : "transparent",
              }}
            >
              <Image
                src="/Assets/spotify.svg"
                alt="back button"
                width={46}
                height={46}
                className="cursor-pointer w-10 h-10 rounded-full mr-4"
              />
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.jobTitle}
                </Typography>
                <Typography
                  sx={{ opacity: "0.7", color: "#5E5E5E", py: ".5rem" }}
                >
                  {`${item.industryType} . ${
                    item?.experience ? `${item.experience} Yrs` : ""
                  }`}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default JobList;
