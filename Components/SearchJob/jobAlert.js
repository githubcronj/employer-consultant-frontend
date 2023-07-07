import { Box, Divider, Grid, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import JobAlertModal from "Components/JobAlertModal/JobAlertModal";
const JobAlert = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        py: "1rem",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        flex: "0.5",
      }}
    >
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
          Job Alert
        </Typography>
        {/* <AddCircleOutlineIcon sx={{ color: "#F9342E" }} fontSize="large" /> */}
        <JobAlertModal/>
      </Stack>
      <Grid container mb={2} px={2}>
        <Grid item xs={9}>
          <Typography sx={{ fontWeight: "bold" }}>UX Designer</Typography>
          <Typography sx={{ opacity: "0.7" }} py={1}>
            California &#8729; Weekly
          </Typography>
          <Typography sx={{ opacity: "0.7" }}>Email & notification</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="end"
        >
          <Box>
            <CreateIcon />
          </Box>
          <Box>
            <DeleteIcon />
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container my={2} px={2}>
        <Grid item xs={9}>
          <Typography sx={{ fontWeight: "bold" }}>UX Designer</Typography>
          <Typography sx={{ opacity: "0.7" }} py={1}>
            California &#8729; Weekly
          </Typography>
          <Typography sx={{ opacity: "0.7" }}>Email & notification</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="end"
        >
          <Box>
            <CreateIcon />
          </Box>
          <Box>
            <DeleteIcon />
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container my={2} px={2}>
        <Grid item xs={9}>
          <Typography sx={{ fontWeight: "bold" }}>UX Designer</Typography>
          <Typography sx={{ opacity: "0.7" }} py={1}>
            California &#8729; Weekly
          </Typography>
          <Typography sx={{ opacity: "0.7" }}>Email & notification</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="end"
        >
          <Box>
            <CreateIcon />
          </Box>
          <Box>
            <DeleteIcon />
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container mb={2} px={2}>
        <Grid item xs={9}>
          <Typography sx={{ fontWeight: "bold" }}>UX Designer</Typography>
          <Typography sx={{ opacity: "0.7" }} py={1}>
            California &#8729; Weekly
          </Typography>
          <Typography sx={{ opacity: "0.7" }}>Email & notification</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="end"
        >
          <Box>
            <CreateIcon />
          </Box>
          <Box>
            <DeleteIcon />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobAlert;
