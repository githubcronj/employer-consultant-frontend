import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import suitCase from "../../asset/icons/suitcase.svg";
import Image from "next/image";
import locationIcon from "../../asset/icons/location.svg";
import RecentSearch from "./recentSearch";
import styles from "../../styles/LoginPage.module.css";
const SearchBlock = ({
  searchOnChangeHandler,
  searchSubmitHandler,
  searchData,
}) => {
  return (
    <Box>
      <Box mb={3} sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/Assets/backbtn.svg"
          alt="back button"
          width={38}
          height={38}
          className="cursor-pointer"
          // onClick={handleBox1Click}
        />
        <Typography
          sx={{
            color: "#1E0F3B",
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "10px",
            textAlign: "center",
            width: "100%",
          }}
        >
          Search Job
        </Typography>
      </Box>

      <Paper
        component="form"
        sx={{
          p: "1rem",
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <InputBase
          autoFocus
          name="jobTitle"
          className={`${styles.searchbox1}`}
          value={searchData?.jobTitle}
          onChange={searchOnChangeHandler}
          sx={{
            flex: 1,
            alignItems: "center",
            background: "#E7E9E9",
            // borderTopLeftRadius: "13px",
            // borderBottomLeftRadius: "13px",
            padding: ".7rem",
          }}
          placeholder="Job Title"
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
          onChange={searchOnChangeHandler}
          value={searchData?.location}
          className={`${styles.searchbox2}`}
          sx={{
            flex: 1,
            alignItems: "center",
            display: "flex",
            background: "#E7E9E9",
            padding: ".4rem",
            // borderTopRightRadius: "13px",
            // borderBottomRightRadius: "13px",
          }}
          placeholder="Location"
          startAdornment={
            <InputAdornment sx={{ padding: ".8rem 1rem 1rem 1rem" }}>
              <Image src={locationIcon} alt="suitcase" width="18" height="18" />
            </InputAdornment>
          }
          endAdornment={
            <Button
              className={`${styles.searchbtn}`}
              onClick={searchSubmitHandler}
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
      <RecentSearch />
    </Box>
  );
};

export default SearchBlock;
