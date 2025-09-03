"use client";
import { Button, Grid, Typography } from "@mui/material";
const DeleteProduct=({product,onCancel,onDelete})=>{
    if(!product) return null;
    return(
        <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
                <Typography varient="h6" fontWeight="600" color="error">
                    Delete HSN/SAC Code
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Are you sure you want to delete {""}
                    <b>{product.productName}</b>(Product Category:
                    <b>{product.productCategory}</b>)(HSN/SAC Code:<b>{product.hsn_sacCode}</b>)(GST Rate:<b>{product.gstRate}</b>)?
                </Typography>
            </Grid>
            {/* buttons */}
            <Grid item xs={12}>
            {/* display="flex" */}
            {/* // justifyContent="flex-end" gap={2} */}
                <Button varient="outlined" color="primary" onClick={onCancel}>Cancel</Button>
                <Button variant="contained" color="error" onClick={()=> onDelete(product)}>Delete</Button>
            </Grid>
        </Grid>
    );
};
export default DeleteProduct;