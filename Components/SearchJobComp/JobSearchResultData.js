import { Box, Button, Paper, Typography } from "@mui/material";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";
import React from "react";
import JobSlider from "./JobSlider";


const JobSearchResultData = ({searchOnChangeHandler,searchSubmitHandler}) => {
  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"1rem",padding:".2rem 1rem",alignItems:"center",width:"100%"}}>
      <Typography sx={{color:"white",fontSize:"20px",fontWeight:"bold",color:"black"}}>Search Job</Typography>
      <SearchJobInput searchOnChangeHandler={searchOnChangeHandler} searchSubmitHandler={searchSubmitHandler}/>
      <Paper elevation={0} sx={{display:"flex",flexDirection:"column",gap:"3rem",padding:"1rem",overflowY: "scroll",position: "relative",width:"100%"}}>
        <JobSlider heading={"Recommended jobs"}  />
        <JobSlider  heading={"Top Companies"} subTitle="hiring for UX Designer" flag={"top"}/>
        <JobSlider heading={"UX design"} location="bangalore" />
      </Paper>

    </Box>
  );
};

export default JobSearchResultData;
