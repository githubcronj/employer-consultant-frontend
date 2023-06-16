import { Box, Grid, Stack, Typography } from "@mui/material";
import InterviewDetails from "Components/InterviewConsultant/InterviewDetails";
import InterviewList from "Components/InterviewConsultant/InterviewList";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";

const ScheduleInterview = () => {
    const router = useRouter()
  return (
    <Box
      py={2}
      sx={{
        background: "#F3F5F8",
        fontFamily:''
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
            Interview Schedule{" "}
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
              <InterviewList />
            </Grid>
            <Grid item xs={12} md={9}>
              <InterviewDetails />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default withConsultantAuth(ScheduleInterview);
