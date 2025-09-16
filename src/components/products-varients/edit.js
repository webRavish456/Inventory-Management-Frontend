"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const EditProduct=(
    {product,onCancel,onUpdate}
)=>{
    


        const [formData, setFormData] = useState({
  sNo: product?.sNo || "",
  varId: product?.varId|| "",
  parentProduct: product?.parentProduct || "",
  varName: product?.varName || "",
  attributes: product?.attributes || "",
  sku: product?.sku || "",
  barCode: product?.barCode || "",
  costPrice: product?.costPrice || "",
  sellingPrice: product?.sellingPrice|| "",
  stock: product?.stock|| "",
  reorderLevel: product?.reorderLevel|| "",
  status: product?.status || "",
});

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:
            e.target.value
        });
    };


    return(
        <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
                <Typography variant="h6" fontWeight="600">
                    Edit Product Varient
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Serial No."
                name="sNo"
                value={formData.sNo}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField 
                fullWidth 
                label="Varient ID"
                 name="varID"
                  value={formData.varId}
                   onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label=" Parent Product"
                name="parentProduct"
                value={formData.parentProduct}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Varient Name"
                name="varName"
                value={formData.varName}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Attributes"
                name="attributes"
                value={formData.attributes}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="SKU Code"
                name="sku"
                value={formData.sku}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Cost  Price"
                name="costPrice"
                value={formData.costPrice}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Selling Price"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}/>
            </Grid>
             <Grid item xs={6}>
                <TextField
                fullWidth
                label="Reorder Level"
                name="reorderLevel"
                value={formData.reorderLevel}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}/>
            </Grid>

            {/* buttons */}
            <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2}>
                <Button variant="outlined" color="error" onClick={onCancel}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={()=>onUpdate(formData)}>Update</Button>
            </Grid>
        </Grid>
    );
};
export default EditProduct;