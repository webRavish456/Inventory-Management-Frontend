'use client';

import React, { useState } from 'react';


const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSubmit =()=>{
  setIsProfileOpen(!isProfileOpen)
  }
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title"><b>Dashboard</b></h1>
      </div>
      <div className="header-right">
        <div className="avatar" onClick={ handleSubmit
        //  () => setIsProfileOpen(!isProfileOpen)
        }>
          <img
          src="/user.png"
          alt='user'
          className='user-icon'
          />
          {isProfileOpen && (
            <div className="avatar-dropdown">
              <a href="#" className="dropdown-item">
                My Profile
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item-danger">
                Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
