import React from "react";
import { Box, Button } from "@mui/material";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clear from "../../public/Assets/clear.svg";
import { fetchJobsRequest } from "store/action/recommandedJobAction";
import styles from "../../styles/LoginPage.module.css";
import UserChat from "Components/ChatComponent/UserChat";
const JobSearchRight = ({
  finaldata,
  handleClick2,
  handleChatClose,
  isOpen,
  setIsOpen,
}) => {
  const [open, setOpen] = useState(false);
  const [expopen, setExpOpen] = useState(false);
  const [jobtypeopen, setJobtypeOpen] = useState(false);
  const [onsiteopen, setOnsiteOpen] = useState(false);
  const [salaryopen, setSalaryOpen] = useState(false);
  const [exp, setExp] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState("");
  const [onsite, setOnsite] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [expData, setExpData] = useState({
    minExp: "",
    maxExp: "",
  });
  const [salaryData, setSalaryData] = useState({
    minSalary: "",
    maxSalary: "",
  });

  const expOnChangeHandler = (e) => {
    const { name, value } = e.target;
    setExpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const salaryOnChangeHandler = (e) => {
    const { name, value } = e.target;
    setSalaryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };

  const finaltoken = getToken();
  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.jobsReducer.GetjobData);

  const toggleDropdown = (dropdownState, setDropdownState) => {
    setOpen(false);
    setExpOpen(false);
    setJobtypeOpen(false);
    setOnsiteOpen(false);
    setSalaryOpen(false);
    setDropdownState(!dropdownState);
  };

  const handleClickOption = (option) => {
    setSelectedOption(option);
    dispatch(fetchJobsRequest(option, finaltoken));
  };
  const handleClickExp = (option) => {
    // setExp(option);
    setJobType("");
    setOnsite("");
    setSelectedOption("");
    dispatch(fetchJobsRequest(expData, finaltoken));
    console.log(expData, "expData");
  };
  const handleClickJobType = (option) => {
    setJobType(option);
    setOnsite("");
    setSelectedOption("");
    dispatch(fetchJobsRequest(option, finaltoken));
  };
  const handleClickonsite = (option) => {
    setOnsite(option);
  };

  const handleClickSalary = (option) => {
    setJobType("");
    setOnsite("");
    setSelectedOption("");
    dispatch(fetchJobsRequest(salaryData, finaltoken));
  };

  const clearClicked = () => {
    setExpData("");
    setJobType("");
    setOnsite("");
    setSelectedOption("");
    setSalaryData("");
    dispatch(fetchJobsRequest(jobData, finaltoken));
  };
  return (
    <List
      sx={{
        width: "auto",
        bgcolor: "background.paper",
        padding: "20px",
        position: "relative",
      }}
      component="nav"
    >
      {isOpen && (
        <div className="absolute right-[2.8rem] top-[15.4rem] ">
          <UserChat handleChatClose={handleChatClose} finaldata={finaldata} />
        </div>
      )}
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Filter</h1>
        <img
          src={clear.src}
          alt="clear"
          style={{ cursor: "pointer" }}
          onClick={clearClicked}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
          paddingTop: "10px",
          cursor: "pointer",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            paddingTop: "10px",
            cursor: "pointer",
          }}
          onClick={() => toggleDropdown(open, setOpen)}
        >
          Date Posted
        </h2>
        {open ? (
          <ExpandLess
            onClick={() => toggleDropdown(open, setOpen)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <ExpandMore
            onClick={() => toggleDropdown(open, setOpen)}
            style={{ cursor: "pointer" }}
          />
        )}
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: selectedOption === "" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickOption("")}
          >
            Any Time
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: selectedOption === "1" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickOption("1")}
          >
            Past 24 hrs
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: selectedOption === "2" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickOption("2")}
          >
            Past Week
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: selectedOption === "3" ? "blue" : "black",
              paddingTop: "10px",

              cursor: "pointer",
            }}
            onClick={() => handleClickOption("3")}
          >
            Past Month
          </p>
        </List>
      </Collapse>
      <hr
        style={{
          border: "1px solid #0F0F113D",
          marginTop: "10px",
        }}
      ></hr>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
          paddingTop: "10px",
          cursor: "pointer",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            paddingTop: "10px",
            cursor: "pointer",
          }}
          onClick={() => toggleDropdown(expopen, setExpOpen)}
        >
          Experience
        </h2>
        {expopen ? (
          <ExpandLess onClick={() => toggleDropdown(expopen, setExpOpen)} />
        ) : (
          <ExpandMore onClick={() => toggleDropdown(expopen, setExpOpen)} />
        )}
      </Box>
      <Collapse in={expopen} timeout="auto" unmountOnExit>
        <List disablePadding>
          {/* <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: exp === "1 year" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickExp("1 year")}
          >
            1 year
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: exp === "2 years" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickExp("2 years")}
          >
            2 years
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: exp === "3 years" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickExp("3 years")}
          >
            3 years
          </p> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative" }}>
              <input
                type="number"
                name="minExp"
                id="minExp"
                placeholder="Minimum Experience"
                required
                style={{
                  display: "block",
                  padding: "3px",
                  border: "1px solid #D8D8DD",
                  borderRadius: "10px",
                  margin: "2px",
                }}
                value={expData.minExp}
                onChange={(e) => expOnChangeHandler(e)}
              />
            </div>

            <div className="relative">
              <input
                type="number"
                name="maxExp"
                id="maxExp"
                placeholder="Maximum Experience"
                required
                style={{
                  display: "block",
                  padding: "3px",
                  border: "1px solid #D8D8DD",
                  borderRadius: "10px",
                  margin: "2px",
                }}
                value={expData.maxExp}
                onChange={(e) => expOnChangeHandler(e)}
              />
            </div>
            <div>
              <Button
                onClick={handleClickExp}
                style={{
                  background: "red",
                  padding: ".55rem 1rem",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </List>
      </Collapse>

      <hr
        style={{
          border: "1px solid #0F0F113D",
          marginTop: "10px",
        }}
      ></hr>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
          paddingTop: "10px",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            paddingTop: "10px",
            cursor: "pointer",
          }}
          onClick={() => toggleDropdown(jobtypeopen, setJobtypeOpen)}
        >
          JobType
        </h2>
        {jobtypeopen ? (
          <ExpandLess
            onClick={() => toggleDropdown(jobtypeopen, setJobtypeOpen)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <ExpandMore
            onClick={() => toggleDropdown(jobtypeopen, setJobtypeOpen)}
            style={{ cursor: "pointer" }}
          />
        )}
      </Box>
      <Collapse in={jobtypeopen} timeout="auto" unmountOnExit>
        <List disablePadding>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "full-time" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickJobType("full-time")}
          >
            Full-Time
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "part-time" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickJobType("part-time")}
          >
            Part-Time
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "contract" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickJobType("contract")}
          >
            Contract
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "freelance" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickJobType("freelance")}
          >
            Freelance
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "temporary" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickJobType("temporary")}
          >
            Temporary
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "internship" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickJobType("internship")}
          >
            Internship
          </p>
        </List>
      </Collapse>
      {/* <hr
        style={{
          border: "1px solid #0F0F113D",
          marginTop: "10px",
        }}
      ></hr> */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
          paddingTop: "10px",
          cursor: "pointer",
          alignItems: "center",
        }}
      >
        <h2
          style={{ fontSize: "20px", fontWeight: "600", paddingTop: "10px" }}
          onClick={() => toggleDropdown(onsiteopen, setOnsiteOpen)}
        >
          On Site/Remote
        </h2>
        {onsiteopen ? (
          <ExpandLess
            onClick={() => toggleDropdown(onsiteopen, setOnsiteOpen)}
          />
        ) : (
          <ExpandMore
            onClick={() => toggleDropdown(onsiteopen, setOnsiteOpen)}
          />
        )}
      </Box> */}
      {/* <Collapse in={onsiteopen} timeout="auto" unmountOnExit>
        <List disablePadding>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: onsite === "On-Site" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickonsite("On-Site")}
          >
            On-Site
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: onsite === "Remote" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClickonsite("Remote")}
          >
            Remote
          </p>
        </List>
      </Collapse> */}
      <hr
        style={{
          border: "1px solid #0F0F113D",
          marginTop: "10px",
        }}
      ></hr>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
          paddingTop: "10px",
          cursor: "pointer",
          alignItems: "center",
        }}
      >
        <h2
          style={{ fontSize: "20px", fontWeight: "600", paddingTop: "10px" }}
          onClick={() => toggleDropdown(salaryopen, setSalaryOpen)}
        >
          Salary range
        </h2>
        {salaryopen ? (
          <ExpandLess
            onClick={() => toggleDropdown(salaryopen, setSalaryOpen)}
          />
        ) : (
          <ExpandMore
            onClick={() => toggleDropdown(salaryopen, setSalaryOpen)}
          />
        )}
      </Box>
      <Collapse in={salaryopen} timeout="auto" unmountOnExit>
        <List disablePadding>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative" }}>
              <input
                type="number"
                name="minSalary"
                id="minSalary"
                placeholder="Minimum Salary "
                required
                style={{
                  display: "bloack",
                  padding: "3px",
                  border: "1px solid #D8D8DD",
                  borderRadius: "10px",
                  margin: "2px",
                }}
                value={salaryData.minSalary}
                onChange={(e) => salaryOnChangeHandler(e)}
              />
            </div>

            <div className="relative">
              <input
                type="number"
                name="maxSalary"
                id="maxSalary"
                placeholder="Maximum Salary "
                required
                style={{
                  display: "bloack",
                  padding: "3px",
                  border: "1px solid #D8D8DD",
                  borderRadius: "10px",
                  margin: "2px",
                }}
                value={salaryData.maxSalary}
                onChange={(e) => salaryOnChangeHandler(e)}
              />
            </div>
            <div>
              <Button
                onClick={handleClickSalary}
                style={{
                  background: "red",
                  padding: ".55rem 1rem",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </List>
      </Collapse>
    </List>
  );
};
export default JobSearchRight;
