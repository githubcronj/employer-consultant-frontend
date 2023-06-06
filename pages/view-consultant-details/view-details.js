import React from "react";
import Image from "next/image";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import diplay from "../../public/Assets/DisplayPic.png";
import resume from "../../public/Assets/resumeTemplate.png";
import { CalendarView } from "Components/ViewConsultantDetails/CalendarView";
import ProjectType from "Components/ViewConsultantDetails/ProjectType";
const ViewDetails = () => {
  return (
    <div>
      <div className="bg-[#2B373C1C] py-4 px-2 sm:px-4">
        <div className="bg-white py-4">
          <div className="flex justify-between items-center mx-5 sm:mx-9 ">
            <div className="flex items-center gap-x-4 ">
              <Image
                src="/Assets/backbtn.svg"
                alt="back button"
                width={42}
                height={42}
                className="cursor-pointer"
              />
              <Avatar
                alt="Profile"
                src={diplay}
                sx={{ width: 50, height: 50 }}
              />
              <Box>
                <Typography>James Joy</Typography>
                <Typography>
                  James Joy . <span>2 yr Exp</span>
                </Typography>
              </Box>
            </div>
          </div>
          <Divider />
          <Box>
            <Grid container>
              <Grid
                item
                xs={3}
                sx={{ borderRight: "1px solid #D0D0D6" }}
                px={1}
              >
                <CalendarView />
              </Grid>
              <Grid item xs={5}>
                <Image src={resume} alt="resume" width={485} height={683} />
              </Grid>
              <Grid item xs={4}>
                <ProjectType/>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
