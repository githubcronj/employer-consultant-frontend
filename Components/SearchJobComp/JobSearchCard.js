import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import locationIcon from "../../asset/icons/marker.png"

const JobSearchCard = ({ logo, duration, title, experience, location,flag }) => {
  return (
    <>
   {!flag ? ( <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid #CFCCD5",
        borderRadius: "12px",
        margin: "0 1rem",
        position: "relative",
        padding:"1rem",
      }}
    >
      <Box>
        <Image src={logo} alt="logo" width="35" height="35" />
      </Box>
      <Typography
        sx={{ position: "absolute", top: 0, right: 0, padding: "10px",color:"#0000006B",fontSize:"12px" }}
      >
        {duration}d
      </Typography>
      <Box>
      <Typography sx={{fontSize:"16px",fontWeight:"bold"}}>{title}</Typography>
      <Typography sx={{color:"#848484"}}>{experience} yr Exp</Typography>
      </Box>
      <Typography sx={{fontSize:"14px",color:"#848484",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        <IconButton color="primary" size="small">
          <Image src={locationIcon} alt="logo" height="10" width="10" />
        </IconButton>
        {location}
      </Typography>
    </Box>)
    :  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      border: "1px solid #CFCCD5",
      borderRadius: "12px",
      margin: "0 1rem",
      padding:"1rem",
      justifyContent:"center",
      alignItems:"center",
    }}
  >
    <Box>
      <Image src={logo} alt="logo" width="35" height="35" />
    </Box>
    <Box sx={{textAlign:"center"}}>
    <Typography sx={{fontSize:"16px",fontWeight:"bold"}}>{title}</Typography>
    <Typography sx={{color:"#848484"}}>{experience} Jobs</Typography>
    </Box>
    <Typography sx={{fontSize:"14px",color:"#848484",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <IconButton color="primary" size="small">
        <Image src={locationIcon} alt="logo" height="10" width="10" />
      </IconButton>
      {location}
    </Typography>
  </Box>}
    </>
  );
};

export default JobSearchCard;
