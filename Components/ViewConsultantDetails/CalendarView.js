import React from "react";
import { Box, Button, Divider, Icon, Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import chat from "../../public/Assets/ChatLogo.png";
import arrow from "../../public/Assets/arrowLeft.png";
import Image from "next/image";
export const CalendarView = () => {
  return (
    <>
      <Typography
        sx={{ color: "#1E0F3B", fontWeight: "bold", paddingTop: "1rem" }}
      >
        Time availability
      </Typography>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar sx={{alignItems:"flex-start"}}/>
        </LocalizationProvider>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Image src={chat} alt="chat" height={54} width={54} />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        my={2}
        sx={{ borderTop: "1px solid #D0D0D6", borderBottom: "1px solid #D0D0D6" }}
      >
        <Typography sx={{ color: "#1E0F3B", fontWeight: "bold" }}>Outsource details</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ px: ".5rem", fontSize: "14px", color: "#F9342E",fontWeight: "bold" }}>
            VIEW
          </Typography>
          <Image src={arrow} alt="chat" height={15} width={7} />
        </Box>
      </Stack>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#F9342E",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
          sx={{ borderRadius: "10px", p: 2, width: "92%" }}
        >
          PAY NOW
        </Button>
        <Button
          variant="outlined"
          color="error"
          style={{ color: "#F9342E", fontWeight: "bold" }}
          sx={{ borderRadius: "10px", p: 2, width: "92%" }}
        >
          PAYMENT HISTORY
        </Button>
      </Box>
    </>
  );
};
