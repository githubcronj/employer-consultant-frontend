import React from "react";
import { Box, Button, Divider, Icon, Stack } from "@mui/material";

import chat from "../../public/Assets/ChatLogo.png";
import arrow from "../../public/Assets/arrowLeft.png";
import Image from "next/image";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export const CalendarView = () => {
  return (
    <>
      <Box>
        <Box sx={{ color: "#1E0F3B", fontWeight: "bold", paddingTop: "1rem" }}>
          Time availability
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box>
          <DateCalendar />

          </Box>
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
          sx={{
            borderTop: "1px solid #D0D0D6",
            borderBottom: "1px solid #D0D0D6",
          }}
        >
          <Box sx={{ color: "#1E0F3B", fontWeight: "bold" }}>
            Outsource details
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                px: ".5rem",
                fontSize: "14px",
                color: "#F9342E",
                fontWeight: "bold",
              }}
            >
              VIEW
            </Box>
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
            sx={{
              borderRadius: "10px",
              p: 2,
              width: "92%",
              marginBottom: "1rem",
            }}
          >
            PAYMENT HISTORY
          </Button>
        </Box>
      </Box>
    </>
  );
};
