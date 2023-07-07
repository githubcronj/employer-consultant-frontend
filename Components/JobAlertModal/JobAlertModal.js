import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { Divider, Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const JobAlertModal = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 617,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: "4px",
    maxHeight: "650px",

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
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button, event) => {
    event.preventDefault();
    setSelectedButton(button);
  };

  const handleSave = () => {
    alert("job save");
    setOpen(false);
  };
  return (
    <div>
      <AddCircleOutlineIcon
        onClick={handleOpen}
        sx={{ color: "#F9342E" }}
        fontSize="large"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: {xs:"block",sm:"flex"}, justifyContent: "space-between" }}>
            <Box
              sx={{
                display:"flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                src="/Assets/cancel.svg"
                alt="cancel"
                onClick={handleClose}
                height={42}
                width={42}
                style={{ paddingRight: "10px" }}
              />
              <p
                style={{
                  color: "#2B373C",
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  "@media (max-width: 768px)": {
                  fontSize: "0.8rem",
  
                },
                }}
              >
                Add Job Alert
              </p>
            </Box>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-2 items-center tracking-wide uppercase my-3"
              style={{
                fontSize: "16px",
                "@media (max-width: 640px)": {
                  fontSize: "14px",
                },
              }}
            >
              <img src="/Assets/check.svg" alt="save" className="h-5 w-5" />
              Save
            </button>
          </Box>
          <Divider />
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} sm={6}>
              <div className="relative">
                <label
                  className={`absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold `}
                  for="fullName"
                >
                  Job name{" "}
                </label>
                <input
                  type="text"
                  id="JobName"
                  placeholder="UX Designer"
                  className={`py-5 px-4 border rounded-[10px] w-full`}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <input
                  type="text"
                  id="Location"
                  placeholder="Location"
                  className={`py-5 px-4 border rounded-[10px] w-full`}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <select
                  id="gender"
                  className={`py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select`}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    backgroundImage: "none",
                    backgroundImage: "url(/Assets/down-arrow.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "95% center",
                    paddingRight: "20px",
                  }}
                  name="personalDetails.gender"
                >
                  <option value="">Job Type</option>
                  <option value="full-time">Full time</option>
                  <option value="part-time">Part time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="temporary">Temporary</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <input
                  type="text"
                  id="Experience"
                  placeholder="Experience"
                  className={`py-5 px-4 border rounded-[10px] w-full`}
                />
              </div>
            </Grid>
            <Grid item xs={12} mt={2}>
              <form>
                <fieldset
                  style={{
                    border: "1px solid #BABEC0",
                    padding: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <legend
                    style={{
                      color: "#1E0F3B",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Salary
                  </legend>
                  <div style={{ textAlign: "center" }}>
                    <button
                      style={{
                        background:
                          selectedButton === "hourly" ? "#5E9AF8" : "#15223214",
                        padding: "13px 15px",
                        color: selectedButton === "hourly" ? "#fff" : "black",
                        borderRadius: ".6rem",
                        fontSize: "14px",
                        width: "100px",
                      }}
                      onClick={(event) => handleButtonClick("hourly", event)}
                    >
                      Hourly
                    </button>
                    <button
                      style={{
                        background:
                          selectedButton === "monthly"
                            ? "#5E9AF8"
                            : "#15223214",
                        padding: "13px 15px",
                        color: selectedButton === "monthly" ? "#fff" : "black",
                        borderRadius: ".6rem",
                        fontSize: "14px",
                        margin: "10px 1rem",
                        width: "100px",
                      }}
                      onClick={(event) => handleButtonClick("monthly", event)}
                    >
                      Monthly
                    </button>
                    <button
                      style={{
                        background:
                          selectedButton === "yearly" ? "#5E9AF8" : "#15223214",
                        padding: "13px 15px",
                        color: selectedButton === "yearly" ? "#fff" : "black",
                        borderRadius: ".6rem",
                        fontSize: "14px",
                        width: "100px",
                      }}
                      onClick={(event) => handleButtonClick("yearly", event)}
                    >
                      Yearly
                    </button>
                  </div>
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    mt={2}
                  >
                    <Grid item xs={6}>
                      <div>
                        <input
                          type="text"
                          id="Min"
                          placeholder="Min"
                          className={`py-5 px-4 border rounded-[10px] w-full`}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <input
                          type="text"
                          id="Max"
                          placeholder="Max"
                          className={`py-5 px-4 border rounded-[10px] w-full`}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </fieldset>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  color: "#1E0F3B",
                  fontWeight: "bold",
                  fontSize: "18px",
                  my: ".8rem",
                }}
              >
                Alert frequency
              </Typography>
              <Box x={{ display: "flex" }}>
                <FormControlLabel control={<Checkbox />} label="Job name" />
                <FormControlLabel control={<Checkbox />} label="Weekly" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <Typography
                sx={{
                  color: "#1E0F3B",
                  fontWeight: "bold",
                  fontSize: "18px",
                  my: ".8rem",
                }}
              >
                Notification Settings
              </Typography>
              <Box x={{ display: "flex" }}>
                <FormControlLabel control={<Checkbox />} label="Email" />
                <FormControlLabel control={<Checkbox />} label="Notification" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Email & Notification"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default JobAlertModal;
