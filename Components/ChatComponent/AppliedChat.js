import React from "react";
import { ChatBubble, BubbleGroup, Message } from "react-chat-ui";
import styles from "../../styles/LoginPage.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const users = {
  0: "You",
  Mark: "Mark",
  2: "Evan",
};

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        new Message({ id: "Mark", message: "Hey guys!", senderName: "Mark" }),
        new Message({
          id: 2,
          message: "Hey! Evan here. react-chat-ui is pretty dooope.",
          senderName: "Evan",
        }),
      ],
      useCustomBubble: false,
      curr_user: 0,
      isChatOpen: true,
    };
  }

  onPress(user) {
    this.setState({ curr_user: user });
  }

  onMessageSubmit(e) {
    const input = this.message;
    e.preventDefault();
    if (!input.value) {
      return false;
    }
    this.pushMessage(this.state.curr_user, input.value);
    input.value = "";
    return true;
  }

  pushMessage(recipient, message) {
    const prevState = this.state;
    const newMessage = new Message({
      id: recipient,
      message,
      senderName: users[recipient],
    });
    prevState.messages.push(newMessage);
    this.setState(this.state);
  }
  handleCloseChat() {
    this.setState({ isChatOpen: false });
  }

  render() {
    const { isChatOpen } = this.state;
    return (
      <div className="container px-5" >
                      {isChatOpen && ( 
                                         <Box sx={{ backgroundColor: "#F9F6EE", padding: "20px 30px" }} >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 10px",
              borderBottom: "1px solid #000000",
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
                style={{ paddingBottom: "1rem" }}
              />
              <Typography sx={{ marginLeft: "25px", marginTop: "-15px" }}>
                {" "}
                Google
              </Typography>
            </Box>
            <Box>
              {" "}
              <Image
                src="/Assets/closebtn.svg"
                alt="profile"
                height={54}
                width={54}
                style={{ paddingBottom: "1rem", cursor: "pointer" }} onClick={this.handleCloseChat.bind(this)} 

              />
            </Box>
          </Box>

          <BubbleGroup
            messages={[
              new Message({
                id: 0,
                message:
                  "This could mean the end of the bana daquiri as we know it...also life.",
              }),
              new Message({
                id: 0,
                message:
                  "This could mean the end of the bana daquiri as we know it...also life.",
              }),
            ]}
            id={1}
            showSenderName={true}
            senderName={"Elon Musk"}
            style={{ backgroundColor: "#1E0F3B !important" }}
          />
          <BubbleGroup
            messages={[
              new Message({
                id: 1,
                message:
                  "Oh my God! It's out of ice! Like some outer space Motel",
              }),
            ]}
            id={1}
            showSenderName={true}
            senderName={"Elon Musk"}
          />
          <BubbleGroup
            messages={[
              new Message({
                id: 0,
                message:
                  "This could mean the end of the bana daquiri as we know it...also life.",
              }),
            ]}
            id={1}
            showSenderName={true}
            senderName={"Elon Musk"}
          />
        </Box>) }
      
      </div>
    );
  }
}

export default Chat;
