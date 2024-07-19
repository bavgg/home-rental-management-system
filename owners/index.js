import { Navbar } from "../layout/Navbar.js";
import { Owners } from '/components-main/Owners.js'

function Main() {
  return `

        ${Navbar()}
        <main style="display: flex;  gap: 20px; justify-content: center;">
            <div id="page-container" style="margin-top: 50px;">
                ${Owners()}
            </div>            
        </main>
    `;
}

const body = document.querySelector("body");
body.innerHTML = Main();
