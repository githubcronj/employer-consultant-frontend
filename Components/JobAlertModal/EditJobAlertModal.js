import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { Divider, Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { postJobAlert } from "store/action/postJobAlertAction";
import CreateIcon from "@mui/icons-material/Create";
import { editJobAlertSuccess } from "store/action/editJobAlertAction";
import { jobAlertRequest } from "store/action/getJobAlertAction";

const EditJobAlertModal = ({ data }) => {
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
  const handleClose = () => {
    setOpen(false);
    setFormData(data);
    setValidationErrors({});
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [formData, setFormData] = useState({
    jobName: "",
    location: "",
    jobType: "",
    experience: "",
    salary: "",
    minSalary: "",
    maxSalary: "",
    alertFrequency: "",
    notificationSettings: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleButtonClick = (button, event) => {
    event.preventDefault();
    setSelectedButton(button);
    setFormData((prevFormData) => ({ ...prevFormData, salary: button }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        salary: data.salary,
      }));
      setSelectedButton(data.salary);
    }
  }, [data]);

  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();
  const payload = {
    token: finaltoken,
    data: formData,
  };
  const payload1 = {
    token: finaltoken,
  };
  const handleSave = () => {
    const errors = {};
    if (!formData.jobName) {
      errors.jobName = "Job name is required";
    }
    if (!formData.location) {
      errors.location = "Location is required";
    }
    if (!formData.jobType) {
      errors.jobType = "Job type is required";
    }
    if (!formData.experience) {
      errors.experience = "Experience is required";
    }
    if (selectedButton === "hourly" && !formData.salary) {
      errors.salary = "Salary is required";
    }
    if (!formData.salary) {
      errors.salary = "Salary is required";
    }
    if (!formData.minSalary) {
      errors.minSalary = "Minimum salary is required";
    }
    if (!formData.maxSalary) {
      errors.maxSalary = "Maximum salary is required";
    }
    if (!formData.alertFrequency) {
      errors.alertFrequency = "Alert frequency is required";
    }
    if (!formData.notificationSettings) {
      errors.notificationSettings = "Notification settings is required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      dispatch(editJobAlertSuccess(payload));
      //   setFetchData(true);
      setValidationErrors({});
      setOpen(false);
      dispatch(jobAlertRequest(payload1));

      setFormData({
        jobName: "",
        location: "",
        jobType: "",
        experience: "",
        salary: "",
        minSalary: "",
        maxSalary: "",
        alertFrequency: "",
        notificationSettings: "",
      });
    }
  };
  return (
    <div>
      <CreateIcon onClick={handleOpen} />
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
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
                style={{ paddingRight: "10px", cursor: "pointer" }}
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
                Edit Job Alert
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
                  name="jobName"
                  placeholder="UX Designer"
                  className={`py-5 px-4 border rounded-[10px] w-full`}
                  value={formData.jobName || ""}
                  onChange={handleChange}
                />
                {validationErrors.jobName && (
                  <Typography variant="caption" color="error">
                    {validationErrors.jobName}
                  </Typography>
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <input
                  type="text"
                  id="Location"
                  name="location"
                  placeholder="Location"
                  className={`py-5 px-4 border rounded-[10px] w-full`}
                  value={formData.location}
                  onChange={handleChange}
                />
                {validationErrors.location && (
                  <Typography variant="caption" color="error">
                    {validationErrors.location}
                  </Typography>
                )}
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
                    cursor: "pointer",
                  }}
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                >
                  <option value="">Job Type</option>
                  <option value="full-time">Full time</option>
                  <option value="part-time">Part time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="temporary">Temporary</option>
                  <option value="internship">Internship</option>
                </select>{" "}
                {validationErrors.jobType && (
                  <Typography variant="caption" color="error">
                    {validationErrors.jobType}
                  </Typography>
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <input
                  type="text"
                  id="Experience"
                  placeholder="Experience"
                  name="experience"
                  className={`py-5 px-4 border rounded-[10px] w-full`}
                  value={formData.experience}
                  onChange={handleChange}
                />{" "}
                {validationErrors.experience && (
                  <Typography variant="caption" color="error">
                    {validationErrors.experience}
                  </Typography>
                )}
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
                  <div style={{ textAlign: "center", margin: "auto" }}>
                    {validationErrors.salary && (
                      <Typography variant="caption" color="error">
                        {validationErrors.salary}
                      </Typography>
                    )}
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
                          name="minSalary"
                          placeholder="Min"
                          className={`py-5 px-4 border rounded-[10px] w-full`}
                          value={formData.minSalary}
                          onChange={handleChange}
                        />
                        {validationErrors.minSalary && (
                          <Typography variant="caption" color="error">
                            {validationErrors.minSalary}
                          </Typography>
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div>
                        <input
                          type="text"
                          id="Max"
                          name="maxSalary"
                          placeholder="Max"
                          className={`py-5 px-4 border rounded-[10px] w-full`}
                          value={formData.maxSalary}
                          onChange={handleChange}
                        />{" "}
                        {validationErrors.maxSalary && (
                          <Typography variant="caption" color="error">
                            {validationErrors.maxSalary}
                          </Typography>
                        )}
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.alertFrequency === "Job name"}
                      onChange={handleChange}
                      name="alertFrequency"
                      value="Job name"
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      disableFocusRipple // Disable focus ripple effect
                      disableRipple // Disable all interaction effects
                    />
                  }
                  label="Job name"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.alertFrequency === "Weekly"}
                      onChange={handleChange}
                      name="alertFrequency"
                      value="Weekly"
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      disableFocusRipple // Disable focus ripple effect
                      disableRipple // Disable all interaction effects
                    />
                  }
                  label="Weekly"
                />
              </Box>
              {validationErrors.alertFrequency && (
                <Typography variant="caption" color="error">
                  {validationErrors.alertFrequency}
                </Typography>
              )}
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.notificationSettings === "Email"}
                      onChange={handleChange}
                      name="notificationSettings"
                      value="Email"
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      disableFocusRipple // Disable focus ripple effect
                      disableRipple // Disable all interaction effects
                    />
                  }
                  label="Email"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.notificationSettings === "Notification"}
                      onChange={handleChange}
                      name="notificationSettings"
                      value="Notification"
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      disableFocusRipple // Disable focus ripple effect
                      disableRipple // Disable all interaction effects
                    />
                  }
                  label="Notification"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        formData.notificationSettings === "Email & Notification"
                      }
                      onChange={handleChange}
                      name="notificationSettings"
                      value="Email & Notification"
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      disableFocusRipple // Disable focus ripple effect
                      disableRipple // Disable all interaction effects
                    />
                  }
                  label="Email & Notification"
                />
              </Box>
              {validationErrors.notificationSettings && (
                <Typography variant="caption" color="error">
                  {validationErrors.notificationSettings}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default EditJobAlertModal;
