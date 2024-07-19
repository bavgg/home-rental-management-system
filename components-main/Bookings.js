import { fetchBookings } from "/lib/data.js";

function TableRow(d) {
  return `
        <tr>
            <td>${d.t_id}</td>
            <td>${d.h_id}</td>
            <td>${d.booking_date}</td>
            <td>${d.period}</td>
            <td>${d.price}</td>
            <td>
                  <details>
                      <summary>Show</summary>
                      <div class="content">
                          <p>${d.agreement}</p>
                      </div>
                  </details>
            </td>
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

function BookingsTable() {
  fetchBookings()
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
                <th>House ID</th>
                <th>Booking Date</th>
                <th>Period</th>
                <th>Price</th>
                <th>Agreement</th>
            </tr>
        </thead>

        <tbody id="tbody">

        </tbody>
    </table>
    `;
}

export function Bookings() {
  return `
        ${BookingsTable()}
      `;
}

