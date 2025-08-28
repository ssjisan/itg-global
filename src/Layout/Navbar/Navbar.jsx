import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { services } from "../Navbar/NavConfig";
import { Logo } from "../../Assets/Logo";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
export default function Navbar() {
  const { pathname } = useLocation();
  const { goToTop } = useContext(DataContext);

  // eslint-disable-next-line
  const forBelow1400 = useMediaQuery("(max-width:1400px)");
  // eslint-disable-next-line
  const forBelow1300 = useMediaQuery("(max-width:1300px)");
  const forBelow1100 = useMediaQuery("(max-width:1100px)");
  // Configure Style Start

  const linkStyle = {
    textDecoration: "none",
    color: "#031E21",
  };
  const NavSx = {
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(145, 142, 175, 0.24)",
    background: "rgba(255, 255, 255, 0.48)",
    backdropFilter: "blur(16px)",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  };
  const LogoSx = {
    width: forBelow1100 ? "120px" : "120px",
  };
  const MenuListSx = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };
  const MenuButtonSx = {
    display: "flex",
    height: "40px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
  };

  // Configure Style End

  return (
    <Box sx={NavSx}>
      <Link to="/">
        <Box sx={LogoSx} onClick={goToTop}>
          <Logo />
        </Box>
      </Link>
      <Box sx={{ display: "flex" }}>
        {services.map((data) => {
          return (
            <Box sx={MenuListSx} key={data.id} onClick={goToTop}>
              <Link to={data.link} style={linkStyle}>
                <Box
                  sx={{
                    ...MenuButtonSx,
                    backgroundColor:
                      pathname === data.link && "rgba(0, 174, 96, 0.08)",
                  }}
                >
                  <Typography
                    sx={{
                      color: pathname == data.link && "#00AE60",
                      fontWeight: pathname == data.link && 500,
                    }}
                    variant="subtitle2"
                  >
                    {data.title}
                  </Typography>
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
      <Link to="/schedule">
        <Button size="medium" variant="contained" color="primary">
          Schedule a Call
        </Button>
      </Link>
    </Box>
  );
}
