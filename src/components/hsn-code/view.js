import { Grid, Typography } from "@mui/material";

const ViewProduct = ({ product }) => {
  if (!product) return null;

  return (
    <Grid display="flex" flexDirection="column" container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography varient="h6" fontWeight="600">View HSN/SAC Code</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography><b>Record ID:</b>{product.recordId}</Typography>
        </Grid>
      <Grid item xs={6}>
        <Typography><b>Product Name:</b>{product.productName}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>HSN/SAC Code:</b>{product.hsn_sacCode}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>Description:</b>{product.description}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>GST Rate(%):</b> ₹{product.gstRate}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>Unit Quantity Code:</b> ₹{product.uqc}</Typography></Grid>
      
      <Grid item xs={6}>
        <Typography><b>Chapter/Section:</b>{product.chapter}</Typography></Grid>
      
      <Grid item xs={6}>
        <Typography><b>Custom Duty Code:</b>{product.customDutyCode}</Typography></Grid>
      
      <Grid item xs={6}>
        < Typography><b>Effective Date:</b>{product.effectiveDate}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>Remarks:</b>{product.remarks}</Typography></Grid>
      <Grid item xs={6}>
        <Typography><b>Created Date:</b>{product.createdDate}</Typography></Grid>
        <Grid item xs={6}>
        <Typography><b>Updated Date:</b>{product.updatedDate}</Typography></Grid>
        <Grid item xs={6}>
        <Typography><b>Status:</b>{product.status}</Typography></Grid>
    </Grid>
  );
};

export default ViewProduct;