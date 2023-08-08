import { Box, Grid, Typography, Button } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import unsaveJob from "../../asset/images/unsaveJob.svg";
import bookmark from "../../public/Assets/bookmark.svg";
export const data1 = [
  {
    tagImg: "/Assets/exp1.svg",
    title: "2yr Experience",
  },
  {
    tagImg: "/Assets/exp2.svg",
    title: "1000+ Employee - IT Services and Consulting",
  },
  {
    tagImg: "/Assets/exp3.svg",
    title: "10$ /hr",
  },
  {
    tagImg: "/Assets/exp4.svg",
    title: "Full Time",
  },
  {
    tagImg: "/Assets/exp5.svg",
    title: "Silicon valley",
  },
];
export const data2 = [
  {
    tagImg: "/Assets/exp6.svg",
    title: "20-04-2024",
  },
  {
    tagImg: "/Assets/exp7.svg",
    title: "Companyname@gmail.com",
  },
  {
    tagImg: "/Assets/exp8.svg",
    title: "496 013 5893",
  },
];
const InterviewDetails = ({ finaldata }) => {
  const [savejob, setSavejob] = useState(true);
  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");
      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();

  const saveData = () => {
    setSavejob(false);
    // const payload = { jobId: finaldata[0]?._id, finaltoken };
    // dispatch({ type: SAVE_JOB_SUCCESS, payload });
    // localStorage.setItem("savedJobId", finaldata[0]?._id);
  };
  const unsaveData = () => {
    setSavejob(true);
    // const payload = { jobId: finaldata[0]?._id, finaltoken };
    // dispatch({ type: UNSAVE_JOB_REQUEST, payload });
    // localStorage.removeItem("savedJobId");
  };

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#EAE9EA",
      color: "#5E5E5E",
      maxWidth: 120,
      fontSize: theme.typography.pxToRem(12),
      padding: 12,
    },
  }));

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#EAE9EA",
      color: "#5E5E5E",
      fontSize: 11,
      padding: 12,
    },
  }));

  return (
    <Grid container>
      <Grid
        sx={{
          height: { xs: "550px", md: "720px" },
          overflowY: "scroll",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          borderLeft: {md:"1px solid #D0D0D6"},
          borderRight: {md:"1px solid #D0D0D6"},
          px: { xs: "1.5rem", sm: "2rem", lg: "3.5rem" },
          borderTop:{xs:"1px solid #D0D0D6",md:"none"}
        }}
        item
        py={1}
        xs={12}
        md={9}
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
              src="/Assets/google.svg"
              alt="profile"
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
                UX Designer
              </Typography>
              <Typography
                sx={{
                  opacity: "0.7",
                  color: "#5E5E5E",
                  py: ".5rem",
                  fontSize: "20px",
                }}
              >
                Google &#x2022; #54236
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
            <HtmlTooltip title="Open Interview Schedule">
              <Button
                style={{ background: "#5e9af8" }}
                sx={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  py: ".8rem",
                  px: "38px",
                  borderRadius: "15px",
                }}
              >
                OPEN
              </Button>
            </HtmlTooltip>
            <Typography pt={3} sx={{ float: "right" }}>
              12-04-2023
            </Typography>
          </Box>
        </Box>
        <Box py={2} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            {data1.map((item, ind) => {
              return (
                <Box
                  key={ind}
                  py={2}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItem: "center",
                  }}
                >
                  <Image
                    src={item.tagImg}
                    alt="profile"
                    height={44}
                    width={44}
                  />
                  <Typography px={2} sx={{ color: "#1E0F3B" }}>
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box
            py={2}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <LightTooltip title="Save Job" placement="left">
              {savejob ? (
                <Image
                  src="/Assets/savebtn.svg"
                  alt="profile"
                  height={54}
                  width={54}
                  style={{ marginBottom: "1rem", cursor: "pointer" }}
                  onClick={saveData}
                />
              ) : (
                <Image
                  src="/Assets/unsaveJob.svg"
                  alt="profile"
                  height={54}
                  width={54}
                  style={{ marginBottom: "1rem", cursor: "pointer" }}
                  onClick={unsaveData}
                />
              )}
            </LightTooltip>

            <LightTooltip title="Chat with company" placement="left">
              <Image
                src="/Assets/chatbtn.svg"
                alt="profile"
                height={54}
                width={54}
                className="cursor-pointer"
              />
            </LightTooltip>
          </Box>
        </Box>
        <Box sx={{ borderTop: {md:"1px solid #D0D0D6"} }}>
          <Box py={3}>
            {data2.map((item, ind) => {
              return (
                <Box
                  key={ind}
                  py={2}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItem: "center",
                  }}
                >
                  <Image
                    src={item.tagImg}
                    alt="profile"
                    height={44}
                    width={44}
                  />
                  <Typography px={2} sx={{ color: "#1E0F3B" }}>
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
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
              Accenture is a leading global professional services company that
              helps the world’s leading businesses, governments and other
              organizations build their digital core, optimize their operations,
              accelerate revenue growth and enhance citizen services—creating
              tangible value at speed and scale. We are a talent and innovation
              led company with 738,000 people serving clients in more than 120
              countries. Technology is at the core of change today, and we are
              one of the world’s leaders in helping drive that change, with
              strong ecosystem relationships.
            </Typography>
            <Typography sx={{ color: "#7E84A3" }}>
              We combine our strength in technology with unmatched industry
              experience, functional expertise and global delivery capability.
              We are uniquely able to deliver tangible outcomes because of our
              broad range of services, solutions and assets across Strategy &
              Consulting, Technology, Operations, Industry X and Accenture Song.
              These capabilities, together with our culture of shared success
              and commitment to creating 360° value, enable us to help our
              clients succeed and build trusted, lasting relationships. We
              measure our success by the 360° value we create for our clients,
              each other, our shareholders, partners and communities. Visit us
              at www.accenture.com.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
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
            <Typography
              sx={{ color: "#817891", fontSize: "11px", fontWeight: "bold" }}
            >
              18-09-2023
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default InterviewDetails;
