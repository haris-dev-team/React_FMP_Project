import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { navItems } from "../utils/routes_list";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import "./cmp.css"

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const user_auth_state = useSelector((state) => state.user_auth);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const onClick_Handle = (e) => {
    e.preventDefault();
    signOut(auth)
      .then((res) => {
        console.log("User Logged Out");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Blood Bank
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => {
          const { both, auth_required } = item;
          return both === true ||
            auth_required === user_auth_state.user_auth ? (
            <NavLink key={index} to={item.link}>
              {item.label}
            </NavLink>
          ) : null;
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Blood Bank
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div className="flex">
              {navItems.map((item, ind) => {
                const { both, auth_required } = item;
                return both === true ||
                  auth_required === user_auth_state.user_auth ? (
                  <div key={ind}>
                    <NavLink key={ind} className="mx-2" to={item.link}>
                      {item.label}
                    </NavLink>
                  </div>
                ) : null;
              })}
              {user_auth_state.user_auth ? (
                <div>
                  <button  className="mx-2 all" onClick={onClick_Handle}>
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export { Navbar };
