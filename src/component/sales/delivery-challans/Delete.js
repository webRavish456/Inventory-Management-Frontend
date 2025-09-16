
import { Button } from "@mui/material";

export default function DeleteDeliveryChalan({ deleteData, handleDelete, isDeleting, handleClose }) {
  if (!deleteData) return null;

  return (
    <div>
      <p>Are you sure you want to delete <b>{deleteData. salesodrid}</b>?</p>
      <Button onClick={handleClose}>Cancel</Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleDelete(deleteData)}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
    </div>
  );
}