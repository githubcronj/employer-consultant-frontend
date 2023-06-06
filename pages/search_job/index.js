import { Box, Paper } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import JobSearchResultData from '../../Components/SearchJobComp/JobSearchResultData'
import NotificationSideBar from '../../Components/SearchJobComp/NotificationSideBar'
import ProfileSideBar from '../../Components/SearchJobComp/ProfileSideBar'

const SearchJob = () => {
  const { data: session } = useSession()

  const[searchData,setSearchData]= useState({
    jobTitle:'',
    location:''
  })

  const searchOnChangeHandler = (e) =>{
    const {name,value} =e.target;
   setSearchData(prev=>({
    ...prev,
    [name]:value
   }))
  }

  const searchSubmitHandler = ()=>{
alert(JSON.stringify(searchData))
  }
  return (
   <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"column",md:"row"},justifyContent:"space-between",mt:1,padding:"1rem",height:{xs:"auto",sm:"auto",md:"90vh"},justifyContent:"center",background:"#F3F5F8",width:{xs:"100%",sm:"100%",md:"100%"}}}>
   <ProfileSideBar data={session}/>
   <JobSearchResultData searchOnChangeHandler={searchOnChangeHandler} searchSubmitHandler={searchSubmitHandler}/>
   <NotificationSideBar/>
   </Box>
  )
}

export default SearchJob
