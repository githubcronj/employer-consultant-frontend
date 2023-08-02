import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import spotify from "../../asset/icons/spotify.svg";
import ellipse from "../../asset/icons/Ellipse 22.svg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ForumIcon from "@mui/icons-material/Forum";
import LayersIcon from "@mui/icons-material/Layers";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { userNotification } from "store/action/userNotificationAction";
import moment from "moment";

const NotificationSideBar = () => {
  const [showAllItems, setShowAllItems] = useState(false);
  const isNotificationData = useSelector(
    (state) => state?.userNotificationReducer?.isNotificationData
  );
  const notificationData = useSelector(
    (state) => state?.userNotificationReducer?.notificationData
  );
  console.log(notificationData);

  const toggleView = () => {
    setShowAllItems((prevShowAllItems) => !prevShowAllItems);
  };

  const formatDate = (date) => {
    // Use moment().fromNow() to get the relative time from the current date
    const relativeTime = moment(date).fromNow();

    // // Extract the number from the relative time (e.g., "3 days ago" -> "3")
    // const number = parseInt(relativeTime, 10);

    // // Extract the unit from the relative time (e.g., "3 days ago" -> "d")
    // const unit = relativeTime.charAt(relativeTime.length - 1);

    // const daysDifference = moment().diff(moment(date), "days");
    // return `${daysDifference}d`;
    // // Format the date as "3d"
    // return `${number}${unit}`;

    // // Calculate the difference between the input date and the current date in minutes
    // const minutesDifference = moment().diff(moment(date), "minutes");

    // if (minutesDifference >= 43200) {
    //   // If difference is more than or equal to 30 days (30 days * 24 hours * 60 minutes)
    //   // Format the date as "30d" or "31d" or ...
    //   return `${Math.floor(minutesDifference / 1440)}d`;
    // } else if (minutesDifference >= 1440) {
    //   // If difference is more than or equal to 1 day (24 hours * 60 minutes)
    //   // Format the date as "1d" or "2d" or ...
    //   return `${Math.floor(minutesDifference / 1440)}d`;
    // } else if (minutesDifference >= 60) {
    //   // If difference is more than or equal to 1 hour (60 minutes)
    //   // Format the date as "1hr" or "2hr" or ...
    //   return `${Math.floor(minutesDifference / 60)}hr`;
    // } else {
    //   // If difference is less than 1 hour
    //   // Format the date as "1min" or "2min" or ...
    //   return `${minutesDifference}min`;
    // }

    // Calculate the difference between the input date and the current date in minutes
    const minutesDifference = moment().diff(moment(date), "minutes");

    if (minutesDifference >= 43200) {
      // If difference is more than or equal to 30 days (30 days * 24 hours * 60 minutes)
      // Calculate the difference in months
      const monthsDifference = moment().diff(moment(date), "months");

      if (monthsDifference >= 1) {
        // If difference is more than or equal to 1 month
        // Format the date as "1 month ago" or "2 months ago" or ...
        return `${monthsDifference} month${
          monthsDifference > 1 ? "s" : ""
        } ago`;
      } else {
        // If difference is less than 1 month, return "30d" or "31d" or ...
        return `${Math.floor(minutesDifference / 1440)}d`;
      }
    } else if (minutesDifference >= 1440) {
      // If difference is more than or equal to 1 day (24 hours * 60 minutes)
      // Format the date as "1d" or "2d" or ...
      return `${Math.floor(minutesDifference / 1440)}d`;
    } else if (minutesDifference >= 60) {
      // If difference is more than or equal to 1 hour (60 minutes)
      // Format the date as "1hr" or "2hr" or ...
      return `${Math.floor(minutesDifference / 60)}hr`;
    } else if (minutesDifference > 0) {
      // If difference is greater than 0 minutes
      // Format the date as "1min" or "2min" or ...
      return `${minutesDifference}min`;
    } else {
      // If difference is 0, return "just now"
      return `0sec`;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Paper elevation={0} sx={{ padding: "1rem" }}>
        <Box sx={{ paddingBottom: "1rem" }}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Notifications{" "}
              <span
                style={{
                  background: "#F9F6EE",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#F9342E",
                  padding: "0 5px",
                }}
              >
                3
              </span>
            </span>
            <ArrowForwardIosIcon
              fontSize="small"
              style={{ marginLeft: "0.5rem", color: "gray" }}
            />
          </Typography>
        </Box>
        {isNotificationData ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // mt: "50%",
              height: "300px",
            }}
          >
            <CircularProgress sx={{ color: "#EF4444" }} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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
                height: showAllItems ? "600px" : "auto",
                overflowY: "scroll",
              }}
            >
              {notificationData
                .slice(0, showAllItems ? notificationData.length : 4)
                .map((item, index) => (
                  <div key={index}>
                    <Box
                      key={index}
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                        marginBottom: "10px",
                      }}
                    >
                      {/* <Image src={spotify} alt="logo" width="32" height="32" /> */}
                      <Typography
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          fontSize: "13px",
                          color: "#5E5E5E",
                        }}
                      >
                        {/* 3d */}
                        {formatDate(item.createdAt)}
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        {/* 10 new jobs for UX designer in Bengaluru */}
                        {item.message}
                      </Typography>
                    </Box>
                    <Divider />
                  </div>
                ))}
            </Box>
            <Button style={{ color: "red" }} onClick={toggleView}>
              {showAllItems ? "Hide Notification" : "View all"}
            </Button>
          </Box>
        )}
      </Paper>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link href="/consultant-saved-jobs/saved-jobs">
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
              width: "100%",
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
        </Link>
        <Link href="/chat-page">
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
              width: "100%",
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
        </Link>
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
