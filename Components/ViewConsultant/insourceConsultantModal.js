import React, { useRef } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import Image from "next/image";
const InsourceConsultantModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(true);

  const typographyRef = useRef(null);
  const handleCopyLink = () => {
    const textToCopy = typographyRef.current.textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied: ", textToCopy);
      })
      .catch((error) => {
        console.log("Copy failed: ", error);
      });
  };
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailRegex = /^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  return (
    <>
      <Image
        src='/Assets/insource.svg'
        alt='insource'
        width={54}
        height={54}
        className='cursor-pointer'
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            width: { lg: "50%", sm: "80%", xs: "90%" },
            border: "0px solid #fffff",
            py: 4,
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{ fontSize: "26px", fontWeight: "700", pl: 2, pb: 2 }}
          >
            Insource Consultant
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid #90889E",
              pt: 4,
            }}
          >
            <TextField
              id='email'
              label='Consultant email'
              variant='outlined'
              sx={{ width: "91%" }}
              value={email}
              onChange={handleEmailChange}
              error={!isValidEmail}
              helperText={!isValidEmail && "Invalid email address"}
            />
          </Box>
          <Box sx={{ p: 3, backgroundColor: "#F9F6EE", my: 4, mx:{ sm:5,xs:2} }}>
            <Typography sx={{ fontSize: "16px", color: "#1E0F3B" }}>
              Invite Consultant
            </Typography>
            <Typography
              sx={{ fontSize: "13px", color: "#5E5E5E", opacity: "80%", my: 1 }}
            >
              Share Invite link to join this pool
            </Typography>
            <Box
              sx={{ display: {sm:"flex"}, justifyContent: "space-between", alignItems:"center", mt: 2  }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "#5E5E5E",whiteSpace: "nowrap",
                  textOverflow: "ellipsis", overflow: "hidden"}}
                ref={typographyRef}

              >
                www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjx4aynhev-
              </Typography>
              <Button style={{ color: "#F9342E" }} onClick={handleCopyLink}>
                Copy Link
              </Button>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", pr: 4, mt: 4 }}
          >
            <Button
              variant='outlined'
              sx={{ px: 3, py: 2 }}
              style={{
                color: "#90889E",
                // width: '100%',
                width: { lg: "19%", sm: "22%", xs: "90%" },
                borderRadius: "16px",
                borderColor: "#90889E",
                fontWeight: "600",
                fontSize: "16px",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default InsourceConsultantModal;
