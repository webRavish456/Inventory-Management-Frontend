import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

export default function ViewExpense({ open, onClose, expense }) {
  if (!expense) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>View Expense</DialogTitle>
      <DialogContent dividers>
        <Typography><b>Expense Type:</b> {expense.expenseType}</Typography>
        <Typography><b>Date:</b> {expense.date}</Typography>
        <Typography><b>Payee Name:</b> {expense.paidTo}</Typography>
        <Typography><b>Amount:</b> {expense.amount}</Typography>
        <Typography><b>Transaction Id:</b> {expense.referenceNo}</Typography>
        <Typography><b>Payment Method:</b> {expense.paymentMode}</Typography>
        <Typography><b>Status:</b> {expense.status}</Typography>
      </DialogContent>
    </Dialog>
  );
}