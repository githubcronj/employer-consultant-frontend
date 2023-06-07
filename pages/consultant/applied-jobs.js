import { Box, Grid, Stack, Typography } from "@mui/material";
import JobDetails from "Components/ConsultantJob/JobDetails";
import JobList from "Components/ConsultantJob/JobList";
import Image from "next/image";
import React from "react";

const AppliedJobs = () => {
  return (
    <Box
      py={2}
      sx={{
        background: "#F3F5F8",
        px: { xs: ".8rem", sm: "2rem", lg: "5rem" },
      }}
    >
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
        />
        <Typography
          sx={{
            color: "#2B373C",
            fontSize: "26px",
            fontWeight: "bold",
            marginLeft: "1.5rem",
          }}
        >
          Applied Jobs
        </Typography>
      </Stack>
      <Box sx={{ background: "#FFFFFF", borderRadius: "15px", display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "space-between",
        justifyContent: "center", }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <JobList />
          </Grid>
          <Grid  item xs={12} md={9}>
            <JobDetails/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AppliedJobs;
