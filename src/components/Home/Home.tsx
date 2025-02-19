import { Box, Paper, Typography } from "@mui/material";
import img1 from "../../assets/img1.png";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../lang/TranslationKeys";
function Home() {
  const { t } = useTranslation();
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 3,
        maxWidth: "1000px",
        maxHeight: "350px",
        mx: "auto",
        my: "2rem",
        borderRadius: "2rem",
      }}
    >
      {/* Image Box */}
      <Box
        component="img"
        src={img1}
        alt="Image 1"
        sx={{
          height: "auto",
          width: "25%",
          borderRadius: 2,
        }}
      />

      {/* Text Box */}
      <Box sx={{ flex: 1, textAlign: "center", paddingLeft: 3 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          {t(TranslationKeys.SHOP_BEST)}
          <br />
          THE STORE
        </Typography>
      </Box>
    </Paper>
  );
}

export default Home;
