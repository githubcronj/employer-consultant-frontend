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

import React from "react";

function ChatComponent() {
  return (
    <div className="container px-5">
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          overflow: "auto",
          position: "relative",
        }}
      >
        <h5
          style={{
            margin: "0px",
            fontSize: "14px",
            fontWeight: 400,
            color: "rgb(153, 153, 153)",
            // float: "right",
            textAlign: "right",
          }}
        >
          John
        </h5>
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
        <h5
          style={{
            margin: "0px",
            fontSize: "14px",
            fontWeight: 400,
            color: "rgb(153, 153, 153)",
          }}
        >
          Elon Musk
        </h5>
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
      </div>
    </div>
  );
}

export default ChatComponent;
