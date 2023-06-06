import React from "react";
import clear from "../../public/Assets/clear.svg";
import { Box } from "@mui/material";
import List from "@mui/material/List";

import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
const JobSearchRight = () => {
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
  };
  const handleClickExp = (option) => {
    setExp(option);
  };
  const handleClickJobType = (option) => {
    setJobType(option);
  };
  const handleClickonsite = (option) => {
    setOnsite(option);
  };

  const clearClicked = () => {
    setExp("");
    setJobType("");
    setOnsite("");
    setSelectedOption("");
  };
  return (
    <List
      sx={{
        width: "auto",
        bgcolor: "background.paper",
        padding: "20px",
      }}
      component='nav'
    >
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
          alt='clear'
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
          cursor: "pointer" ,
          alignItems: "center",
        }}
      >
        <h2
          style={{ fontSize: "20px", fontWeight: "600", paddingTop: "10px",
          cursor: "pointer"   }}
          onClick={() => toggleDropdown(open, setOpen)}
        >
          Date Posted
        </h2>
        {open ? (
          <ExpandLess onClick={() => toggleDropdown(open, setOpen)} style={{cursor: "pointer" }}/>
        ) : (
          <ExpandMore onClick={() => toggleDropdown(open, setOpen)} style={{cursor: "pointer" }}/>
        )}
      </Box>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <List disablePadding>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: selectedOption === "Any Time" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer" 
               
            }}
            onClick={() => handleClickOption("Any Time")}
          >
            Any Time
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: selectedOption === "Past 24 hrs" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer" 
              
            }}
            onClick={() => handleClickOption("Past 24 hrs")}
          >
            Past 24 hrs
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: selectedOption === "Past Week" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer" 
            }}
            onClick={() => handleClickOption("Past Week")}
          >
            Past Week
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: selectedOption === "Past Month" ? "blue" : "black",
              paddingTop: "10px",
              
              cursor: "pointer" 
            }}
            onClick={() => handleClickOption("Past Month")}
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
          cursor: "pointer" ,
          alignItems: "center",
          cursor: "pointer" 
        }}
      >
        <h2
          style={{ fontSize: "20px", fontWeight: "600", paddingTop: "10px",cursor: "pointer"  }}
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
      <Collapse in={expopen} timeout='auto' unmountOnExit>
        <List disablePadding>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: exp === "1 year" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer" 
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
              paddingTop: "10px",cursor: "pointer" 
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
              paddingTop: "10px",cursor: "pointer" 
            }}
            onClick={() => handleClickExp("3 years")}
          >
            3 years
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
          alignItems: "center",

        }}
      >
        <h2
          style={{ fontSize: "20px", fontWeight: "600", paddingTop: "10px" ,cursor: "pointer" }}
          onClick={() => toggleDropdown(jobtypeopen, setJobtypeOpen)}
        >
          JobType
        </h2>
        {jobtypeopen ? (
          <ExpandLess
            onClick={() => toggleDropdown(jobtypeopen, setJobtypeOpen)}
            style={{cursor: "pointer" }}
          />
        ) : (
          <ExpandMore
            onClick={() => toggleDropdown(jobtypeopen, setJobtypeOpen)}
            style={{cursor: "pointer" }}
          />
        )}
      </Box>
      <Collapse in={jobtypeopen} timeout='auto' unmountOnExit>
        <List disablePadding>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "Full-Time" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer" 
            }}
            onClick={() => handleClickJobType("Full-Time")}
          >
            Full-Time
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "Part-Time" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer" 
            }}
            onClick={() => handleClickJobType("Part-Time")}
          >
            Part-Time
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: jobType === "Contract" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer" 
            }}
            onClick={() => handleClickJobType("Contract")}
          >
            Contract
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
          cursor: "pointer" ,
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
      </Box>
      <Collapse in={onsiteopen} timeout='auto' unmountOnExit>
        <List disablePadding>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "400",
              color: onsite === "On-Site" ? "blue" : "black",
              paddingTop: "10px",
              cursor: "pointer" 
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
              cursor: "pointer" 
            }}
            onClick={() => handleClickonsite("Remote")}
          >
            Remote
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
          cursor: "pointer" ,
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
      <Collapse in={salaryopen} timeout='auto' unmountOnExit>
        <List disablePadding>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative" }}>
              <input
                type='text'
                id='minSalary'
                placeholder='Minimum Salary '
                required
                style={{
                  display: "bloack",
                  padding: "3px",
                  border: "1px solid #D8D8DD",
                  borderRadius: "10px",
                  margin: "2px",
                }}
              />
            </div>

            <div className='relative'>
              <input
                type='text'
                id='maxSalary'
                placeholder='Maximum Salary '
                required
                style={{
                  display: "bloack",
                  padding: "3px",
                  border: "1px solid #D8D8DD",
                  borderRadius: "10px",
                  margin: "2px",
                }}
              />
            </div>
          </div>
        </List>
      </Collapse>
    </List>
  );
};
export default JobSearchRight;
