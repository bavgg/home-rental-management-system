import { Navbar } from "../layout/Navbar.js";

function SigninForm() {
    setTimeout(() => {
        
    }, 0);

  return `
        <form>
            <label>Email</label>
            <input type="email">

            <label>Password</label>
            <input type="password">

            <label>Sign In as</label>
            <select>
                <option>Owner</option>
                <option>Tenant</option>
            </select>

            <button>Sign In</button>
        </form>
    `;
}

export function Signin() {
  return `
        ${SigninForm()}
        `;
}
