import { Box, Button, Paper, Typography } from "@mui/material";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";
import React, { useState } from "react";
import JobSlider from "./JobSlider";
import RecentSearch from "Components/SearchJob/recentSearch";

const JobSearchResultData = ({ handleBox1Click, showBox1 }) => {
  const [showRecentSearch, setShowRecentSearch] = useState(showBox1);

  const handleCloseRecentSearch = () => {
    setShowRecentSearch(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: ".2rem 1rem",
          alignItems: "center",
          width: { xs: "100%", lg: "60%", xl: "100%" },
          mb: { lg: "auto", xs: "2rem" },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Search Job
        </Typography>
        <SearchJobInput handleBox1Click={handleBox1Click} />
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            padding: "1rem",
            overflowY: "scroll",
            position: "relative",
            width: "100%",
          }}
        >
          <JobSlider heading={"Recommended jobs"} />
          <JobSlider
            heading={"Top Companies"}
            subTitle="hiring for UX Designer"
            flag={"top"}
          />
          <JobSlider heading={"UX design"} location="bangalore" />
        </Paper>
      </Box>
      {/* {showRecentSearch && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <RecentSearch />
            <Button onClick={handleCloseRecentSearch}>Close</Button>
          </Box>
        </Box>
      )} */}
    </>
  );
};

export default JobSearchResultData;
