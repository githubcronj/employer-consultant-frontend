import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";

const ProjectType = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "#F9F6EE" }}>
        <TabContext
          value={value}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            sx={{ paddingTop: "1rem" }}
          >
            <Tab
              label="Current Project"
              value="1"
              sx={{
                fontWeight: "600",
                textTransform: "none",
                borderRadius: "45px",
                color: value === "1" ? "#ffffff !important" : "#000000",
                marginRight: "1rem",
              }}
              style={{ backgroundColor: value === "1" ? "#5e9af8" : "#FFF" }}
            />

            <Tab
              label="Finished Project"
              value="2"
              sx={{
                fontWeight: "600",
                textTransform: "none",
                borderRadius: "45px",
                color: value === "2" ? "#ffffff !important" : "#000000",
              }}
              style={{ backgroundColor: value === "2" ? "#5e9af8" : "#FFF" }}
            />
          </TabList>

          <TabPanel value="1">
            <Box sx={{ borderBottom: "1px solid #D0D0D6" }} py={2}>
              <Box> Project Name</Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: "#786F89", fontSize: "14px" }}>3 Task . </Box>
                <Box
                  sx={{ color: "#F9342E", fontSize: "14px", fontWeight: "500" }}
                >
                  50% Completed
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Worked Hours
                </Box>
                <Box sx={{ fontSize: "14px" }}>62 hr</Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Started Date
                </Box>
                <Box sx={{ fontSize: "14px" }}>10/03/2023</Box>
              </Stack>
            </Box>
            <Box sx={{ borderBottom: "1px solid #D0D0D6" }} py={2}>
              <Box> Project Name</Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: "#786F89", fontSize: "14px" }}>3 Task . </Box>
                <Box
                  sx={{ color: "#F9342E", fontSize: "14px", fontWeight: "500" }}
                >
                  50% Completed
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Worked Hours
                </Box>
                <Box sx={{ fontSize: "14px" }}>62 hr</Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Started Date
                </Box>
                <Box sx={{ fontSize: "14px" }}>10/03/2023</Box>
              </Stack>
            </Box>
            <Box sx={{ borderBottom: "1px solid #D0D0D6" }} py={2}>
              <Box> Project Name</Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: "#786F89", fontSize: "14px" }}>3 Task . </Box>
                <Box
                  sx={{ color: "#F9342E", fontSize: "14px", fontWeight: "500" }}
                >
                  50% Completed
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Worked Hours
                </Box>
                <Box sx={{ fontSize: "14px" }}>62 hr</Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Started Date
                </Box>
                <Box sx={{ fontSize: "14px" }}>10/03/2023</Box>
              </Stack>
            </Box>
            <Box sx={{ borderBottom: "1px solid #D0D0D6" }} py={2}>
              <Box> Project Name</Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: "#786F89", fontSize: "14px" }}>3 Task . </Box>
                <Box
                  sx={{ color: "#F9342E", fontSize: "14px", fontWeight: "500" }}
                >
                  50% Completed
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Worked Hours
                </Box>
                <Box sx={{ fontSize: "14px" }}>62 hr</Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Started Date
                </Box>
                <Box sx={{ fontSize: "14px" }}>10/03/2023</Box>
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box sx={{ borderBottom: "1px solid #D0D0D6" }} py={2}>
              <Box> Project Name</Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: "#786F89", fontSize: "14px" }}>3 Task . </Box>
                <Box
                  sx={{ color: "#F9342E", fontSize: "14px", fontWeight: "500" }}
                >
                  50% Completed
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Worked Hours
                </Box>
                <Box sx={{ fontSize: "14px" }}>62 hr</Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Started Date
                </Box>
                <Box sx={{ fontSize: "14px" }}>10/03/2023</Box>
              </Stack>
            </Box>
            <Box sx={{ borderBottom: "1px solid #D0D0D6" }} py={2}>
              <Box> Project Name</Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: "#786F89", fontSize: "14px" }}>3 Task . </Box>
                <Box
                  sx={{ color: "#F9342E", fontSize: "14px", fontWeight: "500" }}
                >
                  50% Completed
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Worked Hours
                </Box>
                <Box sx={{ fontSize: "14px" }}>62 hr</Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Started Date
                </Box>
                <Box sx={{ fontSize: "14px" }}>10/03/2023</Box>
              </Stack>
            </Box>
            <Box sx={{ borderBottom: "1px solid #D0D0D6" }} py={2}>
              <Box> Project Name</Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: "#786F89", fontSize: "14px" }}>3 Task . </Box>
                <Box
                  sx={{ color: "#F9342E", fontSize: "14px", fontWeight: "500" }}
                >
                  50% Completed
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Worked Hours
                </Box>
                <Box sx={{ fontSize: "14px" }}>62 hr</Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Started Date
                </Box>
                <Box sx={{ fontSize: "14px" }}>10/03/2023</Box>
              </Stack>
            </Box>
            <Box sx={{ borderBottom: "1px solid #D0D0D6" }} py={2}>
              <Box> Project Name</Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: "#786F89", fontSize: "14px" }}>3 Task . </Box>
                <Box
                  sx={{ color: "#F9342E", fontSize: "14px", fontWeight: "500" }}
                >
                  50% Completed
                </Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                py={1}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Worked Hours
                </Box>
                <Box sx={{ fontSize: "14px" }}>62 hr</Box>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{ color: "#1E0F3B", fontSize: "14px", fontWeight: "500" }}
                >
                  Started Date
                </Box>
                <Box sx={{ fontSize: "14px" }}>10/03/2023</Box>
              </Stack>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default ProjectType;
