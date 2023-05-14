import { colors } from "@mui/material";
import React, { useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useState, useEffect } from "react";

const FormChat = () => {
  const getElement = useRef();
  const sendMessage = () => {
    getElement.current.value;
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "1rem 20px",
          display: "flex",
          position: "relative",
        }}
      >
        <input
          type="text"
          placeholder="Type here..."
          style={{
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
            width: "100%",
            padding: "1rem",
            fontSize: "17px",
            border: "none",
            outline: "none",
          }}
          ref={getElement}
        />

        <button
          onClick={sendMessage}
          style={{
            borderBottomRightRadius: "6px",
            borderTopRightRadius: "6px",
            paddingRight: "25px",
            zIndex: "100",
            color: "black",
            border: "none",
            outline: "none",
            backgroundColor: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          <AiOutlineSend />
        </button>
      </div>
    </>
  );
};

export default FormChat;
