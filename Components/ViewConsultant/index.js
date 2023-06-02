import React from "react";
import ConsultantInfo from "./consultantInfo";
import ConsultantTable from "./consultantTable";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ViewConsultantDetail = () => {
  return (
    <>
      <Box sx={{ my: 3, backgroundColor:'#ffffff' }}>
        <Box sx={{ display:{sm:'flex'}, justifyContent: "space-between", px:2,py:2}}>
          <Box sx={{ display: "flex", alignItems: "center", gap:{sm:4},gap:2 }}>
            <Image
              src='/Assets/backbtn.svg'
              alt='back button'
              width={46}
              height={46}
              className='cursor-pointer'
            />
            <Typography
              variant='h5'
              sx={{ color: "#1E0F3B", fontSize: {sm:"26px"},fontSize:'20px', fontWeight: "bold" }}
            >
              UX Designer
            </Typography>
          </Box>
          <Box sx={{ display: "flex",justifyContent:{sm:'center'}, justifyContent:'flex-end', gap: 5 }}>
            <Image
              src='/Assets/insource.svg'
              alt='insource'
              width={54}
              height={54}
              className='cursor-pointer'
            />
            <Image
              src='/Assets/add.svg'
              alt='add'
              width={54}
              height={54}
              className='cursor-pointer'
            />
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={3.8}>
            <ConsultantInfo />
          </Grid>
          <Grid item xs={12} sm={12} md={8.2}>
            <ConsultantTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ViewConsultantDetail;
