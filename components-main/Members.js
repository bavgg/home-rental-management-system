import { fetchMembers } from "../lib/data.js";

function TableRow(d) {
  return `
        <tr>
            <td>${d.t_id}</td>
            <td>${d.fname}</td>
            <td>${d.lname}</td>
            <td>${d.gender}</td>
            <td>${d.dob}</td>
            <td>${d.occupation}</td>
            <td>${d.relationship}</td>

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

function MembersTable() {
  fetchMembers()
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
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Occupation</th>
                <th>Tenant Relationship</th>
            </tr>
        </thead>

        <tbody id="tbody">

        </tbody>
    </table>
    `;
}

export function Members() {
  return `
        ${MembersTable()}
      `;
}

