
import { Button } from "@mui/material";

export default function DeleteStockUpdate({ deleteData, handleDelete, isDeleting, handleClose }) {
  if (!deleteData) return null;

  return (
    <div>
      <p>Are you sure you want to delete <b>{deleteData.productname}</b>?</p>
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