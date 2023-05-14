import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import FormChat from "./FormChat";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import VoiceChatIcon from "@mui/icons-material/VoiceChat";
import { useState, useEffect } from "react";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function ChatBar(props) {
  // Definisikan array untuk chat
  const chats = [
    {
      message: props.respons,
      icon: <VoiceChatIcon style={{ fontSize: "3rem", color: "#757575" }} />,
    },
    {
      message: "Waifu gw bisa nyata ngga?",
      icon: <PersonPinIcon style={{ fontSize: "3rem", color: "#757575" }} />,
    },
    // Tambahkan chat lainnya jika diperlukan
  ];

  return (
    <>
      {chats.map((chat, index) => (
        <React.Fragment key={index}>
          <CssBaseline />
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "start" : "end",
              gap: "1rem",
              margin: "2rem 1rem",
            }}
          >
            <div className="logo">{chat.icon}</div>
            <div className="cardAI">
              <div
                className=""
                style={{
                  width: "100%",
                  padding: "1rem",
                  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  borderRadius: "7px",
                }}
              >
                <p>{chat.message}</p>
              </div>
            </div>
          </div>
          <AppBar
            position="fixed"
            color="primary"
            sx={{ top: "auto", bottom: 0 }}
          >
            <Toolbar>
              {/* Here */}
              <FormChat responsUser={props.respons} />
            </Toolbar>
          </AppBar>
        </React.Fragment>
      ))}
    </>
  );
}
