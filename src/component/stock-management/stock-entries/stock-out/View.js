
"use client"
export default function ViewStockEntryout({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
      <h4><b>stock out ID:</b> {viewData.stockoutId}</h4>
      <h4><b>Product Name:</b> {viewData.productname2}</h4>
      <h4><b>product Id:</b> {viewData.productId2}</h4>
      <h4><b> customer Id:</b> {viewData. customerId}</h4>
      <h4><b>Date of stock out:</b> {viewData.dateoutstock}</h4>
      <h4><b>transaction:</b> {viewData.transaction}</h4>
      <h4><b>paystatus:</b> {viewData.paystatus}</h4>
      <h4><b>Status:</b> {viewData.status2}</h4>
    </div>
  );
}
    