import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import { Button, InputAdornment } from "@mui/material";
import suitCase from "../../asset/icons/suitcase.svg";
import Image from "next/image";
import locationIcon from "../../asset/icons/location.svg";

const SearchJobInput = ({searchOnChangeHandler,searchSubmitHandler}) => {
  return (
    <Paper
      component="form"
      sx={{ p: "1rem", display: "flex", alignItems: "center",width:"100%",flexDirection:{xs:"column",sm:"row"} }}
    >
      <InputBase
      name="jobTitle"
      onChange={searchOnChangeHandler}
        sx={{
          flex: 1,
          alignItems: "center",
          background: "#E7E9E9",
          borderTopLeftRadius: "13px",
          borderBottomLeftRadius: "13px",
          padding:".7rem"
        }}
        placeholder="Job Title"
        startAdornment={
          <InputAdornment sx={{ padding: ".8rem 1rem 1rem 1rem" }}>
            <Image src={suitCase} alt="suitcase" width="19px" height="18px" />
          </InputAdornment>
        }
      />
      <Divider sx={{ height: "7vh" }} orientation="vertical" />
      
      <InputBase
      name="location"
      onChange={searchOnChangeHandler}
        sx={{
          flex: 1,
          alignItems: "center",
          display:"flex",
          background: "#E7E9E9",
          padding:".4rem",
          borderTopRightRadius: "13px",
          borderBottomRightRadius: "13px",
        }}
        placeholder="Location"
        startAdornment={
          <InputAdornment sx={{ padding: ".8rem 1rem 1rem 1rem" }}>
            <Image
              src={locationIcon}
              alt="suitcase"
              width="18" 
              height="18"
            />
          </InputAdornment>
        }
        endAdornment={
        
            <Button onClick={searchSubmitHandler}  style={{background:"red",padding:".55rem 2rem",color:"white",borderRadius:"10px"}}>Search</Button>
        
        }
      />
    </Paper>
  );
};

export default SearchJobInput;
