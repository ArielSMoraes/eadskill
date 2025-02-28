import BaseProductTable from "@/components/BaseProductTable/BaseProductTable";
import { ApiRequest } from "@/service/HttpClient";
import { Typography } from "@mui/material";

export default async function ProductTablet() {
  const products = await ApiRequest('products')
  
  return <>
    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
      Produtos
    </Typography>
    <BaseProductTable products={products} />
  </>
}
