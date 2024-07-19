import { Navbar } from "../layout/Navbar.js";
import { signinTenant, signinOwner } from "../lib/actions.js";

function SigninForm() {
  setTimeout(() => {
    const Form = document.getElementById("form");

    Form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const pwd = document.getElementById("password").value;
      const sign_as = document.getElementById("select").value;

      if (sign_as === "Tenant") {
        signinTenant({ email, pwd }).then((data) => {
          alert(data.message);
        });
      } else if (sign_as === "Owner") {
        signinOwner({ email, pwd }).then((data) => {
          alert(data.message);
          window.location.href = '/';
        });
      }
    });
  }, 0);

  return `
        <form id="form">
            <label>Email</label>
            <input id="email" type="email">

            <label>Password</label>
            <input id="password" type="password">

            <label>Sign In as</label>
            <select id="select">
                <option>Owner</option>
                <option>Tenant</option>
            </select>

            <button type="submit">Sign In</button>
        </form>
    `;
}

export function Signin() {
  return `
        ${SigninForm()}
        `;
}
