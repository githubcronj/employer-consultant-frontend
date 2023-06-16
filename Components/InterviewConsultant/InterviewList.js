import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
export const listData = [
  {
    id: 1,
    jobTitle: "UX Designer",
    experience1: "Spotify",
    experience2: " 2 yr Exp",
    imageSrc: "/Assets/spotify.svg",
  },
  {
    id: 2,
    jobTitle: "UX Designer",
    experience1: "Spotify",
    experience2: " 2 yr Exp",
    imageSrc: "/Assets/google.svg",
  },
  {
    id: 3,
    jobTitle: "UX Designer",
    experience1: "Spotify",
    experience2: " 2 yr Exp",
    imageSrc: "/Assets/spotify.svg",
  },
  {
    id: 4,
    jobTitle: "UX Designer",
    experience1: "Spotify",
    experience2: " 2 yr Exp",
    imageSrc: "/Assets/spotify.svg",
  },
  {
    id: 5,
    jobTitle: "UX Designer",
    experience1: "Spotify",
    experience2: " 2 yr Exp",
    imageSrc: "/Assets/spotify.svg",
  },
  {
    id: 6,
    jobTitle: "UX Designer",
    experience1: "Spotify",
    experience2: " 2 yr Exp",
    imageSrc: "/Assets/spotify.svg",
  },
];
const InterviewList = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };
  return (
    <Box py={{ xs: 1, lg: 2 }}>
      <Typography
        px={{ xs: 2, md: 2, lg: 3 }}
        mb={2}
        mt={{xs:2,md:1}}
        sx={{ fontSize: "18px", fontWeight: "bold", color: "#1E0F3B" }}
      >
        7 Interview Schedule
      </Typography>
      <Box>
        {listData.map((item) => {
          const isSelected = item.id === selectedItemId;
          return (
            <Box
              py={2}
              px={{ xs: 2, md: 2, lg: 3 }}
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: ".5px solid #EAE9EA",
                borderLeft: isSelected ? "4px solid #5e9af8" : "none",
                background: isSelected
                  ? "linear-gradient(to left, #5e9af800, #5e9af833)"
                  : "transparent",
                // backgroundColor: isSelected ? "blue" : "transparent",
              }}
            >
              <Image
                src={item.imageSrc}
                alt="back button"
                width={46}
                height={46}
                className="cursor-pointer w-10 h-10 rounded-full mr-4"
              />
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.jobTitle}
                </Typography>
                <Typography
                  sx={{ opacity: "0.7", color: "#5E5E5E", py: ".5rem" }}
                >
                  {item.experience1} &#8226; {item.experience2}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default InterviewList;
