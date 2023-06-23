import React from "react";
import { ChatBubble, BubbleGroup, Message } from "react-chat-ui";

const users = {
  0: "You",
  Mark: "Mark",
  2: "Evan"
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
          senderName: "Evan"
        })
      ],
      useCustomBubble: false,
      curr_user: 0
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
      senderName: users[recipient]
    });
    prevState.messages.push(newMessage);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="container px-5">
                       <BubbleGroup 
          messages={[
            new Message({ id: 0, message: "This could mean the end of the bana daquiri as we know it...also life." }),
            new Message({
              id: 0,
              message: "This could mean the end of the bana daquiri as we know it...also life."
            })
          ]}
          id={1}
          showSenderName={true}
          senderName={"Elon Musk"}
        />
        <BubbleGroup
          messages={[
            
            new Message({
              id: 1,
              message:
                "Oh my God! It's out of ice! Like some outer space Motel"
            })
          ]}
          id={1}
          showSenderName={true}
          senderName={"Elon Musk"}
        />
        <BubbleGroup
         messages={[
                    new Message({ id: 0, message: "This could mean the end of the bana daquiri as we know it...also life." }),
                   
                  ]}
                  id={1}
                  showSenderName={true}
                  senderName={"Elon Musk"}
        />
      
     
      </div>
    );
  }
}

export default Chat;
