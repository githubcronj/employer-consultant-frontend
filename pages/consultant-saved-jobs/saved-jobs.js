import { Box, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";
import SaveJobDetails from "Components/ConsultantSavedJob/SaveJobDetails";
import SaveJobList from "Components/ConsultantSavedJob/SaveJobList";

const SavedJobs = () => {
  const router = useRouter();
  const [detail, setDetail] = useState();
  const [remove, setRemove] = useState(false);

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <Box
      py={2}
      sx={{
        background: "#F3F5F8",
        px: { xs: ".8rem", sm: "2rem", lg: "5rem" },
        height: `${
          screenSize.height < 900 ? "900px" : `${screenSize.height}px`
        }`,
      }}
      
    >
          <Box sx={{ maxWidth: "1536px", px: { xs: ".8rem", sm: "2rem", lg: "5rem" },mx:"auto" }}>

      <Stack
        direction="row"
        mb={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image
          src="/Assets/backbtn.svg"
          alt="back button"
          width={42}
          height={42}
          className="cursor-pointer"
          onClick={() => router.push("/search_job")}
        />
        <Typography
          sx={{
            color: "#2B373C",
            fontSize: "26px",
            fontWeight: "bold",
            marginLeft: "1.5rem",
          }}
        >
          Saved Jobs
        </Typography>
      </Stack>
      <Box
        sx={{
          background: "#FFFFFF",
          borderRadius: "15px",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <SaveJobList setDetail={setDetail} remove={remove} />
          </Grid>
          <Grid item xs={12} md={9}>
            <SaveJobDetails detail={detail} setRemove={setRemove} />
          </Grid>
        </Grid>
      </Box></Box>
    </Box>
  );
};

export default withConsultantAuth(SavedJobs);
