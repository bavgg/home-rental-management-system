import { Navbar } from "../layout/Navbar.js";
import { fetchOwners } from "/lib/data.js";

function TableRow(d) {
  return `
        <tr>
            <td>${d.o_id}</td>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>${d.mobile_no}</td>
            <td>${d.occupation}</td>
            <td>${d.no_of_houses}</td>
            <td>${d.address}</td>
            <td>${d.city}</td>
            <td>${d.state}</td>
            <td>${d.country}</td>
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

function OwnerTable() {
  fetchOwners()
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
                <th>Owner ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>MobileNo</th>
                <th>Occupation</th>
                <th>HousesOwned</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
            </tr>
        </thead>

        <tbody id="tbody">

        </tbody>
    </table>
    `;
}

export function Owners() {
  return `
        ${OwnerTable()} 
      `;
}

