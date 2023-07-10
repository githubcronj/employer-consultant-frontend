import { Box, Divider, Grid, Icon, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import JobAlertModal from "Components/JobAlertModal/JobAlertModal";
import { useDispatch, useSelector } from "react-redux";
import { jobAlertRequest } from "store/action/getJobAlertAction";
import { deleteJobAlertSuccess } from "store/action/deleteJobAlertAction";
import EditJobAlertModal from "Components/JobAlertModal/EditJobAlertModal";
const JobAlert = () => {
  const [fetchData,setFetchData] = useState(false);
  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();
  const payload = {
    token: finaltoken,
  };
  useEffect(() => {
    dispatch(jobAlertRequest(payload));
  }, []);
  
  useMemo(() => {
    if(fetchData === true){
      dispatch(jobAlertRequest(payload));
    }
  }, [fetchData,dispatch]);

  const [jobAlertdata,setJobAlertData] = useState([])
  const data = useSelector((state) => state.JobAlertReducer?.data);
  useEffect(() => {
    setJobAlertData(data)
  }, [data])
  
 
  const hadleEdit = (id)=>{
    // alert(id,'edit');
  }
const hadleDelete = (id) =>{
  const payloadData={UserId:id,token:finaltoken}
  dispatch(deleteJobAlertSuccess(payloadData))
  setFetchData(true)
}
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
        <JobAlertModal setFetchData={setFetchData} />
      </Stack>

      {jobAlertdata?.map((item, index) => {
        return (
          <Grid container mb={1} px={2} py={2} key={index} sx={{borderBottom:"1px solid #0000005E"}}>
            <Grid item xs={9}>
              <Typography sx={{ fontWeight: "bold" }}>{item.jobName}</Typography>
              <Typography sx={{ opacity: "0.7" }} py={1}>
               {item.location} &#8729; {item.alertFrequency}
              </Typography>
              <Typography sx={{ opacity: "0.7" }}>
              {item.notificationSettings}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              container
              direction="column"
              justifyContent="space-between"
              alignItems="end"
            >
              <Box onClick={()=>hadleEdit(item._id)}>
                <EditJobAlertModal  data={item}/>
              </Box>
              <Box>
                <DeleteIcon onClick={()=>hadleDelete(item._id)} />
              </Box>
            </Grid>
          </Grid>
          
        );
      })}
    </Box>
  );
};

export default JobAlert;
