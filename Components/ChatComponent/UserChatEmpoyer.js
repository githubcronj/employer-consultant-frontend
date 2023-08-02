import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/LoginPage.module.css";
import Image from "next/image";
import Message from "./Message";
import { io } from "socket.io-client";

const UserChatEmployer = ({
  handleChatClose,
  consultantUserId,
  employerUserId,
}) => {
  let socket = useRef(null);
  const ENDPOINT = "ws://localhost:3001";

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messageListRef = useRef(null);

  //   const send = (event) => {
  //     event.preventDefault();
  //     const trimmedValue = inputValue.trim();
  //     if (trimmedValue !== "") {
  //       const newItem = {
  //         ...messages[0],
  //         message: trimmedValue,
  //         value,
  //       };
  //       setMessages((prevArray) => [...prevArray, newItem]);
  //       setInputValue("");
  //     }
  //   };

  useEffect(() => {
    // Scroll to the bottom of the message list after it's updated
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // socket connections
  // console.log(finaldata);
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");
      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
    return null; // Return null if the token is not found or not valid
  };
  const finaltoken = getToken();

  // send messages when clicked
  const sendMessage = () => {
    const inputMessage = document.getElementById("chatInput").value;
    const jsonObject = {
      userId: consultantUserId,
      value: inputMessage,
    };
    socket.current.emit("message", jsonObject);
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: inputMessage, user: true },
    ]);

    setInputValue("");
  };

  useEffect(() => {
    const finalAuthToken = getToken();

    socket.current = io("ws://localhost:3001", {
      transports: ["polling", "websocket"],
      extraHeaders: {
        Authorization: finalAuthToken ? `Bearer ${finalAuthToken}` : null,
      },
    });

    socket.current.on("connect", () => {
      console.log("Connected to the server!");
    });
    socket.current.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });

    socket.current.on(`past-messages-${employerUserId}`, (messageDoc) => {
      console.log(messageDoc[0].messages);
      const mappedMessages = messageDoc[0].messages.map((item) => ({
        message: item.message,
        user: item.user === "employer",
      }));

      setMessages(mappedMessages);
    });

    return () => {
      // socket.current.on("disconnect");
      socket.current.off();
      console.log("socket off");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect");
    socket.current.on(`past-messages-${employerUserId}`, (messageDoc) => {
      console.log(messageDoc[0].messages);
      const mappedMessages = messageDoc[0].messages.map((item) => ({
        message: item.message,
        user: item.user === "employer",
      }));

      //   setMessages(mappedMessages);
      setMessages((prevMessages) => [...prevMessages, ...mappedMessages]);
    });

    return () => {
      socket.current.off();
    };
  }, [messages, employerUserId]);

  return (
    <Box className={styles.appliedChat} sx={{ backgroundColor: "#F9F6EE" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-center",
            alignItems: "center",
          }}
        >
          <Image
            src="/Assets/googleIcon2.svg"
            alt="profile"
            height={30}
            width={30}
            // style={{ paddingBottom: "1rem" }}
          />
          <Typography sx={{ marginLeft: "25px" }}> Google</Typography>
        </Box>
        <Box>
          {" "}
          <Image
            src="/Assets/closebtn.svg"
            alt="profile"
            height={70}
            width={70}
            style={{ cursor: "pointer" }}
            onClick={handleChatClose}
          />
        </Box>
      </Box>
      <hr></hr>
      <div
        className="h-[300px] overflow-y-auto px-[10px] "
        ref={messageListRef}
      >
        {messages.map((item, i) => (
          <Message key={i} user={item.user} message={item.message} />
        ))}
      </div>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "20px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 0px 10px 1px #dddddd",
        }}
      >
        <Box
          className={styles.inputbox}
          sx={{
            display: "flex",
            backgroundColor: "#E7E9E9",
            borderRadius: "5px",
            gap: "5px",
            width: "100%",
            marginRight: "10px",
          }}
        >
          <input
            id="chatInput"
            type="text"
            placeholder="type something"
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage() : null
            }
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete="off"
            className="w-full focus:outline-0 px-[10px] py-[5px] rounded-[5px] h-[45px] "
          />
          {/* <Box sx={{ marginLeft: "auto" }}>
            <Image
              src="/Assets/folder.svg"
              alt="profile"
              height={30}
              width={30}
            />
          </Box> */}
        </Box>
        <Box onClick={sendMessage}>
          <Image src="/Assets/send.svg" alt="profile" height={30} width={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default UserChatEmployer;
