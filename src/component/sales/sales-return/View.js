
"use client"
export default function ViewSalesReturn({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
      <h4><b>Return ID:</b> {viewData.Returnid}</h4>
      <h4><b>sales order ID:</b> {viewData.Salesodrid}</h4>
      <h4><b>Product id:</b> {viewData.Productid}</h4>
      <h4><b>Productname:</b> {viewData.Productname}</h4>
      <h4><b>quantity returned:</b> {viewData.qntyreturned}</h4>
      <h4><b>Returned date:</b> {viewData.Rtrndate}</h4>
      <h4><b>Returned Reason:</b> {viewData.ReturnedReason}</h4>
      <h4><b>Refund amount:</b> {viewData.Refundamount}</h4>  
 </div>
 );
}