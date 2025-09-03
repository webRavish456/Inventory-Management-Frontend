
"use client"
export default function ViewStockTransfer({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
      
      <h4><b>Transfer ID:</b> {viewData.TransferID}</h4>
      <h4><b>Product ID:</b> {viewData.productID}</h4>
      <h4><b>product name:</b> {viewData.productname}</h4>
      <h4><b>Quantity transfered:</b> {viewData.qtytransferred}</h4>
      <h4><b> Location ( from):</b> {viewData.fromLocation}</h4>
      <h4><b> Location ( to):</b> {viewData.toLocation}</h4>
      <h4><b>Transfer Date:</b> {viewData.Transferdate}</h4>
      <h4><b>Transfer Time:</b> {viewData.TransferTime}</h4>
 </div>
 );
}