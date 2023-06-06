import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AddConsultantModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Image
        src='/Assets/add.svg'
        alt='add'
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
            width: { lg: "50%", sm: "68%", xs: "85%" },
            border: "0px solid #fffff",
            py: 4,
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{ fontSize: "26px", fontWeight: "700", pl: 2, pb: 2 }}
          >
            Add Consultant
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
              id='outlined-basic'
              label='Consultant name or email'
              variant='outlined'
              sx={{ width: "91%" }}
            />
          </Box>
          <Grid
            container
            sx={{
              pr: 2,
              mt: 3,
              gap:{sm:2,xs:1}
            }}
          >
            <Grid item md={6.2} sm={0.3} xs={0.3}></Grid>
            <Grid item md={2.5} sm={3} xs={4.2}>
              <Button
                variant='outlined'
                sx={{ px: 3, py: 2 }}
                style={{
                  color: "#90889E",
                  width: "100%",
                  // width: { lg: '19%', sm: '22%', xs: '90%' },
                  borderRadius: "16px",
                  borderColor: "#90889E",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>

            <Grid item md={2.5} sm={3} xs={4.2}>
              <Button
                variant='contained'
                sx={{ px: 3, py: 2 }}
                style={{
                  backgroundColor: "#1976D2",
                  width: "100%",
                  // width: { lg: '19%', sm: '22%', xs: '90%' },
                  borderRadius: "16px",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default AddConsultantModal;
