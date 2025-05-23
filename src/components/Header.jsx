import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          RKV Travels
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/ipl">
          IPL Section
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
