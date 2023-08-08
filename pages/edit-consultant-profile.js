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
          width: "100%",
        }}
      >
        <CircularProgress sx={{ color: "#EF4444" }} />
      </Box>
    ),
  }
);

const EditConsultantProfilePage = () => {
  return (
    <div className="bg-[#2B373C1C] w-full">
      <EditConsultantProfile />
    </div>
  );
};

export default EditConsultantProfilePage;
