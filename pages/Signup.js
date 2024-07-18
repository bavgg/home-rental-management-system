import { Navbar } from "../layout/Navbar.js";
import { createTenant } from '/lib/actions.js';

function OwnerInput() {
    return `
                <input id="fullname" type="text" placeholder="Name">
                
                <input id="email" type="email" placeholder="Email">
                
                <input id="password" type="password" placeholder="Password">
                
                <input id="mobile" type="number" placeholder="Mobile No">
                
                <input id="occupation" type="text" placeholder="Occupation">
                
                <input id="houses" type="number" placeholder="Number of Houses">
                
                <input id="country" type="text" placeholder="Country">
                
                <input id="state" type="text" placeholder="State">
                
                <input id="city" type="text" placeholder="City">
                
                <input id="address" type="text" placeholder="Address">

                <button>Sign Up</button>
    `
}

function TenantInput() {
    return `
                <input id="firstname" type="text" placeholder="First Name">
                
                <input id="lastname" type="text" placeholder="Last Name">
                
                <input id="email" type="email" placeholder="Email">
                
                <input id="password" type="password" placeholder="Password">
                
                <input id="mobile" type="number" placeholder="Mobile No">
                
                <input id="occupation" type="text" placeholder="Occupation">

                <button>Sign Up</button>
    `
}

function SignUpForm() {
    setTimeout(() => {
        const Select = document.getElementById('select');
        const FormContainer = document.getElementById('form-container');


        Select.addEventListener('click', (event) => {
            const clickedEl = event.target.value;

            if(clickedEl === 'Owner') {
                FormContainer.innerHTML = OwnerInput();
            }else if(clickedEl === 'Tenant') {
                FormContainer.innerHTML = TenantInput();
            }
            
        })

        FormContainer.addEventListener('submit', (event) => {
            event.preventDefault();
            const option = document.getElementById('select').value;

            if(option === 'Tenant'){
                const firstname = document.getElementById('firstname').value;
                const lastname = document.getElementById('lastname').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const mobile = document.getElementById('mobile').value;
                const occupation = document.getElementById('occupation').value;
                console.log({firstname, lastname, email, password, mobile, occupation});
                createTenant({firstname, lastname, email, password, mobile, occupation}).then((data) => {
                    console.log(data);
                });

            }else if (option === 'Owner') {

            }
        });

    }, 0);

  return `
        <form id="form" style="width: 500px;">
            <label>Sign Up as</label>
            <select id="select">
                <option>Select first</option>
                <option>Owner</option>
                <option>Tenant</option>
            </select>  
        </form>

        <form id="form-container" style="width: 500px;">
            
        </form>
    `;
}

export function Signup() {
    return `
        ${SignUpForm()}
    `
}
