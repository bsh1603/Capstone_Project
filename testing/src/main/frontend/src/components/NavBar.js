// import styled from "styled-components";

// const NavBar = () => {
//   return (
//     <NavBarWrapper>
//       <ul>
//         <li>근무 조회</li>
//         <li>팀원 조회</li>
//         <li>재고 관리</li>
//         <li>채팅방 관리</li>
//         <li>프로필 수정</li>
//       </ul>
//     </NavBarWrapper>
//   );
// };

// const NavBarWrapper = styled.div`
//   width: 150px;
//   position: fixed;
//   left: 0;
//   border-color: red;
//   border: 1px solid;
// `;

// const NavList = styled.li`

// `;
// export default NavBar;

import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

import Home from "@mui/icons-material/Home";

import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import { useNavigate } from "react-router-dom";

const data = [
  { icon: <Dns />, label: "근무 조회", navigate: "work" },
  { icon: <People />, label: "팀원 조회", navigate: "member" },
  { icon: <PermMedia />, label: "재고 관리", navigate: "stock" },
  { icon: <Public />, label: "채팅방 관리", navigate: "chatsetting" },
  { icon: <Public />, label: "프로필 수정", navigate: "profile" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <Divider />
            <ListItem
              component="div"
              disablePadding
              onClick={() => navigate("/main")}
            >
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: 1 ? "#1976d2" : null,
                pb: 1 ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: 0,
                  "&:hover, &:focus": { "& svg": { opacity: 1 } },
                }}
              ></ListItemButton>
              {data.map((item) => (
                <ListItemButton
                  key={item.label}
                  sx={{ py: 0, minHeight: 32, color: "white" }}
                  onClick={() => navigate(`/${item.navigate}`)}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
};

export default NavBar;
