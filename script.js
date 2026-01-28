// ALL SERVICE AREAS (must match Home page list)
const serviceAreas = [
  "shakti nagar",
  "kamla nagar",
  "shastri nagar",
  "model town",
  "vijay nagar",
  "tri nagar",
  "gulabi bagh",
  "timarpur",
  "civil lines",
  "delhi 6",
  "karol bagh",
  "jahangirpuri",
  "azadpur",
  "ashok vihar",
  "shalimar bagh",
  "rohini",
  "bhajanpura"
];

// CONTACT DETAILS
const contact = {
  name: "Rahul",
  phone: "9899013469, 9654757871",
  email: "rahulairtel9899@gmail.com",
  whatsapp: "9899013469"
};

function checkLocation() {
  const input = document.getElementById("locationInput").value.toLowerCase().trim();
  const result = document.getElementById("result");
  const contactBox = document.getElementById("contactDetails");

  // Reset
  result.innerHTML = "";
  contactBox.classList.add("hidden");

  if (input === "") {
    result.innerHTML = "Please enter your area name.";
    result.className = "error";
    return;
  }

  // PARTIAL MATCH LOGIC
  let matchFound = serviceAreas.some(area => area.includes(input));

  if (matchFound) {
    result.innerHTML =
      "Congratulations! Airtel Fiber services are available in your area.";
    result.className = "success";

    document.getElementById("name").textContent = contact.name;
    document.getElementById("phone").textContent = contact.phone;
    document.getElementById("email").textContent = contact.email;

    document.getElementById("whatsappLink").href =
      "https://wa.me/91" + contact.whatsapp;

    contactBox.classList.remove("hidden");
  } else {
    result.innerHTML =
      "Sorry, Airtel Fiber internet service is not available in your area.";
    result.className = "error";
  }
}
let time = 15 * 60;
const timerEl = document.getElementById("timer");

if (timerEl) {
  setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerEl.textContent =
      `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (time > 0) time--;
  }, 1000);
}
