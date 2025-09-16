import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";

const CommonDialog = ({ open, onClose, dialogTitle, dialogContent }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="common-dialog-title"
      aria-describedby="common-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle
        id="common-dialog-title"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        {dialogTitle}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent id="common-dialog-description">
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
};

export default CommonDialog;