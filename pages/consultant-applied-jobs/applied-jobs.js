import { Box, Grid, Stack, Typography } from "@mui/material";
import JobDetails from "Components/ConsultantJob/JobDetails";

import JobList from "Components/ConsultantJob/JobList";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";

const AppliedJobs = () => {
  const router = useRouter();
  const [detail, setDetail] = useState();
  const [remove, setRemove] = useState(false);
  console.log(detail,'dddd');
  console.log(remove,'remove');
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
          onClick={()=> router.push("/search_job")}
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
            <JobList setDetail={setDetail} remove={remove}/>
          </Grid>
          <Grid  item xs={12} md={9}>
            <JobDetails detail={detail} setRemove={setRemove} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default withConsultantAuth(AppliedJobs);
