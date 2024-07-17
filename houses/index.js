import { Navbar } from "../layout/Navbar.js";
import { fetchOwners, fetchHouses } from "/lib/data.js";

function TableRow(d) {
  return `
        <tr>
            <td>${d.id}</td>
            <td>${d.owner_id}</td>
            <td>${d.no_of_rooms}</td>
            <td>${d.address}</td>
            <td>${d.city}</td>
            <td>${d.state}</td>
            <td>${d.country}</td>
            <td>${d.description}</td>
            <td>${d.rate}</td>
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

function HouseTable() {
  fetchHouses()
    .then((data) => {
      const TBody = document.getElementById("tbody");
      TBody.innerHTML = TableRows(data);
    })
    .catch((error) => {
      console.error("Error fetching groups:", error);
    });
  return `
    <table>
        <thead>
            <tr>
                <th>House ID</th>
                <th>Owner ID</th>
                <th>Number of rooms</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Description</th>
                <th>Rate for rent</th>
            </tr>
        </thead>

        <tbody id="tbody">

        </tbody>
    </table>
    `;
}
function OwnerIDOptions(data) {
    return data.map(d => {
        return `<option>${d.o_id}</option>`
    }).join('');
}
function HouseModalForm() {
    fetchOwners()
    .then((data) => {
      const SelectContainer = document.getElementById("select_container");
        SelectContainer.innerHTML = OwnerIDOptions(data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error fetching groups:", error);
    });

    const style = `
    <style>

      #cancelButton:hover {
        background-color: var(--tint);
        color: white;
      }
    </style>
    `;
  setTimeout(() => {
    const CancelButton = document.getElementById("cancelButton");
    const HouseForm = document.querySelector("#house-form");
    const ModalContainer = document.getElementById('modal-container');

    CancelButton.addEventListener("click", () => {
      console.log("clicked cancel");
      ModalContainer.innerHTML = ``;
    });

    HouseForm.addEventListener("submit", (event) => {
        const image_url = document.getElementById('product-image-url').value;
        const product_name = document.getElementById("product-name").value;
        const description = document.getElementById("description").value;
        const supplier = document.getElementById("supplier").value;
        // user_id

        const imgUrlErrorContainer = document.getElementById('img-url-error');

        if(validateURL(image_url))  {
            if(isImageUrl(image_url)) {
                createProduct({ product_name, description, supplier, image_url });
                ModalContainer.innerHTML = ``;
            }else {
                event.preventDefault();
                imgUrlErrorContainer.textContent = 'Invalid Image URL'
            }
            
        }else {
            event.preventDefault();
            imgUrlErrorContainer.textContent = 'Invalid Image URL'
            // ModalContainer.innerHTML = ``;
        }
    });
  }, 0);

  return `

    ${style}
    <style>
        #house-form input, select{
            width: 300px;
        }
        #house-form div {
            justify-content: space-between;
        }
    </style>
    <div id="edit-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1;"></div>
    <dialog id="emodal" open style="border-radius: var(--bd-radius); position: absolute; margin-left: auto; margin-right: auto; margin-top: 200px; z-index: 2;">

    <form method="dialog" id="house-form" style="padding: 10px; display: flex; flex-direction: column;">

        <h3>Add House</h3>


        <div style="display: flex; gap: 10px; align-items: center;">
            <p>OwnerID</p>

            <select id="select_container">

            </select>
        </div>

         <div style="display: flex; gap: 10px; align-items: center;">
            <label>NoOfRooms</label>
            <input type="number" id="product" required />
        </div>

         <div style="display: flex; gap: 10px; align-items: center;">
            <label>Rate</label>
            <input type="number" id="product" required />
        </div>

         <div style="display: flex; gap: 10px; align-items: center;">
            <label>UploadPics</label>
            <input type="file" id="product" required />
        </div>

         <div style="display: flex; gap: 10px; align-items: center;">
            <label>Country</label>
            <input type="text" id="product" required />
        </div>

         <div style="display: flex; gap: 10px; align-items: center;">
            <label>State</label>
            <input type="text" id="product" required />
        </div>

         <div style="display: flex; gap: 10px; align-items: center;">
            <label>City</label>
            <input type="text" id="product" required />
        </div>

         <div style="display: flex; gap: 10px; align-items: center;">
            <label>Address</label>
            <input type="text" id="product" required />
        </div>

        <div style="display: flex; gap: 10px; align-items: center;">
            <label>Description</label>
            <input type="text"  id="product" required />
        </div>

        <br>

        <div style="display: flex; gap: 5px; margin-top: 10px;">
            <button type="button" id="cancelButton" style="background-color: var(--accent); color: white;">
                Cancel
            </button>
            <button id="submit-btn" type="submit">Create Product</button>
        </div>
    </form>
    </dialog>`;
}

function AddHouseBtn() {
    setTimeout(() => {
        const AddBtn = document.getElementById('add-btn');

        AddBtn.addEventListener('click', () => {
            const ModalContainer = document.getElementById('modal-container');
            ModalContainer.innerHTML = HouseModalForm();
        });
    }, 0);
  return `
        <button id="add-btn">Add House</button>
    `;
}
function Main() {
  return `
          <div id="modal-container"></div>
          ${Navbar()}
          <main style="display: flex;  gap: 20px; justify-content: center;">
            <div style="margin-top: 50px;">
                ${AddHouseBtn()}
                ${HouseTable()}
            </div>
          </main>
      `;
}

const body = document.querySelector("body");
body.innerHTML = Main();
