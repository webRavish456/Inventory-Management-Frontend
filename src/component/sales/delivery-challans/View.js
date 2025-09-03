
"use client"
export default function ViewDeliveryChalan({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
      {/* deliveryId, salesodrid, deliveryDate, deliveryAdd, deliverystatus,deliverdby */}
      <h4><b>Transfer ID:</b> {viewData.deliveryId}</h4>
      <h4><b>Product ID:</b> {viewData.salesodrid}</h4>
      <h4><b>product name:</b> {viewData.deliveryDate}</h4>
      <h4><b>Quantity transfered:</b> {viewData.deliveryAdd}</h4>
      <h4><b> Location ( from):</b> {viewData.deliverystatus}</h4>
      <h4><b> Location ( to):</b> {viewData.deliverdby}</h4>
      
 </div>
 );
}