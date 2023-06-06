import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobSearchCard from "./JobSearchCard";
import companyLogo from "../../asset/icons/google.svg"
import next from "../../asset/icons/nextIcon.svg"
import prev from "../../asset/icons/prevIcon.svg"
import Image from "next/image";


const JobSlider = ({heading,subTitle,location,flag}) => {
  const jobs = [
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
    {
      title: "UX developer",
      logo: companyLogo,
      duration: "3",
      experience: "5",
      location: "bangalore",
    },
  ];

  const sliderRef = React.useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: ( <Image src={prev} alt="prev" onClick={() => sliderRef.current.slickPrev()} 
    style={{ cursor: "pointer" }}/>
    ),
    nextArrow: (
      <Image src={next} alt="prev" onClick={() => sliderRef.current.slickNext()} 
    style={{ cursor: "pointer" }}/>
    )
  };

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"1rem"}} position="relative" maxWidth="800px" mx="auto">
      <Box sx={{paddingLeft:"1rem"}}>
      <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>{heading} <span style={{fontSize:"18px",fontWeight:"400",color:"#5E5E5E",marginLeft:"5px"}}>{location}</span> </Typography>
      <Typography sx={{fontSize:"12px",fontWeight:"500"}}>{subTitle}</Typography>
      </Box>

      <Box
        position="absolute"
        top="0"
        right="0"
        display="flex"
        justifyContent="space-between"
        gap=".4rem"
        p={0}
        zIndex={1}
      >
        {settings.prevArrow}
        {settings.nextArrow}
      </Box>
      <Slider arrows={false} ref={sliderRef} {...settings}>
        {jobs.map((job, index) => {
          const {logo, duration, title, experience, location} = job;
          return (
            <Box key={index}>
              <JobSearchCard
              flag={flag}
                logo={logo}
                duration={duration}
                title={title}
                experience={experience}
                location={location}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default JobSlider;
