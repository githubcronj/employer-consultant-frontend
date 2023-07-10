import { Box, Button, Paper, Typography } from "@mui/material";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";
import React, { useState } from "react";
import JobSlider from "./JobSlider";
import RecentSearch from "Components/SearchJob/recentSearch";
import SearchOver from "Components/PopOver/SearchOver";

const JobSearchResultData = ({
  handleBox1Click,
  showBox1,
  searchOnChangeHandler,
  searchSubmitHandler,
  searchData,
}) => {
  const [showSearch, setshowSearch] = useState(true);
  const [isInputFocused, setInputFocused] = useState(false);

  const handleShowSearch = () => {
    false;
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
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
        <div className="relative w-full">
          <SearchOver id="1">
            <SearchJobInput
              handleBox1Click={handleBox1Click}
              showBox1={showBox1}
              searchOnChangeHandler={searchOnChangeHandler}
              searchSubmitHandler={searchSubmitHandler}
              searchData={searchData}
            />
          </SearchOver>
        </div>

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
            backdropFilter: isInputFocused ? "blur(5px)" : "none",
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
    </>
  );
};

export default JobSearchResultData;
