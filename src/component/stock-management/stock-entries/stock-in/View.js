
"use client"
export default function ViewStockEntryin({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
      <h4><b>stock  ID:</b> {viewData.stockId}</h4>
      <h4><b>Product Name:</b> {viewData.productName}</h4>
      <h4><b>product Id:</b> {viewData.supplierId}</h4>
      <h4><b> customer Id:</b> {viewData. date}</h4>
      <h4><b>Payment Status:</b> {viewData.paymentStatus }</h4>
    </div>
  );
}
    