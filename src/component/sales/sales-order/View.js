
"use client"
export default function ViewSalesOrder({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
        {/* Salesodrid,odrDate,customerId, customercall,Productname,qntyodr,totalcost,discount,deliveryDate */}
      <h4><b>sales order ID:</b> {viewData.Salesodrid}</h4>
      <h4><b>order Date:</b> {viewData.odrDate}</h4>
      <h4><b>customer id:</b> {viewData.customerId}</h4>
       <h4><b>customer call:</b> {viewData.customercall}</h4>
      <h4><b>Productname:</b> {viewData.Productname}</h4>
      <h4><b>quantity order:</b> {viewData.qntyodr}</h4>
      <h4><b>Total cost:</b> {viewData.totalcost}</h4>
      <h4><b>Discount:</b> {viewData.discount}</h4>
      <h4><b>Delivery Date:</b> {viewData.deliveryDate}</h4>  
 </div>
 );
}