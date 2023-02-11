import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Container, Toolbar } from "@mui/material";

import AppBar from "./AppBar";

const HomeLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
}));

const HomeLayout = ({ children }) => {
  return (
    <HomeLayoutRoot>
      <AppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar />
          {children}
        </Container>
      </Box>
    </HomeLayoutRoot>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
