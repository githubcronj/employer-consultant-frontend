import { Box, Grid } from '@mui/material'
import React from 'react'
import JobAlert from 'Components/SearchJob/jobAlert';
import RecentJob from 'Components/SearchJob/recentJob';
import SearchBlock from 'Components/SearchJob/searchBlock';
const samplepage = () => {
  return (
    <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"column",md:"row"},justifyContent:"space-between",mt:1,padding:"1rem",height:{xs:"auto",sm:"auto",md:"90vh"},justifyContent:"center",background:"#F3F5F8",width:{xs:"100%",sm:"100%",md:"100%"}}}>
      <Grid container>
        <Grid item xs={3}>
          <JobAlert/>
        </Grid>
        <Grid item xs={6}>
          <SearchBlock/>
        </Grid>
        <Grid item xs={3}><RecentJob/></Grid>
      </Grid>
    </Box>
  )
}

export default samplepage