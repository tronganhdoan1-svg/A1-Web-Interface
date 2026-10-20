console.log("Hello, World!");
const siteVisitors = [
    { month: "May 2026", visitors: 13915 },
    { month: "June 2026", visitors: 11302 },
    { month: "July 2026", visitors: 15760 },
    { month: "August 2026", visitors: 17044 },
    { month: "September 2026", visitors: 18629 },
    { month: "October 2026", visitors: 19310 }
    ];

function buildVisitorTable() {
    const container = document.querySelector("#visitor-table");
    if (!container) return; // only the homepage has it

    const table = document.createElement("table");

    siteVisitors.forEach(({ month, visitors }) => {
        const row = document.createElement("tr");
        const col1 = document.createElement("td");
        col1.textContent = `${month}`;
        row.appendChild(col1);
        const col2 = document.createElement("td");
        col2.textContent = `${visitors}`;
        row.appendChild(col2);
        table.appendChild(row);
    });

    container.appendChild(table);
}

buildVisitorTable();


//Function to handle cookie banner
const container_cookie = document.querySelector("#cookie-banner");

// Function to show the original state of the cookie banner, which clears the container and adds the original text and link
function showOriginal() {
    container_cookie.textContent = ""; // Clear the container
    const banner = document.createElement("p");
    banner.textContent = `We use cookies to remember your preferences and understand how visitors use our site.`;
    const acceptLink = document.createElement("a");
    acceptLink.setAttribute("id", "accept-cookies");
    acceptLink.href = "#";
    acceptLink.textContent = "Accept Cookies";
    container_cookie.appendChild(banner);
    container_cookie.appendChild(acceptLink);
    }


// Function to show the accepted state, identical to showOriginal but with different text and link
function showAccepted() {
    container_cookie.textContent = ""; // Clear the container
    const banner = document.createElement("p");
    banner.textContent = `Cookies were accepted. Would you like to revoke?`;
    const revokeLink = document.createElement("a");
    revokeLink.setAttribute("id", "revoke-cookies");
    revokeLink.href = "#";
    revokeLink.textContent = "Revoke Cookies";
    container_cookie.appendChild(banner);
    container_cookie.appendChild(revokeLink);
}

container_cookie.addEventListener("click", (e) => {
  if (e.target.id === "accept-cookies") {
    e.preventDefault();
    showAccepted();
  } else if (e.target.id === "revoke-cookies") {
    e.preventDefault();
    showOriginal();
  }
});


//Function to handle reading assistance toggle
const readingToggle = document.querySelector("#reading-toggle");

function toggleReadingAssist() {
    document.body.classList.toggle("reading-assist");
}

readingToggle.addEventListener("click", toggleReadingAssist);


//Function to handle reading assistance toggle using Ctrl + A
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "a") {
    //prevents ctrl + a from selecting all text
    e.preventDefault();
    toggleReadingAssist();
  }
});