import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { Button, InputAdornment } from "@mui/material";
import suitCase from "../../asset/icons/suitcase.svg";
import Image from "next/image";
import locationIcon from "../../asset/icons/location.svg";
import styles from "../../styles/LoginPage.module.css";
const SearchJobInput = ({
  isInputFocused,
  handleBox1Click,
  showBox1,
  searchOnChangeHandler,
  searchSubmitHandler,
  searchData,
}) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "1rem",
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: { xs: "column", sm: "row" },
        backdropFilter: isInputFocused ? "blur(5px)" : "none",
      }}
    >
      <InputBase
        name="jobTitle"
        className={`${styles.searchbox1}`}
        // onClick={handleBox1Click}
        onChange={searchOnChangeHandler}
        value={searchData?.jobTitle}
        sx={{
          flex: 1,
          alignItems: "center",
          background: "#E7E9E9",
          padding: ".7rem",
          cursor: "pointer",
          width: "100%",
        }}
        placeholder="Job Title"
        autoComplete="off"
        startAdornment={
          <InputAdornment sx={{ padding: ".8rem 1rem 1rem 1rem" }}>
            <Image src={suitCase} alt="suitcase" width="19px" height="18px" />
          </InputAdornment>
        }
      />
      <Divider
        className={styles.searchdevider}
        orientation="vertical"
        style={{
          borderWidth: "1.5px",
          height: "55px",
        }}
      />

      <InputBase
        name="location"
        // onClick={handleBox1Click}
        onChange={searchOnChangeHandler}
        className={`${styles.searchbox2} p-[0.7rem] sm:p-[0.4rem] `}
        value={searchData?.location}
        sx={{
          flex: 1,
          alignItems: "center",
          display: "flex",
          background: "#E7E9E9",
          // padding: { xs: "0.7rem", lg: "0.4rem" },
          cursor: "pointer",
          width: "100%",
        }}
        placeholder="Location"
        autoComplete="off"
        startAdornment={
          <InputAdornment sx={{ padding: ".8rem 1rem 1rem 1rem" }}>
            <Image src={locationIcon} alt="suitcase" width="25" height="25" />
          </InputAdornment>
        }
        endAdornment={
          <Button
            className={`${styles.searchbtn}`}
            // onClick={handleBox1Click}
            onClick={() => {
              if (searchData.jobTitle || searchData.location) {
                searchSubmitHandler();
              }
            }}
            style={{
              background: "red",
              padding: ".55rem 2rem",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Search
          </Button>
        }
      />
      <Button
        className={`${styles.searchbtn2}`}
        // onClick={handleBox1Click}
        onClick={searchSubmitHandler}
        style={{
          background: "red",
          padding: ".55rem 1rem",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchJobInput;
