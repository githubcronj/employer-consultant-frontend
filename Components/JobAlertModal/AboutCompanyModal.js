import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { useRouter } from "next/router";
import chaticon from "../../public/Assets/chaticon.svg";
import bookmark from "../../public/Assets/bookmark.svg";
import { Divider, Grid } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1046,
  maxWidth: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: "600px",
  overflowY: "scroll",
  scrollbarWidth: "thin",
  scrollbarColor: "transparent transparent",
  "&::-webkit-scrollbar": {
    width: "6px",
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "transparent",
  },
  "@media (max-width: 900px)": {
    // top: "70%",
  },
};

const AboutCompanyModal = ({ data, open, setOpen }) => {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const dateString = data?.companyFoundedDate;
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Add padding if needed
  const date = String(dateObject.getDate()).padStart(2, "0"); // Add padding if needed

  const formattedDate = `${date}-${month}-${year}`;
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 3,
              py: 2,
              "@media (max-width: 490px)": {
                flexDirection: "column",
                px: 1,
                alignItems: "flex-start",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/Assets/backbtn.svg"
                alt="back button"
                width={42}
                height={42}
                onClick={handleClose}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1rem",
                }}
              >
                <Image
                  src="/Assets/GoogleProfile.svg"
                  alt="GoogleProfile"
                  width={50}
                  height={50}
                />
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  {data?.companyName}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <img
                src={chaticon.src}
                alt="chat"
                style={{ marginRight: "-3.8rem" }}
              />
              <img src={bookmark.src} alt="bookmark" />
            </Box>
          </Box>
          <Divider />
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                borderRight: { md: "1px #15223214 solid" },
                height: { md: "513px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px #15223214 solid",
                  py: 1,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "150px",
                  }}
                >
                  Company ID
                </Typography>
                <Typography sx={{ color: "#666666" }}>
                  {data?.companyId}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px #15223214 solid",
                  py: 1,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "150px",
                  }}
                >
                  Industry type
                </Typography>
                <Typography sx={{ color: "#666666" }}>
                  {data?.industryType}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px #15223214 solid",
                  py: 1,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "150px",
                  }}
                >
                  Email
                </Typography>
                <Typography sx={{ color: "#666666" }}>{data?.email}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px #15223214 solid",
                  py: 1,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "150px",
                  }}
                >
                  Website URL
                </Typography>
                <Typography sx={{ color: "#666666" }}>
                  {data?.companyWebsiteUrl}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px #15223214 solid",
                  py: 1,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "150px",
                  }}
                >
                  Company Size
                </Typography>
                <Typography sx={{ color: "#666666" }}>
                  {data?.companySize}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px #15223214 solid",
                  py: 1,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "150px",
                  }}
                >
                  Company Location
                </Typography>
                <Typography sx={{ color: "#666666" }}>
                  {data?.companyLocation}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px #15223214 solid",
                  py: 1,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "150px",
                  }}
                >
                  Founded in
                </Typography>
                <Typography sx={{ color: "#666666" }}>
                  {formattedDate}
                </Typography>
              </Box>
            </Grid>
            {/* <Divider
              // className={styles.searchdevider}
              orientation="vertical"
              style={{
                borderWidth: "1.5px",
                height: "600px",
              }}
            /> */}
            <Grid item xs={12} md={6} p={3}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} pb={2}>
                About Company
              </Typography>
              <Typography>{data?.aboutCompany}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default AboutCompanyModal;
