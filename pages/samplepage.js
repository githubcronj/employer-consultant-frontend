import { Box, Grid } from "@mui/material";
import React from "react";
import JobAlert from "Components/SearchJob/jobAlert";
import RecentJob from "Components/SearchJob/recentJob";
import SearchBlock from "Components/SearchJob/searchBlock";
const samplepage = () => {
  return (
    <Box
      py={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "space-between",
        justifyContent: "center",
        background: "#F3F5F8",
        px: {xs:".8rem", sm: "2rem", md: "5rem" },
        height:{xs:"auto",lg:"100vh"}
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3} sx={{ marginTop: "4rem" }}>
          <JobAlert />
        </Grid>
        <Grid item xs={12} lg={6}>
          <SearchBlock />
        </Grid>
        <Grid item xs={12} lg={3} sx={{ marginTop: "4rem" }}>
          <RecentJob />
        </Grid>
      </Grid>
    </Box>
  );
};

export default samplepage;
