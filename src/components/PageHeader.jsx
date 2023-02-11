import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const PageHeader = ({ title, children }) => (
  <>
    <Box>
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
    </Box>
    {children}
  </>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageHeader;
