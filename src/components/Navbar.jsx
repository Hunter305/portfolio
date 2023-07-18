import {
  CssBaseline,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const drawerWidth = 240;
const navItems = ["About", "Skills", "Project", "Contact"];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Avinash
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <AnchorLink
            key={index}
            href={`#${item}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </AnchorLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}></ThemeProvider>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#ffd72e", color: "#000" }}
        position="fixed"
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", fontWeight: "bold" },
            }}
          >
            {"<Avinash />"}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <AnchorLink key={index} href={`#${item}`} offset="65">
                <Button key={item} sx={{ color: "#000" }}>
                  {item}
                </Button>
              </AnchorLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: ["Bebas Neue", "sans-serif"].join(","),
  },
});

export default Navbar;
