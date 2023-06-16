import React, { useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobSearchCard from "./JobSearchCard";
import companyLogo from "../../asset/icons/google.svg";
import next from "../../asset/icons/nextIcon.svg";
import prev from "../../asset/icons/prevIcon.svg";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsRequest } from "../../store/action/recommandedJobAction";
import { useRouter } from "next/router";
import Spinner from "./Spinner";

const JobSlider = ({ heading, subTitle, location, flag }) => {
  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const [isdataloaded, setisdataloaded] = useState(false);
  const finaltoken = getToken();
  const jobData = useSelector((state) => state.jobsReducer.GetjobData);
  const isjobData = useSelector((state) => state.jobsReducer.isjobData);
  const isgetdata = useSelector((state) => state.jobsReducer.isgetdata);
  const [recommandvalue, setRecommanddata] = useState([]);
  const recommanddata = useSelector(
    (state) => state?.jobsReducer?.getrecommandjob
  );
  useEffect(() => {
    setRecommanddata(recommanddata);
  }, [recommanddata]);

  useEffect(() => {
    dispatch(fetchJobsRequest(jobData, finaltoken));
  }, [dispatch]);
  useEffect(() => {
    if (isgetdata || isjobData) {
      setisdataloaded(true);
    }
  }, [isgetdata, isjobData]);

  const router = useRouter();

  const nextclick = (id) => {
    router.push(`/job-apply-search/${id}`);
  };

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

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    prevArrow: (
      <Image
        src={prev}
        alt="prev"
        onClick={() => sliderRef.current?.slickPrev()}
        style={{ cursor: "pointer" }}
      />
    ),
    nextArrow: (
      <Image
        src={next}
        alt="prev"
        onClick={() => sliderRef.current?.slickNext()}
        style={{ cursor: "pointer" }}
      />
    ),
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        ".slick-track": {
          marginLeft: 0,
        },
      }}
      position="relative"
      maxWidth="800px"
    >
      <Box sx={{ paddingLeft: "1rem" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {heading}{" "}
          <span
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "#5E5E5E",
              marginLeft: "5px",
            }}
          >
            {location}
          </span>{" "}
        </Typography>
        <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
          {subTitle}
        </Typography>
      </Box>
      <Box
        position={{ sm: "absolute" }}
        top="0"
        right="0"
        display="flex"
        justifyContent="space-between"
        gap=".4rem"
        p={0}
        zIndex={1}
      >
        {settings?.prevArrow}
        {settings?.nextArrow}
      </Box>
      {heading == "Recommended jobs" ? (
        !isdataloaded ? (
          <Spinner />
        ) : (
          <Slider arrows={false} ref={sliderRef} {...settings}>
            {recommandvalue && recommandvalue.length > 0
              ? recommandvalue.map((job, index) => {
                  return (
                    <Box key={index}>
                      <JobSearchCard
                        flag={flag}
                        logo={companyLogo}
                        duration={job.duration}
                        title={job.jobTitle}
                        experience={job.experience}
                        location={job.location}
                        navigate={() => nextclick(job)}
                        id={job._id}
                      />
                    </Box>
                  );
                })
              : jobData.map((job, index) => {
                  return (
                    <Box key={index}>
                      <JobSearchCard
                        flag={flag}
                        logo={companyLogo}
                        duration={job.duration}
                        title={job.jobTitle}
                        experience={job.experience}
                        location={job.location}
                        navigate={nextclick}
                        id={job._id}
                      />
                    </Box>
                  );
                })}
          </Slider>
        )
      ) : (
        <Slider arrows={false} ref={sliderRef} {...settings}>
          {jobs.map((job, index) => {
            const { logo, duration, title, experience, location } = job;
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
      )}
    </Box>
  );
};

export default JobSlider;
