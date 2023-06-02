import { Box } from "@mui/material";
import ViewConsultantDetail from "Components/ViewConsultant";
import React from "react";

const viewConsultant = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F3F5F8", py: 3, px: 3 }}>
        <ViewConsultantDetail />
      </Box>
    </>
  );
};

export default viewConsultant;
