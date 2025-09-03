
"use client"
export default function ViewBatchmng({ viewData }) {
  if (!viewData) return null;
  return (
    <div>

        {/* batchID, productname,productID, batchqty, mftgDate,priceperunit,Suppliername,qualityStatus */}
      <h4><b>Batch ID:</b> {viewData.batchID}</h4>
      <h4><b>Product Name:</b> {viewData.productname}</h4>
      <h4><b>Product ID:</b> {viewData.productID}</h4>
      <h4><b>Batch quantity:</b> {viewData.batchqty}</h4>
      <h4><b>mftgDate Date:</b> {viewData.mftgDate}</h4>
      <h4><b>price per unit:</b> {viewData.priceperunit}</h4>
      <h4><b>Supplier name:</b> {viewData.Suppliername}</h4>
      <h4><b>Quality Status:</b> {viewData.qualityStatus}</h4>
 </div>
 );
}