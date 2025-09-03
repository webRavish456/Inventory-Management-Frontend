"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const EditProduct=(
    {product,onCancel,onUpdate}
)=>{
    


        const [formData, setFormData] = useState({
  productName: product?.productName || "",
  productCategory: product?.productCategory || "",
  hsn_sacCode: product?.hsn_sacCode || "",
  description: product?. description || "",
  gstRate: product?.gstRate || "",
  uqc: product?.uqc || "",
  chapter: product?.chapter || "",
  customDutyCode: product?.customDutyCode || "",
  effectiveDate: product?.effectiveDate|| "",
  remarks: product?.remarks || "",
  status: product?.status || ""
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
                    Edit HSN/SAC Code
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Product Name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                 fullWidth
                  label="Product Category" 
                  name="productCategory"
                   value={formData.productCategory}
                    onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="HSN/SAC Code"
                name="hsn_sacCode"
                value={formData.hsn_sacCode}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="GST Rate(%)"
                name="gstRate"
                value={formData.gstRate}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Unit Quantity Code"
                name="uqc"
                value={formData.uqc}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Chapter/section"
                name="chapter"
                value={formData.chapter}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Custom Duty Code"
                name="customDutyCode"
                value={formData.customDutyCode}
                onChange={handleChange}/>
            </Grid>

            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Effective Date"
                name="effectiveDate"
                value={formData.effectiveDate}
                onChange={handleChange}/>
            </Grid>
            
            <Grid item xs={6}>
                <TextField
                fullWidth
                label="Remarks"
                name="remarks"
                value={formData.remarks}
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