import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { savedJobRequest } from "store/action/savedJobAction";
import CircularProgress from "@mui/material/CircularProgress";
import {
  SAVE_JOB_SUCCESS,
} from "store/type/applyJobType";

const SaveJobDetails = ({ detail, remove }) => {
  const [showApply, setShowApply] = useState(true);
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
  const saveJobData = useSelector(
    (state) => state?.savedJobReducer?.data[0]?.job
  );

  useEffect(() => {
    dispatch(savedJobRequest(finaltoken));
  }, []);
  
  const saveData = () => {
    const payload = { jobId: jobData?._id, finaltoken };
    dispatch({ type: SAVE_JOB_SUCCESS, payload });
  };

  const savedFinalData = saveJobData?.filter(
    (index, item) => index?._id == detail
  );
  console.log("save new", savedFinalData);
  return (
    <Grid container>
      <Grid
        sx={{
          height: { xs: "auto", md: "720px" },
          overflowY: "scroll",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          borderLeft: "1px solid #D0D0D6",
          borderRight: "1px solid #D0D0D6",
          px: { xs: "1rem", sm: "2rem", lg: "3.5rem" },
        }}
        item
        py={1}
        xs={12}
        sm={9}
      >
        {/* {savedFinalData?.map((item, index) => {
          return ( */}
        {/* {savedFinalData && (
          
        )} */}

        <>
        {savedFinalData ? (
          <>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "space-between" },
              alignItems: { xs: "flex-start", md: "center" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              py={2}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src='/Assets/google.svg'
                alt='profile'
                height={63}
                width={63}
              />
              <Box ml={1}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "26px" },
                  }}
                >
                  {savedFinalData[0]?.jobTitle
                    ? savedFinalData[0]?.jobTitle
                    : "NA"}
                </Typography>
                <Typography
                  sx={{
                    opacity: "0.7",
                    color: "#5E5E5E",
                    py: ".5rem",
                    fontSize: "20px",
                  }}
                >
                  Google &#8729; #54236
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                style={{ background: "#5E9AF8" }}
                sx={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  py: "1rem",
                  px: "26px",
                  mt: { md: 2 },
                  borderRadius: "15px",
                }}
              >
                Apply
              </Button>

              <Typography pt={2} sx={{ float: "right" }}>
                12-04-2023
              </Typography>
            </Box>
          </Box>

          <Box
            py={2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItem: "center",
                }}
              >
                <Image
                  src='/Assets/suitcase.svg'
                  alt='profile'
                  height={25}
                  width={25}
                />
                <Typography px={5} sx={{ color: "#1E0F3B" }}>
                  {savedFinalData[0]?.experience
                    ? `${savedFinalData[0]?.experience} Years Experience`
                    : "NA"}
                </Typography>
              </Box>
              {/* 2 */}
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItem: "center",
                }}
              >
                <Image
                  src='/Assets/building.svg'
                  alt='profile'
                  height={25}
                  width={25}
                />
                <Typography px={5} sx={{ color: "#1E0F3B" }}>
                  {savedFinalData[0]?.industryType
                    ? savedFinalData[0]?.industryType
                    : "NA"}
                </Typography>
              </Box>
              {/* 3 */}
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItem: "center",
                }}
              >
                <Image
                  src='/Assets/money.svg'
                  alt='profile'
                  height={25}
                  width={25}
                />
                <Typography px={5} sx={{ color: "#1E0F3B" }}>
                  {savedFinalData[0]?.salary
                    ? savedFinalData[0]?.salary
                    : "NA"}
                </Typography>
              </Box>
              {/* 4 */}
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItem: "center",
                }}
              >
                <Image
                  src='/Assets/laptop.svg'
                  alt='profile'
                  height={25}
                  width={25}
                />
                <Typography px={5} sx={{ color: "#1E0F3B" }}>
                  {savedFinalData[0]?.jobType
                    ? savedFinalData[0]?.jobType
                    : "NA"}
                </Typography>
              </Box>
              {/* 5 */}
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItem: "center",
                }}
              >
                <Image
                  src='/Assets/location.svg'
                  alt='profile'
                  height={25}
                  width={25}
                />
                <Typography px={5} sx={{ color: "#1E0F3B" }}>
                  {savedFinalData[0]?.location
                    ? savedFinalData[0]?.location
                    : "NA"}
                </Typography>
              </Box>
              {/* ); */}
              {/* })} */}
            </Box>
            <Box
              py={2}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
              }}
            >
              <Image
                onClick={saveData}
                src='/Assets/savebtn.svg'
                alt='profile'
                height={54}
                width={54}
                style={{ paddingBottom: "1rem" }}
              />
              <Image
                src='/Assets/chatbtn.svg'
                alt='profile'
                height={54}
                width={54}
              />
            </Box>
          </Box>
          <Box sx={{ borderTop: "1px solid #D0D0D6" }}>
            <Box py={3}>
              {/* {data2.map((item, ind) => { */}
              {/* return ( */}
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItem: "center",
                }}
              >
                <Image
                  src='/Assets/scheduler.svg'
                  alt='profile'
                  height={25}
                  width={25}
                />
                <Typography px={5} sx={{ color: "#1E0F3B" }}>
                  {savedFinalData[0]?.deadline
                    ? savedFinalData[0]?.deadline
                    : "12-09-2023"}
                </Typography>
              </Box>
              {/* 2 */}
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItem: "center",
                }}
              >
                <Image
                  src='/Assets/mail.svg'
                  alt='profile'
                  height={25}
                  width={25}
                />
                <Typography px={5} sx={{ color: "#1E0F3B" }}>
                  {savedFinalData[0]?.email}
                </Typography>
              </Box>
              {/* 3 */}
              <Box
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItem: "center",
                }}
              >
                <Image
                  src='/Assets/call.svg'
                  alt='profile'
                  height={25}
                  width={25}
                />
                <Typography px={5} sx={{ color: "#1E0F3B" }}>
                  {savedFinalData[0]?.phoneNumber
                    ? savedFinalData[0]?.phoneNumber
                    : "NA"}
                </Typography>
              </Box>
              {/* ); */}
              {/* })} */}
            </Box>
          </Box>

          <Box sx={{ borderTop: "1px solid #D0D0D6" }}>
            <Typography
              pt={2}
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1E0F3B",
              }}
            >
              About the job
            </Typography>
            <Box>
              <Typography sx={{ color: "#7E84A3" }} py={3}>
                {savedFinalData[0]?.description
                  ? savedFinalData[0]?.description
                  : "NA"}
              </Typography>
            </Box>
          </Box>
        </>

        ) : (
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:'50%'}}>
        <CircularProgress sx={{ color: "#EF4444" }} />
      </Box>
        )}
        </>
        



      </Grid>
      
    </Grid>
  );
};

export default SaveJobDetails;
