import { Box, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { useEffect } from "react";

const CreateLink = () => {
  return (
    <Box className={styles.container}>
      <Typography variant='h3' component='div' sx={{ textAlign: "center" }}>
        Create new Link
      </Typography>
    </Box>
  );
};

export default CreateLink;
