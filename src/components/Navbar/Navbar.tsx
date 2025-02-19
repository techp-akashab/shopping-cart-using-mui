import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Switch,
} from "@mui/material";
import profile from "../../assets/profile.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../lang/TranslationKeys";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const { i18n, t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLang(null);
  };

  const handleLanguageChange = (lng: string) => {
    changeLanguage(lng);
    handleCloseLanguageMenu();
    handleCloseUserMenu(); // Close the user menu as well
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            variant="square"
            alt="Akash Bheke"
            src={logo}
            sx={{ width: "6rem", display: { xs: "none", md: "flex" } }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>
                  <Link to="/">{t(TranslationKeys.HOME)}</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>
                  <Link to="/products">{t(TranslationKeys.PRODUCT)}</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>
                  <Link to="/cart">{t(TranslationKeys.CART)}</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Avatar
              variant="square"
              alt="Akash Bheke"
              src={logo}
              sx={{ width: "6rem", display: { xs: "flex", md: "none" }, mr: 2 }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t(TranslationKeys.HOME)}
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/products");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t(TranslationKeys.PRODUCT)}
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/cart");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t(TranslationKeys.CART)}
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Akash Bheke" src={profile} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: "center" }}>Dark Mode</Typography>
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode((prev) => !prev)}
                />
              </MenuItem>

              <MenuItem onClick={handleOpenLanguageMenu}>
                <Typography sx={{ textAlign: "center" }}>
                  Change Language
                </Typography>
              </MenuItem>
            </Menu>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-langbar"
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLanguageMenu}
            >
              <MenuItem onClick={() => handleLanguageChange("en")}>
                <Typography sx={{ textAlign: "center" }}>English</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("hi")}>
                <Typography sx={{ textAlign: "center" }}>Hindi</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("fr")}>
                <Typography sx={{ textAlign: "center" }}>French</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("de")}>
                <Typography sx={{ textAlign: "center" }}>German</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("es")}>
                <Typography sx={{ textAlign: "center" }}>Spanish</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("it")}>
                <Typography sx={{ textAlign: "center" }}>Italian</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("ru")}>
                <Typography sx={{ textAlign: "center" }}>Russian</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("pt")}>
                <Typography sx={{ textAlign: "center" }}>Portuguese</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("ja")}>
                <Typography sx={{ textAlign: "center" }}>Japanese</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("zh")}>
                <Typography sx={{ textAlign: "center" }}>Chinese</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
