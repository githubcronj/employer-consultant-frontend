import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import spotify from "../../asset/icons/spotify.svg";
import ellipse from "../../asset/icons/Ellipse 22.svg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ForumIcon from "@mui/icons-material/Forum";
import LayersIcon from "@mui/icons-material/Layers";

const NotificationSideBar = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Paper elevation={0} sx={{ padding: "1rem" }}>
        <Box sx={{ paddingBottom: "1rem" }}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              alignItems:"center"
            }}
          >
            <span>
            Notifications{" "}
            <span style={{background:"#F9F6EE",fontWeight:400,fontSize:"14px",color:"#F9342E",padding:"0 5px"}}>3</span>
            </span>
            <ArrowForwardIosIcon
              fontSize="small"
              style={{ marginLeft: "0.5rem", color: "gray" }}
            />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "inline-block",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Image src={spotify} alt="logo" width="32" height="32" />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  fontSize: "10px",
                  color: "#5E5E5E",
                }}
              >
                3d
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                10 new jobs for UX designer in Bengaluru
              </Typography>
            </Box>
            <Divider />
            <Box
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                alignItems:"center",
              }}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Image
                  style={{ position: "relative", zIndex: 1 }}
                  src={spotify}
                  alt="logo"
                  width="50"
                  height="50"
                />
                <Image
                  style={{ position: "absolute", top: 0, left: ".4rem" }}
                  src={ellipse}
                  alt="logo"
                  width="50"
                  height="50"
                />
              </Box>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  fontSize: "10px",
                  color: "#5E5E5E",
                }}
              >
                3d
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                10 new jobs for UX designer in Bengaluru
              </Typography>
            </Box>
            <Divider />
            <Box
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Image src={spotify} alt="logo" width="32" height="32" />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  fontSize: "10px",
                  color: "#5E5E5E",
                }}
              >
                3d
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                10 new jobs for UX designer in Bengaluru
              </Typography>
            </Box>
            <Divider />
            <Box
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                gap: "1rem",
              }}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Image
                  style={{ position: "relative", zIndex: 1 }}
                  src={spotify}
                  alt="logo"
                  width="50"
                  height="50"
                />
                <Image
                  style={{ position: "absolute", top: 0, left: ".4rem" }}
                  src={ellipse}
                  alt="logo"
                  width="50"
                  height="50"
                />
              </Box>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  fontSize: "10px",
                  color: "#5E5E5E",
                }}
              >
                3d
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                10 new jobs for UX designer in Bengaluru
              </Typography>
            </Box>
          </Box>
          <Divider />

          <Button style={{ color: "red" }}>View all</Button>
        </Box>
      </Paper>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button
          style={{
            background: "white",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "13px",
            textTransform: "none",
            fontSize: "16px",
            padding: "0.5rem 1rem",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: ".3rem",
              color: "red",
            }}
          >
            <BookmarkBorderIcon />
            Saved Job{" "}
          </span>
          <ArrowForwardIosIcon
            fontSize="small"
            style={{ marginLeft: "0.5rem", color: "gray" }}
          />
        </Button>
        <Button
          style={{
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "13px",
            textTransform: "none",
            fontSize: "16px",
            padding: "0.5rem 1rem",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: ".3rem",
              color: "red",
            }}
          >
            <ForumIcon />
            Chat{" "}
          </span>
          <ArrowForwardIosIcon
            fontSize="small"
            style={{ marginLeft: "0.5rem", color: "gray" }}
          />
        </Button>

        <Button
          style={{
            background: "#5E9AF7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "13px",
            textTransform: "none",
            fontSize: "16px",
            padding: "0.5rem 1rem",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: ".3rem",
              color: "white",
            }}
          >
            <LayersIcon />
            Project & tasks{" "}
          </span>
          <ArrowForwardIosIcon
            fontSize="small"
            style={{ marginLeft: "0.5rem", color: "gray" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default NotificationSideBar;
