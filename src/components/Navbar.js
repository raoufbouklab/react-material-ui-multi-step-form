import avatar from "../static/images/avatar-icon.png";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Badge,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import { Notifications } from "@mui/icons-material";

const SteledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.90),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.97),
  },
  padding: "3px 15px",
  width: "40%",
}));

const SteledIcons = styled(Toolbar)({});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <SteledToolbar display="flex" justifycontent="space-between">
        <Typography variant="h6">DEMO</Typography>
        <Search>
          <Stack direction="row">
            <SearchIcon
              sx={{ marginTop: "3px", marginRight: "10px", color: "black" }}
            />
            <InputBase
              placeholder="Search..."
              sx={{ width: "100%", color: "black" }}
            />
          </Stack>
        </Search>
        <SteledIcons>
          <Stack spacing={2} direction="row">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar alt="Raouf" src={avatar} sx={{ width: 30, height: 30 }} />
          </Stack>
        </SteledIcons>
      </SteledToolbar>
    </AppBar>
  );
};

export default Navbar;
