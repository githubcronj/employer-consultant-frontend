import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ConsultantInfo = () => {
  return (
    <>
      <Box sx={{sm:{px:4}}}>
        <Box sx={{ px: 2,mt:1 }}>
          <Typography sx={{fontSize: "14px", color: "#1E0F3B" }}>
          simply dummy text of the printing typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type & scrambled it to make a type
          specimen book. It has survived not only five centuries, but also
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", border:"1px solid #1E0F3B",borderLeft:"0px",borderRight:"0px", px:2,py:2,my:2 }}>
          <Typography>Total Consultant</Typography>
          <Typography>34</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",gap:2,justifyContent:"center",alignItems:"center"}}>
          <Button variant='contained' style={{backgroundColor:"#F9342E"}} sx={{borderRadius:"10px",p:{sm:2,xs:1},width:{lg:"73%",md:"85%",sm:"85%",xs:"90%"}}}>Delete Resource Pool</Button>
          <Button variant='contained' style={{backgroundColor:"#F9342E"}} sx={{borderRadius:"10px",p:{sm:2,xs:1},width:{lg:"73%",md:"85%",sm:"85%",xs:"90%"}}}>Edit Resource Pool</Button>
        </Box>
      </Box>
    </>
  );
};

export default ConsultantInfo;
