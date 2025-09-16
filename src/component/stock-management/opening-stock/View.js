
"use client"
export default function ViewStock({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
      <h4><b>Product ID:</b> {viewData.productID}</h4>
      <h4><b>Product Name:</b> {viewData.productname}</h4>
      <h4><b>Quantity:</b> {viewData.openingqty}</h4>
      <h4><b>Stock Value:</b> {viewData.openingstockvlu}</h4>
      <h4><b>Date of Entry:</b> {viewData.dofEntry}</h4>
 </div>
 );
}