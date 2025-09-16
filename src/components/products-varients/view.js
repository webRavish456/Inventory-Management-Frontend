import { Grid, Typography } from "@mui/material";

const ViewProduct = ({ product }) => {
  if (!product) return null;

  return (
    <Grid display="flex" flexDirection="column" container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography varient="h6" fontWeight="600">View Product Varient</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography><b>Varient ID:</b>{product.varId}</Typography>
        </Grid>
      <Grid item xs={6}>
        <Typography><b>Parent Product:</b>{product.parentProduct}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>Varient Name:</b>{product.varName}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>Attributes:</b>{product.attributes}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>SKU Code:</b> "₹"{product.sku}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>Bar code:</b> "₹"{product.barCode}</Typography></Grid>
      
      <Grid item xs={6}>
        <Typography><b>Cost Price:</b>{product.costPrice}</Typography></Grid>
      
      <Grid item xs={6}>
        <Typography><b>Selling Price:</b>{product.sellingPrice}</Typography></Grid>
      
      <Grid item xs={6}>
        < Typography><b>Stock:</b>{product.stock}</Typography></Grid>
        <Grid item xs={6}>
        < Typography><b>Reorder Level:</b>{product.reorderLevel}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>Status:</b>{product.status}</Typography></Grid>
      
    </Grid>
  );
};

export default ViewProduct;