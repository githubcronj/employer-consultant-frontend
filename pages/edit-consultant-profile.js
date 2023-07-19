import { Box, CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";

const EditConsultantProfile = dynamic(
  () => import("Components/EditConsultantProfile/index.js"),
  {
    loading: () => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "#EF4444" }} />
      </Box>
    ),
  }
);

const EditConsultantProfilePage = () => {
  return (
    <div>
      <EditConsultantProfile />
    </div>
  );
};

export default EditConsultantProfilePage;
