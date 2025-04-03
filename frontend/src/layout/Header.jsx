import React, { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import PostAddIcon from "@mui/icons-material/PostAdd";

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if the screen is mobile

  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer

  // Navigation handlers
  const handleHome = () => {
    navigate("/");
    setDrawerOpen(false);
  };

  const handlePosts = () => {
    navigate("/posts");
    setDrawerOpen(false);
  };

  const handleSignIn = () => {
    navigate("/");
    setDrawerOpen(false);
  };

  const handleSignUp = () => {
    navigate("/");
    setDrawerOpen(false);
  };

  const handleProfile = () => {
    navigate("/");
    setDrawerOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  // Toggle drawer
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Post App
        </Typography>

        {/* Hamburger Menu for small screens */}
        {isMobile && (
          <IconButton
            color="inherit"
            onClick={() => toggleDrawer(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer for mobile */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              {/* Home */}
              <ListItem button onClick={handleHome}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>

              {/* Posts */}
              <ListItem button onClick={handlePosts}>
                <ListItemIcon>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary="Posts" />
              </ListItem>

              {/* Profile (if authenticated) */}

              <ListItem button onClick={handleProfile}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>

              {/* Logout (if authenticated) */}

              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>

              {/* Sign In (if not authenticated) */}

              <ListItem button onClick={handleSignIn}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Sign In" />
              </ListItem>

              {/* Sign Up (if not authenticated) */}

              <ListItem button onClick={handleSignUp}>
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <ListItemText primary="Sign Up" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={handleHome}>
              Home
            </Button>
            <Button color="inherit" onClick={handlePosts}>
              Posts
            </Button>

            <Button color="inherit" onClick={handleProfile}>
              Profile
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
