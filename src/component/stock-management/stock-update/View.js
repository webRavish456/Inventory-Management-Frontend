"use client"
export default function ViewStockUpdate({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
      <h4><b>Transaction ID:</b> {viewData.transactionID}</h4>
      <h4><b>Product ID:</b> {viewData.productID}</h4>
      <h4><b>Product name:</b> {viewData.productname}</h4>
      <h4><b>Transaction type:</b> {viewData.transactiontyp}</h4>
      <h4><b>Quantity:</b> {viewData.quantity}</h4>
      <h4><b>Transaction date:</b> {viewData.trscdate}</h4>
      <h4><b>Transaction Time:</b> {viewData.trsctime}</h4>
      <h4><b>Balance stock:</b> {viewData.balstock}</h4>
      <h4><b>Reference no:</b> {viewData.refno}</h4>
 </div>
 );
}
