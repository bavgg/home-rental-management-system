import { ProfileIcon } from "/icons/icons.js";

export function Navbar() {
  return `
          <nav style="display: flex; gap: 10px; justify-content: space-between; padding: 10px; align-items: center; background-color: var(--secondary)">
              <div style="display: flex; gap: 20px;">
                  <h3>House Rental Management System</h3>
                  <a href="/"> Home </a>
                  <a href="/houses"> Houses </a>
                  <a href="/owners"> Owners </a>
                  <a href="/tenants"> Tenants </a>
                  <a href="/bookings"> Booking </a>
              </div>
  
  
              
  
              <div style="display: flex; gap: 10px;">
                  <div style="display: flex; gap: 10px; align-items: center;">
                      ${ProfileIcon()}
                      <a href=""> Hi ${"username"} </a>
                  </div>
  
                  <div style="display: flex; gap: 10px; align-items: center;">
                      ${ProfileIcon()}
                      <a> Sign Out </a>
                  </div>
              </div>
          </nav>
  
      `;
}
