
import { registerTenant, registerOwner } from '/lib/actions.js';

function OwnerInput() {
    return `
        <input id="fullname" type="text" placeholder="Full Name" required>
        
        <input id="email" type="email" placeholder="Email" required>
        
        <input id="password" type="password" placeholder="Password" required>
        
        <input id="mobile" type="tel" placeholder="Mobile No" required>
        
        <input id="occupation" type="text" placeholder="Occupation" required>
        
        <input id="house_no" type="number" placeholder="Number of Houses" required>
        
        <input id="country" type="text" placeholder="Country" required>
        
        <input id="state" type="text" placeholder="State" required>
        
        <input id="city" type="text" placeholder="City" required>
        
        <input id="address" type="text" placeholder="Address" required>
        
        <button type="submit">Sign Up</button>
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

                registerTenant({firstname, lastname, email, password, mobile, occupation}).then((data) => {
                    alert(data.message);
                });

            }else if (option === 'Owner') {
                const fullname = document.getElementById('firstname').value;
                const email = document.getElementById('lastname').value;
                const password = document.getElementById('email').value;
                const mobile = document.getElementById('password').value;
                const occupation = document.getElementById('mobile').value;
                const house_no = document.getElementById('occupation').value;
                const country = document.getElementById('firstname').value;
                const state = document.getElementById('lastname').value;
                const city = document.getElementById('email').value;
                const address = document.getElementById('password').value;

                registerOwner({ fullname, email, password, mobile, occupation,house_no, country,city, state, address}).then(data => {
                    alert(data.message);
                });
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
