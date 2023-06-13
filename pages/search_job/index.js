import { Box, Paper, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import JobSearchResultData from "../../Components/SearchJobComp/JobSearchResultData";
import NotificationSideBar from "../../Components/SearchJobComp/NotificationSideBar";
import ProfileSideBar from "../../Components/SearchJobComp/ProfileSideBar";
import JobAlert from "Components/SearchJob/jobAlert";
import RecentJob from "Components/SearchJob/recentJob";
import SearchBlock from "Components/SearchJob/searchBlock";
const SearchJob = () => {
  const { data: session } = useSession();
  const [showBox1, setShowBox1] = useState(true);

  const handleBox1Click = () => {
    setShowBox1(!showBox1);
  };
  const [searchData, setSearchData] = useState({
    jobTitle: "",
    location: "",
  });

  const searchOnChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const searchSubmitHandler = () => {
    alert(JSON.stringify(searchData));
  };
  return (
    <>
      {showBox1 ? (
        <Box
          sx={{
            background: "#F3F5F8",
          }}
        >
          <Box
            sx={{
              maxWidth: "1536px",
              margin: "auto",
              display: "flex",
              flexDirection: { xs: "column", sm: "column", lg: "row" },
              justifyContent: "space-between",
              py: "3rem",
              px: { xs: ".8rem", sm: "2rem", md: "5rem" },
              height: { xs: "auto", sm: "auto" },
              justifyContent: "center",
              width: { xs: "100%", sm: "100%", md: "100%" },
            }}
          >
            <ProfileSideBar data={session} />
            <JobSearchResultData handleBox1Click={handleBox1Click} />
            <NotificationSideBar />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            background: "#F3F5F8",
          }}
        >
          <Box
            py={2}
            sx={{
              maxWidth: "1536px",
              margin: "auto",
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: "space-between",
              justifyContent: "center",
              background: "#F3F5F8",
              px: { xs: ".8rem", sm: "2rem", md: "5rem" },
              height: { xs: "auto", lg: "100vh" },
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} sx={{ display: { lg: "none" } }}>
                <SearchBlock
                  searchOnChangeHandler={searchOnChangeHandler}
                  searchSubmitHandler={searchSubmitHandler}
                  handleBox1Click={handleBox1Click}
                />
              </Grid>
              <Grid item xs={12} lg={3} sx={{ marginTop: "4rem" }}>
                <JobAlert />
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                <SearchBlock
                  searchOnChangeHandler={searchOnChangeHandler}
                  searchSubmitHandler={searchSubmitHandler}
                  handleBox1Click={handleBox1Click}
                />
              </Grid>
              <Grid item xs={12} lg={3} sx={{ marginTop: "4rem" }}>
                <RecentJob />
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SearchJob;
