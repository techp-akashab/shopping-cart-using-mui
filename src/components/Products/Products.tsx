import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProducts } from "../../features/products/productSlice";
import ProductCard from "./ProductCard";
import { Box, Grid2, Skeleton } from "@mui/material";

function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Grid2 container spacing={2} marginTop="2rem" justifyContent="space-evenly">
      {products ? (
        products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <>
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ width: { xs: 200, md: 250 } }}
              height={450}
            />
          </>
        )
      ) : (
        <Box>No products</Box>
      )}
    </Grid2>
  );
}

export default Products;
