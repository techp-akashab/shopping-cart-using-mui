import CartCard from "./CartCard.js";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.js";
import { Container, Grid2, Button } from "@mui/material";
import { TranslationKeys } from "../../lang/TranslationKeys.js";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Cart = () => {
  const { t } = useTranslation();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  return Object.keys(cartItems).length > 0 ? (
    <Grid2 container spacing={4} marginTop="2rem">
      {Object.entries(cartItems).map(([key, val]) => (
        <CartCard key={key} val={val} />
      ))}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="small"
        sx={{ marginBottom: "2rem" }}
      >
        {t(TranslationKeys.PROCEED_TO_BUY)}
      </Button>
    </Grid2>
  ) : (
    <Container sx={{ textAlign: "center", marginY: "40vh" }}>
      <Trans
        i18nKey={TranslationKeys.NO_PRODUCT}
        components={{
          shop_link: (
            <Link
              style={{ color: "blue", textDecoration: "underline" }}
              to="/products"
            />
          ),
        }}
      />
    </Container>
  );
};

export default Cart;
