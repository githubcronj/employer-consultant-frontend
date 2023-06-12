import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import profile from "../../asset/images/profile.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import { GET_PROFILE_REQUEST } from "store/type/viewProfileType";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSelector } from "react-redux";

const ProfileSideBar = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const payload = {
    token: getToken(),
  };
  useEffect(() => {
    dispatch({ type: GET_PROFILE_REQUEST, payload });
  }, []);
  // console.log('payload',payload)
  const response = useSelector(
    (state) => state?.viewProfileReducer?.CurrentUser
  );
  console.log("new response", response?.jobType);
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "flex-start",
        alignItems: "center",
        width: { xs: "100%", md: "20%", lg: "28%" },
      }}
    >
      <Box
        mt={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* src={data?.user.image} */}
        <Image
          style={{ borderRadius: "50%" }}
          src='/Assets/homeProfile.png'
          alt='profile'
          width='100'
          height='100'
        />
        <Typography sx={{ fontWeight: "bold" }}>{data?.user.name}</Typography>
        {response?.experience.map((item, index) => {
          return (
            <Typography
              sx={{ color: "#5E5E5E", fontSize: "14px", textAlign: "center" }}
            >
              {item?.jobPosition} &#8226; {response?.jobType}
            </Typography>
          );
        })}

        <Button
          onClick={() => router.push("/viewjobpost/cviewprofile")}
          style={{
            background: "#E7E9E9",
            color: "red",
            borderRadius: "13px",
            padding: ".7rem",
          }}
        >
          View Profile
        </Button>
      </Box>
      <Divider sx={{ width: "95%", height: "2px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: { xs: "1rem" },
        }}
      >
        <Link href='/consultant/applied-jobs'>
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "13px",
              textTransform: "none",
              fontSize: "16px",
              padding: "0.5rem 1rem",
            }}
          >
            Applied Job
            <span style={{ marginLeft: "3rem" }}>13</span>
            <ArrowForwardIosIcon
              fontSize='small'
              style={{ marginLeft: "0.5rem" }}
            />
          </Button>
        </Link>

        <Button
          style={{
            backgroundColor: "red",
            color: "white",
            display: "flex",
            alignItems: "center",
            borderRadius: "13px",
            justifyContent: "space-between",
            textTransform: "none",
            fontSize: "16px",
            padding: "0.5rem 1rem",
          }}
        >
          Interview schedule
          <ArrowForwardIosIcon
            fontSize='small'
            style={{ marginLeft: "0.5rem" }}
          />
        </Button>
      </Box>
    </Paper>
  );
};

export default ProfileSideBar;
