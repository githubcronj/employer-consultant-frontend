import React from "react";

const Message = ({ user, message }) => {
  if (user) {
    return (
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
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
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
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Message;
