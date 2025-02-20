import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../../features/cart/cartSlice";
import { RootState } from "../../store/store";
import { Product } from "../../features/products/productTypes";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTranslation } from "react-i18next";
import {
  Card,
  Box,
  TextField,
  IconButton,
  Button,
  Stack,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import { TranslationKeys } from "../../lang/TranslationKeys";
import { useNavigate } from "react-router-dom";
interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [quantity, setQuantity] = useState(
    (cartItems[product.id] && cartItems[product.id].quantity) || 0
  );
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(changeQuantity({ id: product.id, product, quantity }));
    }
  };
  const handleNavigateToDetails = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <Card sx={{ width:{xs:200, md: 250}, p: 2, textAlign: "center" }}>
      <CardMedia
        component="img"
        image={product.image}
        alt="Product Image"
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: "200px",
          objectFit: "contain",
          aspectRatio: "1/1",
          cursor: "pointer",
        }}
        onClick={handleNavigateToDetails}
      />
      <CardContent>
        <Box
          height="2rem"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          <Typography variant="body2" fontWeight="medium" noWrap>
            {product.title}
          </Typography>
        </Box>

        {/* Product Price */}
        <Typography variant="body1" fontWeight="bold" color="primary">
          &#8377;{product.price}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ my: 2 }}
        >
          <IconButton color="primary" size="small" onClick={decreaseQuantity}>
            <RemoveIcon />
          </IconButton>
          <TextField
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            size="small"
            inputProps={{
              style: { textAlign: "center" },
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            sx={{
              width: 50,
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              "& input[type=number]": {
                MozAppearance: "textfield", // For Firefox
              },
            }}
          />
          <IconButton color="primary" size="small" onClick={increaseQuantity}>
            <AddIcon />
          </IconButton>
        </Stack>
        <Stack spacing={1} mt={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="small"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
          >
            {t(TranslationKeys.ADD_TO_CART)}
          </Button>
          <Button variant="contained" color="secondary" fullWidth size="small">
            {t(TranslationKeys.BUY_NOW)}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
