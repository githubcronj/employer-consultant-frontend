import { Box, Paper, Grid, Button } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import JobSearchResultData from "../../Components/SearchJobComp/JobSearchResultData";
import NotificationSideBar from "../../Components/SearchJobComp/NotificationSideBar";
import ProfileSideBar from "../../Components/SearchJobComp/ProfileSideBar";
import JobAlert from "Components/SearchJob/jobAlert";
import RecentJob from "Components/SearchJob/recentJob";
import SearchBlock from "Components/SearchJob/searchBlock";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";
import RecentSearch from "Components/SearchJob/recentSearch";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";

const SearchJob = () => {
  const { data: session } = useSession();
  const [showBox1, setShowBox1] = useState(false);

  const handleBox1Click = () => {
    setShowBox1(!showBox1);
  };

  const handleCloseSection = () => {
    setShowBox1(false);
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
      <Box sx={{ background: "#F3F5F8" }}>
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
          <JobSearchResultData
            handleBox1Click={handleBox1Click}
            showBox1={showBox1}
          />
          <NotificationSideBar />
        </Box>
      </Box>
      {showBox1 && (

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
              width:"50%",
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
              <SearchJobInput handleBox1Click={handleBox1Click} />
            <RecentSearch />
            <Button onClick={handleCloseSection}>Close</Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default withConsultantAuth(SearchJob);
