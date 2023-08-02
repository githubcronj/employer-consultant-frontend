// import React from "react";
// import { ChatBubble, BubbleGroup, Message } from "react-chat-ui";

// const users = {
//   0: "You",
//   Mark: "Mark",
//   2: "Evan",
// };

// class Chat extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       messages: [
//         new Message({ id: "Mark", message: "Hey guys!", senderName: "Mark" }),
//         new Message({
//           id: 2,
//           message: "Hey! Evan here. react-chat-ui is pretty dooope.",
//           senderName: "Evan",
//         }),
//       ],
//       useCustomBubble: false,
//       curr_user: 0,
//     };
//   }

//   onPress(user) {
//     this.setState({ curr_user: user });
//   }

//   onMessageSubmit(e) {
//     const input = this.message;
//     e.preventDefault();
//     if (!input.value) {
//       return false;
//     }
//     this.pushMessage(this.state.curr_user, input.value);
//     input.value = "";
//     return true;
//   }

//   pushMessage(recipient, message) {
//     const prevState = this.state;
//     const newMessage = new Message({
//       id: recipient,
//       message,
//       senderName: users[recipient],
//     });
//     prevState.messages.push(newMessage);
//     this.setState(this.state);
//   }

//   render() {
//     return (
//       <div className="container px-5">
//         <BubbleGroup
//           messages={[
//             new Message({
//               id: 0,
//               message:
//                 "This could mean the end of the bana daquiri as we know it...also life.",
//             }),
//             new Message({
//               id: 0,
//               message:
//                 "This could mean the end of the bana daquiri as we know it...also life.",
//             }),
//           ]}
//           id={1}
//           showSenderName={true}
//           senderName={"Elon Musk"}
//         />
//         <BubbleGroup
//           messages={[
//             new Message({
//               id: 1,
//               message:
//                 "Oh my God! It's out of ice! Like some outer space Motel",
//             }),
//           ]}
//           id={1}
//           showSenderName={true}
//           senderName={"Elon Musk"}
//         />
//         <BubbleGroup
//           messages={[
//             new Message({
//               id: 0,
//               message:
//                 "This could mean the end of the bana daquiri as we know it...also life.",
//             }),
//           ]}
//           id={1}
//           showSenderName={true}
//           senderName={"Elon Musk"}
//         />
//       </div>
//     );
//   }
// }

// export default Chat;

import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "@emotion/react";
import Message from "./Message";

function ChatComponent({ messages, setMessages }) {
  const ROOT_CSS = css({
    height: 600,
    width: 400,
  });

  const messageListRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the message list after it's updated
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="container px-5 h-[400px] overflow-y-auto "
      ref={messageListRef}
    >
      {/* <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          overflow: "auto",
          position: "relative",
        }}
      >
        <div style={{ overflow: "auto" }}>
          <div
            style={{
              backgroundColor: "rgb(0, 132, 255)",
              borderRadius: "20px",
              margin: "1px auto",
              maxWidth: "425px",
              padding: "8px 14px",
              width: "-webkit-fit-content",
              float: "right",
            }}
          >
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontSize: "16px",
                fontWeight: 300,
                margin: "0px",
              }}
            >
              This could mean the end of the bana daquiri as we know it...also
              life.
            </p>
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          <div
            style={{
              backgroundColor: "rgb(0, 132, 255)",
              borderRadius: "20px",
              margin: "1px auto",
              maxWidth: "425px",
              padding: "8px 14px",
              width: "-webkit-fit-content",
              float: "right",
            }}
          >
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontSize: "16px",
                fontWeight: 300,
                margin: "0px",
              }}
            >
              This could mean the end of the bana daquiri as we know it...also
              life.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          overflow: "auto",
          position: "relative",
        }}
      >
        <div style={{ overflow: "auto" }}>
          <div
            style={{
              backgroundColor: "rgb(204, 204, 204)",
              borderRadius: "20px",
              margin: "1px auto",
              maxWidth: "425px",
              padding: "8px 14px",
              width: "-webkit-fit-content",
              float: "left",
            }}
          >
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontSize: "16px",
                fontWeight: 300,
                margin: "0px",
              }}
            >
              Oh my God! Its out of ice! Like some outer space Motel
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          overflow: "auto",
          position: "relative",
        }}
      >
        <div style={{ overflow: "auto" }}>
          <div
            style={{
              backgroundColor: "rgb(0, 132, 255)",
              borderRadius: "20px",
              margin: "1px auto",
              maxWidth: "425px",
              padding: "8px 14px",
              width: "-webkit-fit-content",
              float: "right",
            }}
          >
            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontSize: "16px",
                fontWeight: 300,
                margin: "0px",
              }}
            >
              This could mean the end of the bana daquiri as we know it...also
              life.
            </p>
          </div>
        </div>
      </div> */}

      {/* <ScrollToBottom> */}
      {messages.map((item, i) => (
        <Message key={i} user={item.user} message={item.message} />
      ))}
      {/* </ScrollToBottom> */}
    </div>
  );
}

export default ChatComponent;
