"use client";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const CreateProduct = ({onClose,onSave}) => {
    const [formData,setFormData]=useState({
        parentProduct:"",
        varName:"",
        attributes:"",
        sku:"",
        barCode:"",
        costPrice:"",
        sellingPrice:"",
        stock:"",
        reorderLevel:"",
        status:"",
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
            label="Parent Product"
            name="parentProduct"
            value={formData.parentProduct}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Varient Name"
            name="varName"
            value={formData.varName}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Attributes"
            name="attributes"
            value={formData.attributes}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="SKU code"
            name="sku"
            value={formData.sku}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Bar Code"
            name="barCode"
            value={formData.barCode}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Cost Price"
            name="costPrice"
            value={formData.costPrice}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Selling Price"
            name="sellingPrice"
            value={formData.sellingPrice}
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
            label="Reorder Level"
            name="reorderLevel"
            value={formData.reorderLevel}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} display="flex"
        justifyContent="flex-end">
            <Button onClick={onClose} varient="outlined" sx={{mr:1}}>Cancel</Button>
            <Button onClick={handleSave} varient="contained" color="primary">Save</Button></Grid>    </Grid>
);

};
export default CreateProduct;