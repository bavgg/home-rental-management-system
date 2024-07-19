import { ProfileIcon } from "/icons/icons.js";


export function Navbar() {
    let auth = false;
    if( typeof isAuthenticated === 'undefined')  {
        auth = false;
    }else if(isAuthenticated) {
        auth = true;
    }else {
        auth = false;
    }
  return `
          <nav style="display: flex; gap: 10px; justify-content: space-between; padding: 10px; align-items: center; background-color: var(--secondary)">
              <div style="display: flex; gap: 20px;">
                  <h3>House Rental Management System</h3>

                  <a href="/" id="home"> Home </a>
                  <a href="/houses" id="houses"> Houses </a>
                  <a href="/owners" id="owners"> Owners </a>
                  <a href="/tenants" id="tenants"> Tenants </a>
                  <a href="/bookings" id="bookings"> Booking </a>

              </div>
  
              <div style="display: flex; gap: 10px;">

                    ${auth ? 
                        `
                         <div style="display: flex; gap: 10px; align-items: center;">
                            ${ProfileIcon()}
                            <a href=""> Hi ${"username"} </a>
                        </div>
        
                        <div style="display: flex; gap: 10px; align-items: center;">
                            ${ProfileIcon()}
                            <a href="/signout">Sign Out</a>
                        </div>
                        
                        `
                        : `
                        <div style="display: flex; gap: 10px; align-items: center;">
                            ${ProfileIcon()}
                            <a href="/signin">Sign In</a>
                        </div>

                        <div style="display: flex; gap: 10px; align-items: center;">
                            ${ProfileIcon()}
                            <a href="/signup">Sign Up</a>
                        </div>
                        `}
              </div>
          </nav>
  
      `;
}
