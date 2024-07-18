import { ProfileIcon } from "/icons/icons.js";
import { Home } from "../pages/Home.js";
import { Houses } from "../pages/Houses.js";
import { Owners } from "../pages/Owners.js";
import { Tenants } from "../pages/Tenants.js";
import { Bookings } from "../pages/Bookings.js";
import { Signup } from "../pages/Signup.js";

export function Navbar() {
    setTimeout(() => {
        document.addEventListener('click', (event) => {
            const targetID = event.target.id;
            const PageContainer = document.getElementById('page-container');


            if(targetID.includes('home')) {
                PageContainer.innerHTML = Home();
            }
            if(targetID.includes('houses')) {
                PageContainer.innerHTML = Houses();
            }
            if(targetID.includes('owners')) {
                PageContainer.innerHTML = Owners();
            }
            if(targetID.includes('tenants')) {
                PageContainer.innerHTML = Tenants();
            }
            if(targetID.includes('bookings')) {
                PageContainer.innerHTML = Bookings();
            }

            // see details buttons
            if(targetID.includes('Houses')) {
                PageContainer.innerHTML = Houses();
            }
            if(targetID.includes('Owners')) {
                PageContainer.innerHTML = Owners();
            }
            if(targetID.includes('Tenants')) {
                PageContainer.innerHTML = Tenants();
            }
            if(targetID.includes('Booking')) {
                PageContainer.innerHTML = Bookings();
            }

            // signout

            if(targetID.includes('signout')) {
                PageContainer.innerHTML = Houses();
            }
            if(targetID.includes('signup')) {
                PageContainer.innerHTML = Signup();
            }

        });
    }, 0);
  return `
          <nav style="display: flex; gap: 10px; justify-content: space-between; padding: 10px; align-items: center; background-color: var(--secondary)">
              <div style="display: flex; gap: 20px;">
                  <h3>House Rental Management System</h3>

                  <a id="home"> Home </a>
                  <a id="houses"> Houses </a>
                  <a id="owners"> Owners </a>
                  <a id="tenants"> Tenants </a>
                  <a id="bookings"> Booking </a>

              </div>
  
              <div style="display: flex; gap: 10px;">

                  <div style="display: flex; gap: 10px; align-items: center;">
                      ${ProfileIcon()}
                      <a href=""> Hi ${"username"} </a>
                  </div>
  
                  <div style="display: flex; gap: 10px; align-items: center;">
                      ${ProfileIcon()}
                      <a id="signout" href="/signout.php">Sign Out </a>
                  </div>

                  <div style="display: flex; gap: 10px; align-items: center;">
                      ${ProfileIcon()}
                      <a id="signin">Sign In</a>
                  </div>

                  <div style="display: flex; gap: 10px; align-items: center;">
                      ${ProfileIcon()}
                      <a id="signup">Sign Up</a>
                  </div>
              </div>

          </nav>
  
      `;
}
