// API URL to fetch data from
const apiUrl = "http://localhost:5000/registerIpo";

// Function to fetch API data and display it
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch data");

    const resData = await response.json();
    console.log(resData);
    if (resData.success) {
      console.log("true");
      displayIpoCards(resData.data);
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("api-data").textContent = "Error loading data.";
  }
}

// Generate IPO Cards
function displayIpoCards(data) {
  console.log("Inside the display function");
  const container = document.getElementById("ipo-cards");
  container.innerHTML = ""; // Clear previous content

  data.forEach((ipo) => {
    const card = document.createElement("div");
    card.className = "card company-card";
    card.innerHTML = `
      <div class="card-body">
        <div class="d-flex py-4">
          <img src="${ipo.company_image_url}"  alt="company-logo"
                height="50" alt="${ipo.company_name} Logo" />
          <h5 class="z card-title company-name align-self-center mx-auto">${
            ipo.company_name
          }</h5>
        </div>

        <div class="container text-start py-3">
          <div class="row">
            <div class="col mb-3">
              <p class="text-secondary my-1">PRICE BAND</p>
              <p class="text-dark my-1 fw-bold">${ipo.price_band}</p>
            </div>
            <div class="col mb-3">
              <p class="text-secondary my-1">OPEN</p>
              <p class="text-dark my-1 fw-bold">${ipo.open_date}</p>
            </div>
            <div class="col mb-3">
              <p class="text-secondary my-1">CLOSE</p>
              <p class="text-dark my-1 fw-bold">${ipo.close_date}</p>
            </div>
          </div>

          <div class="row">
            <div class="col mb-3">
              <p class="text-secondary my-1">ISSUE SIZE</p>
              <p class="text-dark mb-0 fw-bold">${ipo.issue_size}</p>
            </div>
            <div class="col mb-3">
              <p class="text-secondary my-1">ISSUE TYPE</p>
              <p class="text-dark mb-0 fw-bold">${ipo.issue_type}</p>
            </div>
            <div class="col mb-3">
              <p class="text-secondary my-1">LISTING DATE</p>
              <p class="text-dark mb-0 fw-bold">${ipo.listing_date || "TBA"}</p>
            </div>
          </div>
        </div>

        <div class="ps-2">
          <a href="${
            ipo.rhp_link
          }" class="btn rhp-button" target="_blank">RHP</a>
          <a href="${
            ipo.drhp_link
          }" class="btn drhp-button" target="_blank">DRHP</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Fetch and display the data when the page loads
window.addEventListener("DOMContentLoaded", fetchData);
