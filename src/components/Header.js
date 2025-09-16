

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// export default function Header() {
//   return (
//     <header className="header">
//       <h2>INVENTORY MANAGEMENT SYSTEM</h2>
//       <div className="user-info">
        
//         {/* <img
//           src="Venturing digitally logo.jpg"
//           alt="user"
//           className="avatar"
//         /> */}
//       </div>
//       <div>
//         <AccountCircleIcon/>
//       </div>

//       <style jsx>{`
//         .header {
//           background: #0c0c0cff;
//            color: white;
//           padding: 12px 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           box-shadow: 0 2px 5px rgba(8, 1, 1, 0.94);
//            background-color: #0a0a0afb; // /* Blue */
//            color: white;             /* White text */
//            padding: 15px 20px;
//            display: flex;
//            justify-content: space-between; /* Space between title & user-info */
//            align-items: center;
//            font-size: 18px;
//            font-weight: bold;
//            text-align:"center";
//         }
//         .user-info {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }


//       .avatar {
          
//           border: 2px solid #ddd;
//           width: 150px;
//           height:auto;
//         }
//       `}</style>
//     </header>
//   );
// }  




'use client';

import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">Dashboard</h1>
      </div>

      <div className="header-right">
        <div className="avatar" onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <User size={18}/>
          
          {isProfileOpen && (
            <div className="avatar-dropdown">
              <a href="#" className="dropdown-item">
                My Profile
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item danger">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;