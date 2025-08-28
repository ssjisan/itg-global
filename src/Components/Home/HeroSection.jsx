import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

export default function HeroSection() {
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const forBelow991 = useMediaQuery("(max-width:991px)");

  const services = [
    {
      img: "digital.svg",
      name: "InsightTech Digital",
      link: "https://digital.insighttechglobal.com/",
    },
    {
      img: "academy.svg",
      name: "InsightTech Academy",
      link: "https://academy.insighttechglobal.com/",
    },
    {
      img: "hosting.svg",
      name: "InsightTech Hosting",
      link: "https://hosting.insighttechglobal.com/",
    },
  ];

  return (
    <Box>
      {/* Logo Section */}
      <Box sx={{ p: "24px 0px" }}>
        <Box
          sx={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            px: { xs: "16px", sm: "24px", md: "24px", lg: "24px" },
          }}
        >
          <img
            src="/logo.svg"
            alt="Logo"
            style={{
              height: forBelow767 ? 32 : forBelow991 ? 40 : 48,
              width: "auto !important",
            }}
          />
        </Box>
      </Box>

      {/* Hero Section */}
      <Container>
        <Stack
          sx={{ mt: { xs: "40px", sm: "80px", md: "80px", lg: "80px" } }}
          gap="16px"
        >
          <Stack
            flexDirection="row"
            gap="8px"
            sx={{
              background: "rgba(255, 255, 255, 0.16)",
              p: "10px",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.32)",
              width: "fit-content",
            }}
          >
            <Typography variant="body1">Welcome</Typography>
            <picture>
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                alt="👋"
                width="16"
                height="16"
              />
            </picture>
          </Stack>

          <Typography variant="h1" sx={{ width: "100%", maxWidth: "660px" }}>
            We’re in a Business to Improve Lives
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Defining ‘Excellence‘ connecting the right dots, locking horns
            against time, exploring into the future of technology with limitless
            possibilities.
          </Typography>
        </Stack>

        {/* Service Cards */}
        <Grid
          container
          spacing={3}
          sx={{
            mt: { xs: "48px", sm: "64px", md: "64px", lg: "64px" },
            mb: "24px",
          }}
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                sx={{
                  p: "16px",
                  background: "#fff",
                  borderRadius: "16px",
                  textDecoration: "none",
                }}
                component="a"
                href={service.link}
              >
                {/* Left: Icon + Text */}
                <Stack flexDirection="row" alignItems="center" gap="16px">
                  <Box>
                    <img src={service.img} alt={service.name} />
                  </Box>
                  <Typography variant="h5" color="#000" width="110px">
                    {/* First part normal, last word bold */}
                    {service.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <Box component="span" sx={{ fontWeight: 400 }}>
                      {service.name.split(" ").slice(-1)}
                    </Box>
                  </Typography>
                </Stack>

                {/* Right: Arrow */}
                <Stack
                  sx={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src="arrow.svg" alt="arrow" />
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
