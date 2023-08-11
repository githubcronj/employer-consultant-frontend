import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecentJobs,
  fetchRecentJobs,
} from "store/action/recentJobAction";

const RecentSearch = () => {
  const dispatch = useDispatch();

  const [isRecentJob, setIsRecentJob] = useState(false);

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();

  const recentJobs = useSelector(
    (state) => state.recentJobReducer.getRecentJob
  );
  const isGetRecentJob = useSelector(
    (state) => state.recentJobReducer.isGetRecentJob
  );

  useEffect(() => {
    setIsRecentJob(isGetRecentJob);
  }, [isGetRecentJob]);
  // console.log(recentJobs);

  useEffect(() => {
    dispatch(fetchRecentJobs(finaltoken));
  }, []);

  const deleteRecent = () => {
    dispatch(deleteRecentJobs(finaltoken));
  };

  return (
    <Box mt={3} sx={{ background: "#fff", py: "0.5rem", borderRadius: "4px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        py={1}
        px={2}
      >
        <Typography
          sx={{ fontSize: "20px", color: "#1E0F3B", fontWeight: "bold" }}
        >
          Recent Search
        </Typography>
        <Button
          sx={{ py: ".7rem" }}
          startIcon={<ClearIcon />}
          variant="outlined"
          style={{
            color: `${recentJobs.length > 0 ? "black" : "#857D95"}`,
            borderColor: `${recentJobs.length > 0 ? "black" : "#857D95"}`,
            opacity: ".7",
            borderRadius: "10px",
          }}
          onClick={deleteRecent}
        >
          Clear
        </Button>
      </Stack>
      <div>
        {isRecentJob ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // mt: "50%",
            }}
          >
            <CircularProgress sx={{ color: "#EF4444" }} />
          </Box>
        ) : (
          recentJobs?.map((job, index) => {
            return (
              <div key={index}>
                <Grid container p={2}>
                  <Grid item xs={12} sm={9}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                      {/* UX Designer */}
                      {job?.jobTitle}
                    </Typography>
                    <Typography sx={{ opacity: "0.7" }}>
                      {job?.location}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    container
                    direction="row"
                    justifyContent="end"
                    alignItems="center"
                  >
                    <Typography
                      pr={1}
                      sx={{
                        color: "#F9342E",
                        fontWeight: "bold",
                        fontSize: { xs: "12px", sm: "16px" },
                      }}
                    >
                      23 New Job
                    </Typography>
                    <Box>
                      <ArrowForwardIosIcon
                        sx={{
                          color: "#857D95",
                          fontSize: { xs: "12px", sm: "16px" },
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
                {!(index === recentJobs.length - 1) && <Divider />}
              </div>
            );
          })
        )}
      </div>
    </Box>
  );
};

export default RecentSearch;
