"use client";

import React from "react";
// import Sidebar from "./components/Sidebar";

import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Sidebar from "@/components/sidebar";


export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        <header className="flex justify-end items-center p-4 shadow-md bg-white">
          <MenuListComposition />
        </header>
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-4">Inventory Management System</h1>
          
        </main>
      </div>
    </div>
  );
}

function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab" || event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        variant="contained"
        ref={anchorRef}
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Dashboard
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "right top" : "right bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
