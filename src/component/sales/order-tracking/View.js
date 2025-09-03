
"use client"
export default function ViewOrderTracking({ viewData }) {
  if (!viewData) return null;
  return (
    <div>
  {/* trackingId, salesodr, currentstus, lstupdtetime, locationupdte */}
      <h4><b>Tracking ID:</b> {viewData.trackingId}</h4>
      <h4><b>sales order:</b> {viewData.salesodr}</h4>
      <h4><b>Current Status:</b> {viewData.currentstus}</h4>
      <h4><b>last updte(Date & time):</b> {viewData.lstupdtetime}</h4>
      <h4><b> Location update:</b> {viewData.locationupdte}</h4>

      
 </div>
 );
}