import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { appliedJobSuccess } from "store/action/applyJobAction";
import { CANCEL_JOB_SUCCESS, SAVE_JOB_SUCCESS } from "store/type/applyJobType";
import ChatComponent from "../../Components/ChatComponent/AppliedChat"
import Popover from "Components/PopOver/chatOver";

const JobDetails = ({ detail, setRemove }) => {
  const [savejob, setSavejob] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick2 = () => {
    setIsOpen(!isOpen);
   
  };
  const handleChatClose = () => {
    // Handle the chat closing logic here
    console.log('Chat closed!');
    setIsOpen(false)
  };

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
    dispatch(appliedJobSuccess(finaltoken));
  }, []);

  const saveData = () => {
    const payload = { jobId: jobData?._id, finaltoken };
    dispatch({ type: SAVE_JOB_SUCCESS, payload });
    setSavejob(false)
    // localStorage.setItem("savedJobId", finaldata[0]?._id);
  };
  const unsaveData = () => {
    // const payload = { jobId: finaldata[0]?._id, finaltoken };
    // dispatch({ type: UNSAVE_JOB_REQUEST, payload });
    setSavejob(true);
    // localStorage.removeItem("savedJobId");
  };

  const finalData = jobData?.filter((index, item) => index?._id == detail);

  // console.log("detail", finalData);

  const handleCancel = () => {
    const payload = { jobId: finalData[0]?._id, finaltoken };
    dispatch({ type: CANCEL_JOB_SUCCESS, payload });
    // setRemove(true);
    // router.push('/search_job');
    dispatch(appliedJobSuccess(finaltoken));
  };
  return (<>
    <Grid container>
    {finalData.length === 0 ?<Box sx={{ height: { xs: "auto", md: "720px" },}}><h1 className="lg:text-2xl font-bold  xl:pl-[17px] lg:pl-[16px] sm:pl-[17px] md:pl-[17px] pl-[5px]  h-[19px] mb-[15px] mt-[15px] text-[#000000] text-left font-sans">
          No Data Available
        </h1></Box>:<>
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
                {finalData[0]?.jobTitle ? finalData[0]?.jobTitle : "NA"}
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
            <Box sx={{}}>
              <Button
                style={{ background: "#f9f6ee" }}
                sx={{
                  fontWeight: "bold",
                  color: "#1E0F3B",
                  py: "1rem",
                  px: "26px",
                  mx:1,
                  borderRadius: "15px",
                }}
              >
                APPLIED
              </Button>
              <Button
                style={{ background: "#F9342E" }}
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  py: "1rem",
                  px: "26px",
                  mx:1,
                  borderRadius: "15px",
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>
            <Typography pt={2} sx={{ float: "right" }}>
              12-04-2023
            </Typography>
          </Box>
        </Box>
        <Box py={2} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            {/* {data1.map((item, ind) => { */}
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
                src='/Assets/suitcase.svg'
                alt='profile'
                height={25}
                width={25}
              />
              <Typography px={5} sx={{ color: "#1E0F3B" }}>
                {finalData[0]?.experience
                  ? `${finalData[0]?.experience} Years Experience`
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
                {finalData[0]?.industryType ? finalData[0]?.industryType : "NA"}
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
                {finalData[0]?.salary ? finalData[0]?.salary : "NA"}
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
                {finalData[0]?.jobType ? finalData[0]?.jobType : "NA"}
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
                {finalData[0]?.location ? finalData[0]?.location : "NA"}
              </Typography>
            </Box>
            {/* ); */}
            {/* })} */}
          </Box>
          <div className="relative inline-block">
      {!isOpen && (
        <Box
          py={2}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            marginTop:"100px"
          }}
        >
          {savejob ? (
            <Image
              onClick={saveData}
              src='/Assets/savebtn.svg'
              alt='profile'
              height={54}
              width={54}
              style={{ paddingBottom: "1rem" }}
            />
          ) : (
            <Image
              onClick={unsaveData}
              src='/Assets/unsavejob.svg'
              alt='profile'
              height={54}
              width={54}
              style={{ paddingBottom: "1rem" }}
            />
          )}

          <Popover>
            <Image
              src='/Assets/chatbtn.svg'
              alt='profile'
              height={54}
              width={54}
              onClick={handleClick2}
            />
          </Popover>
        </Box>
      )}

      {isOpen && (
        <div className="popover">
          <div>
            <ChatComponent onClose={handleChatClose}/>
          </div>
        </div>
      )}
    </div>
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
                {finalData[0]?.deadline ? finalData[0]?.deadline : "12-09-2023"}
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
                {finalData[0]?.email}
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
                {finalData[0]?.phoneNumber ? finalData[0]?.phoneNumber : "NA"}
              </Typography>
            </Box>
            {/* ); */}
            {/* })} */}
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid #D0D0D6" }}>
          <Typography
            pt={2}
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#1E0F3B" }}
          >
            About the job
          </Typography>
          <Box>
            <Typography sx={{ color: "#7E84A3" }} py={3}>
              {finalData[0]?.description ? finalData[0]?.description : "NA"}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Box
          sx={{
            background: "#E6E4E9",
            mr: { xs: ".5rem", lg: "3.2rem" },
            p: "1rem",
          }}
        >
          <Box mb={2}>
            <Typography sx={{ color: "#1E0F3B" }}>Job Applied</Typography>
            <Typography
              sx={{ color: "#817891", fontSize: "11px", fontWeight: "bold" }}
            >
              12-09-2023
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#1E0F3B" }}>
              Interview Schedule
            </Typography>
            <Typography sx={{ color: "#1E0F3B" }}>18-09-2023</Typography>
          </Box>
        </Box>
      </Grid>
    </>}
      
    </Grid>
 </>
  );
};

export default JobDetails;
