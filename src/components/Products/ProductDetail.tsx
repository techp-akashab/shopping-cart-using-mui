import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { getProduct } from "../../features/products/productSlice";
import {
  Container,
  Box,
  Typography,
  Stack,
  Rating,
  Divider,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { TranslationKeys } from "../../lang/TranslationKeys";
import { changeQuantity } from "../../features/cart/cartSlice";
function ProductDetail() {
  const { t } = useTranslation();
  const { product } = useSelector((state: RootState) => state.products);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const handleAddToCart = () => {
    if (quantity > 0 && product) {
      dispatch(changeQuantity({ id: product.id, product, quantity }));
    }
  };
  useEffect(() => {
    if (product?.id) {
      setQuantity(cartItems[product.id]?.quantity || 0);
    }
    dispatch(getProduct(Number(id)));
  }, [dispatch, product]);

  return product ? (
    <>
      <Container
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "400px",
            objectFit: "contain",
            aspectRatio: "1/1",
          }}
        />
        <Stack spacing={4} width={"100%"}>
          <Box paddingX={5}>
            <Typography variant="body1" fontWeight="medium" fontSize={30}>
              {product.title}
            </Typography>
          </Box>
          <Box paddingX={5} display="flex" justifyContent="space-between">
            <Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                fontSize={23}
                color="primary"
              >
                &#8377;{product.price}
              </Typography>
              <Typography variant="body1" fontSize={20}>
                Online Exclusive
              </Typography>
            </Box>
            <Box>
              <Box display={"flex"} alignItems={"center"}>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.rating.rate}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </Stack>
                <Typography variant="body1" fontSize={20}>
                  {product.rating.rate}
                </Typography>
              </Box>
              <Typography variant="body1" fontSize={20}>
                {product.rating.count} reviews
              </Typography>
            </Box>
          </Box>
          <Divider variant="inset" />
          <Box paddingX={5}>
            <Typography
              variant="body1"
              fontSize={"1.2rem"}
              marginBottom={"1rem"}
            >
              Description
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
          </Box>
          <Divider variant="inset" />
          <Box paddingX={5}>
            <Typography
              variant="body1"
              fontSize={"1.2rem"}
              marginBottom={"1rem"}
            >
              Category
            </Typography>
            <Typography variant="body1">{product.category}</Typography>
          </Box>
        <Divider variant="inset" />
        </Stack>
      </Container>
      <Box paddingBottom={"3rem"}>
        <Stack
          direction="row"
          spacing={4}
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
        <Stack spacing={4} mt={1}>
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
      </Box>
    </>
  ) : (
    <Box
      height={"80vh"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="body1" fontSize={"2rem"} fontWeight={900}>
        Product with this Id is not available
      </Typography>
    </Box>
  );
}

export default ProductDetail;
