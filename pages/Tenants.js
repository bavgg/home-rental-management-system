import { Navbar } from "../layout/Navbar.js";
import { fetchTenants } from "/lib/data.js";

function TableRow(d) {
  return `
        <tr>
            <td>${d.t_id}</td>
            <td>${d.fname}</td>
            <td>${d.lname}</td>
            <td>${d.email}</td>
            <td>${d.mobile_no}</td>
            <td>${d.occupation}</td>
        </tr>
    `;
}

function TableRows(data) {
  return data
    .map((d) => {
      return TableRow(d);
    })
    .join("");
}

function TenantTable() {
  fetchTenants()
    .then((data) => {
      const TBody = document.getElementById("tbody");
      TBody.innerHTML = TableRows(data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error fetching groups:", error);
    });
    
  return `
    <table>
        <thead>
            <tr>
                <th>Tenant ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Occupation</th>
            </tr>
        </thead>

        <tbody id="tbody">

        </tbody>
    </table>
    `;
}

export function Tenants() {
  return `
        ${TenantTable()}
      `;
}

