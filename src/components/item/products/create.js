"use client";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const CreateProduct = ({onClose,onSave}) => {
    const [formData,setFormData]=useState({
        productCode:"",
        purchasePrice:"",
        sellingPrice:"",
        taxRate:"",
        stock:"",
        warehouseName:"",
    });
// input change handler
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    };
// save handler
const handleSave = ()=>{
    if(onSave){
        onSave(formData);
    }
    onClose();
};

return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Producvt code"
            name="productCode"
            value={formData.productCode}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Purchase price"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Selling  price"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Tax Rate (%)"
            name="taxRate"
            value={formData.taxRate}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Warehouse Name"
            name="warehouseName"
            value={formData.warehouseName}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} display="flex"
        justifyContent="flex-end">
            <Button onClick={onClose} varient="outlined" sx={{mr:1}}>Cancel</Button>
            <Button onClick={handleSave} varient="contained" color="primary">Save</Button></Grid>    </Grid>
);

};
export default CreateProduct;