import { Box, Divider, Grid, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
const RecentJob = () => {
  return (
    <Box sx={{ background: "#fff", p: "1rem", borderRadius: "4px" }}>
      <Stack spacing={2} py={1} >
        <Typography
          sx={{ fontSize: "20px", color: "#1E0F3B", fontWeight: "bold" }}
        >
          Recently opened
        </Typography>
      </Stack>
      <Grid
        container
        my={2}
        
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Image
            src="/Assets/spotify.svg"
            alt="view_img"
            width={34}
            height={34}
          />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ color: "#1E0F3B", fontWeight: "bold" }}>UX Designer</Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ opacity: ".7" }}>Spotify</Typography>
            <Typography sx={{ opacity: ".7", fontSize: "10px" }}>3d</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        py={2}
        
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Image
            src="/Assets/spotify.svg"
            alt="view_img"
            width={34}
            height={34}
          />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ color: "#1E0F3B", fontWeight: "bold" }}>UX Designer</Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ opacity: ".7" }}>Spotify</Typography>
            <Typography sx={{ opacity: ".7", fontSize: "10px" }}>3d</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        py={2}
        
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Image
            src="/Assets/spotify.svg"
            alt="view_img"
            width={34}
            height={34}
          />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ color: "#1E0F3B", fontWeight: "bold" }}>UX Designer</Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ opacity: ".7" }}>Spotify</Typography>
            <Typography sx={{ opacity: ".7", fontSize: "10px" }}>3d</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        
          py={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Image
            src="/Assets/spotify.svg"
            alt="view_img"
            width={34}
            height={34}
          />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ color: "#1E0F3B", fontWeight: "bold" }}>UX Designer</Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ opacity: ".7" }}>Spotify</Typography>
            <Typography sx={{ opacity: ".7", fontSize: "10px" }}>3d</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        
        
        py={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Image
            src="/Assets/spotify.svg"
            alt="view_img"
            width={34}
            height={34}
          />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ color: "#1E0F3B", fontWeight: "bold" }}>UX Designer</Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ opacity: ".7" }}>Spotify</Typography>
            <Typography sx={{ opacity: ".7", fontSize: "10px" }}>3d</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        
       
        py={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
     <Typography  sx={{color:"#F9342E",fontWeight:"bold",fontSize:"14px"}}> VIEW ALL</Typography>
      </Grid>
      
    </Box>
  );
};

export default RecentJob;
