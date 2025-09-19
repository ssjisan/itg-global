import { Box, Fab } from "@mui/material";

export default function Whatsapp() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 9999,
      }}
    >
      <Fab
        color="success"
        aria-label="whatsapp"
        sx={{
          bgcolor: "#25D366",
          "&:hover": { bgcolor: "#1ebe5b" },
        }}
        onClick={() =>
          window.open(
            "https://wa.me/+8801914474661?text=Hello!%20I%20need%20assistance.",
            "_blank"
          )
        }
      >
        <img src="whatsapp.svg" width="32px" height="32px"/>
      </Fab>
    </Box>
  );
}
