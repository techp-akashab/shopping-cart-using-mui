import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../../features/cart/cartSlice";
import { CartProduct } from "../../features/cart/cartSlice";
import {
  Card,
  TextField,
  IconButton,
  Button,
  Stack,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../lang/TranslationKeys";

interface CartCardProps {
  val: CartProduct;
}

const CartCard: React.FC<CartCardProps> = ({ val }) => {
  let product = val.product;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(val.quantity || 1);

  const increaseQuantity = useCallback(() => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(
      changeQuantity({ id: product.id, product, quantity: newQuantity })
    );
  }, [quantity, dispatch, product]);

  const decreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(
        changeQuantity({ id: product.id, product, quantity: newQuantity })
      );
    }
  }, [quantity, dispatch, product]);

  const handleDelete = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <Card
      component="div"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 3,
        width: "100%",
        padding: "1.5rem",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt="Product Image"
        sx={{
          width: 120,
          height: 120,
          objectFit: "contain",
          borderRadius: 1,
        }}
      />

      {/* Product Details */}
      <CardContent sx={{ flex: 1, minWidth: 250 }}>
        <Typography variant="h6" fontWeight="600">
          {product.title}
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="primary" mt={1}>
          ₹{product.price}
        </Typography>

        {/* Quantity Controls */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
          <IconButton color="primary" size="small" onClick={decreaseQuantity}>
            <RemoveIcon />
          </IconButton>
          <TextField
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            size="small"
            inputProps={{
              style: { textAlign: "center", width: 40 },
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            sx={{
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
            }}
          />
          <IconButton color="primary" size="small" onClick={increaseQuantity}>
            <AddIcon />
          </IconButton>
        </Stack>

        {/* Delete Button */}
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          size="small"
          sx={{ mt: 2 }}
          onClick={handleDelete}
        >
          {t(TranslationKeys.DELETE)}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartCard;
