function Card(img_url, title, description) {
  return `
          <div style="display: flex; flex-direction: column; width: 250px; ">
              <img width="250px" height="250px" src="${img_url}" style="border-radius: var(--bd-radius); object-fit: cover;">
              <h3>${title}</h3>
              <p>${description}</p>

                <button id="${title}" style="width: fit-content;">See Details</button>

          </div>
      `;
}

export function Home() {
  return `
                <h1 style="margin-bottom: 10px;">Welcome ${"John Doe"} </h1>
                <div id="cards" style="display: flex; gap: 50px;">
                    ${Card(
                      "https://i.imgur.com/7NnkgBs.jpeg",
                      "Houses",
                      "This page contains the details of all Houses."
                    )}
                    ${Card(
                      "https://i.imgur.com/t9KXKYa.png",
                      "Owners",
                      "This page contains the details of all Houses."
                    )}
                    ${Card(
                      "https://i.imgur.com/VAVx9aI.png",
                      "Tenants",
                      "This page contains the details of all Houses."
                    )}
                    ${Card(
                      "https://i.imgur.com/tnZtdAH.jpeg",
                      "Booking",
                      "This page contains the details of all Houses."
                    )}
                </div>
    `;
}
