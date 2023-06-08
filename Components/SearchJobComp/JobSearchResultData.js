import { Box, Button, Paper, Typography } from "@mui/material";
import SearchJobInput from "Components/SearchJobComp/SearchJobInput";
import React from "react";
import JobSlider from "./JobSlider";


const JobSearchResultData = ({handleBox1Click}) => {
  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"1rem",padding:".2rem 1rem",alignItems:"center",width:{xs:"100%",md:"60%",lg:"100%"}}}>
      <Typography sx={{color:"white",fontSize:"20px",fontWeight:"bold",color:"black"}}>Search Job</Typography>
    <SearchJobInput handleBox1Click={handleBox1Click} />
    <Paper elevation={0} sx={{display:"flex",flexDirection:"column",gap:"3rem",padding:"1rem",overflowY: "scroll",position: "relative",width:"100%"}}>
        <JobSlider heading={"Recommended jobs"}  />
        <JobSlider  heading={"Top Companies"} subTitle="hiring for UX Designer" flag={"top"}/>
        <JobSlider heading={"UX design"} location="bangalore" />
    </Paper>

    </Box>
  );
};

export default JobSearchResultData;
