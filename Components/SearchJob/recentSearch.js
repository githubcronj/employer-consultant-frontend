import React from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const RecentSearch = () => {
  return (
    <Box mt={3} sx={{ background: "#fff", py: "1rem", borderRadius: "4px" }}>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      py={2}
      px={2}
    >
      <Typography
        sx={{ fontSize: "20px", color: "#1E0F3B", fontWeight: "bold" }}
      >
        Recent Search
      </Typography>
     <Button sx={{py:".7rem"}} startIcon={<ClearIcon/>} variant="outlined" style={{color:'#857D95',borderColor:"#857D95",opacity:".7",borderRadius:"10px"}}>Clear</Button>
    </Stack>
    <Grid container p={2}>
      <Grid item xs={7} sm={9}>
        <Typography sx={{ fontWeight: "bold",fontSize:"18px" }}>UX Designer</Typography>
        <Typography sx={{ opacity: "0.7" }}>California</Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sm={3}
        container
        direction="row"
        justifyContent="end"
        alignItems="center"
      >
       <Typography pr={1}  sx={{color:"#F9342E",fontWeight:"bold",fontSize:{xs:"12px",sm:"16px"}}}>
       23 New Job
       </Typography>
        <Box >
          <ArrowForwardIosIcon sx={{color:'#857D95',fontSize:{xs:"12px",sm:"16px"}}}/>
        </Box>
      </Grid>
    </Grid>
    <Divider />
    <Grid container p={2}>
      <Grid item xs={7} sm={9}>
        <Typography sx={{ fontWeight: "bold",fontSize:"18px" }}>UX Designer</Typography>
        <Typography sx={{ opacity: "0.7" }}>California</Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sm={3}
        container
        direction="row"
        justifyContent="end"
        alignItems="center"
      >
       <Typography pr={1} sx={{color:"#F9342E",fontWeight:"bold",fontSize:{xs:"12px",sm:"16px"}}}>
       23 New Job
       </Typography>
        <Box >
          <ArrowForwardIosIcon sx={{color:'#857D95',fontSize:{xs:"12px",sm:"16px"}}}/>
        </Box>
      </Grid>
    </Grid>
    <Divider />
    <Grid container p={2}>
      <Grid item xs={7} sm={9}>
        <Typography sx={{ fontWeight: "bold",fontSize:"18px" }}>UX Designer</Typography>
        <Typography sx={{ opacity: "0.7" }}>California</Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sm={3}
        container
        direction="row"
        justifyContent="end"
        alignItems="center"
      >
       <Typography pr={1}  sx={{color:"#F9342E",fontWeight:"bold",fontSize:{xs:"12px",sm:"16px"}}}>
       23 New Job
       </Typography>
        <Box >
          <ArrowForwardIosIcon sx={{color:'#857D95',fontSize:{xs:"12px",sm:"16px"}}}/>
        </Box>
      </Grid>
    </Grid>
    <Divider />
    <Grid container p={2}>
      <Grid item xs={7} sm={9}>
        <Typography sx={{ fontWeight: "bold",fontSize:"18px" }}>UX Designer</Typography>
        <Typography sx={{ opacity: "0.7" }}>California</Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sm={3}
        container
        direction="row"
        justifyContent="end"
        alignItems="center"
      >
       <Typography pr={1}  sx={{color:"#F9342E",fontWeight:"bold",fontSize:{xs:"12px",sm:"16px"}}}>
       23 New Job
       </Typography>
        <Box >
          <ArrowForwardIosIcon sx={{color:'#857D95',fontSize:{xs:"12px",sm:"16px"}}}/>
        </Box>
      </Grid>
    </Grid>
    <Divider />
    <Grid container p={2}>
      <Grid item xs={7} sm={9}>
        <Typography sx={{ fontWeight: "bold",fontSize:"18px" }}>UX Designer</Typography>
        <Typography sx={{ opacity: "0.7" }}>California</Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sm={3}
        container
        direction="row"
        justifyContent="end"
        alignItems="center"
      >
       <Typography pr={1}  sx={{color:"#F9342E",fontWeight:"bold",fontSize:{xs:"12px",sm:"16px"}}}>
       23 New Job
       </Typography>
        <Box >
          <ArrowForwardIosIcon sx={{color:'#857D95',fontSize:{xs:"12px",sm:"16px"}}}/>
        </Box>
      </Grid>
    </Grid>
    
   
  </Box>
  )
}

export default RecentSearch;