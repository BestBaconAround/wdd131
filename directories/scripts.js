// Dynamically set the copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date
// document.lastModified returns a plain string — no extra formatting needed per the assignment
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;