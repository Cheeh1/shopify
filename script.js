// alert
let alert = document.getElementById("alertImg");
let alertInfo = document.getElementById("alertInfo");

alert.addEventListener("click", function () {
  alertInfo.classList.toggle("hidden");
  alert.classList.toggle("alert-img-active");
});

alert.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    alertInfo.classList.toggle("hidden");
    alert.classList.toggle("alert-img-active");
  }
});

//profile
let profile = document.getElementById("profile-select");
let dropdown = document.getElementById("profile-dropdown");

profile.addEventListener("click", function () {
  dropdown.classList.toggle("hidden");
  profile.classList.toggle("alert-img-active");
});

profile.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    dropdown.classList.toggle("hidden");
    profile.classList.toggle("alert-img-active");
  }
});

// trail
document.getElementById("trial-btn").addEventListener("click", function () {
  document.getElementById("trial").classList.add("trial");
});

document
  .getElementById("trial-btn")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("trial").classList.add("trial");
    }
  });

// setup-guide
let setup = document.getElementById("setup-guide-select");
let setupDropdown = document.getElementById("setup-items");

setup.addEventListener("click", function () {
  setupDropdown.classList.toggle("hidden");
  setup.classList.toggle("rotate");
});

setup.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setupDropdown.classList.toggle("hidden");
    setup.classList.toggle("rotate");
  }
});

// Item-1
let item1 = document.getElementById("item-1-select");
let item1Dropdown = document.getElementById("item-1-dropdown");
let item1Bg = document.getElementById("item-1-bg");

item1.addEventListener("click", function () {
  item1Dropdown.classList.toggle("hidden");
  item1Bg.classList.toggle("online-store-bg");
});

item1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    item1Dropdown.classList.toggle("hidden");
    item1Bg.classList.toggle("online-store-bg");
  }
});

// Item-2
let item2 = document.getElementById("item-2-select");
let item2Dropdown = document.getElementById("item-2-dropdown");
let item2Bg = document.getElementById("item-2-bg");

item2.addEventListener("click", function () {
  item2Dropdown.classList.toggle("hidden");
  item2Bg.classList.toggle("online-store-bg");
});
item2.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    item2Dropdown.classList.toggle("hidden");
    item2Bg.classList.toggle("online-store-bg");
  }
});

// Item 3
let item3 = document.getElementById("item-3-select");
let item3Dropdown = document.getElementById("item-3-dropdown");
let item3Bg = document.getElementById("item-3-bg");

item3.addEventListener("click", function () {
  item3Dropdown.classList.toggle("hidden");
  item3Bg.classList.toggle("online-store-bg");
});
item3.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    item3Dropdown.classList.toggle("hidden");
    item3Bg.classList.toggle("online-store-bg");
  }
});

// Item 4
let item4 = document.getElementById("item-4-select");
let item4Dropdown = document.getElementById("item-4-dropdown");
let item4Bg = document.getElementById("item-4-bg");

item4.addEventListener("click", function () {
  item4Dropdown.classList.toggle("hidden");
  item4Bg.classList.toggle("online-store-bg");
});
item4.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    item4Dropdown.classList.toggle("hidden");
    item4Bg.classList.toggle("online-store-bg");
  }
});

// Item 5
let item5 = document.getElementById("item-5-select");
let item5Dropdown = document.getElementById("item-5-dropdown");
let item5Bg = document.getElementById("item-5-bg");

item5.addEventListener("click", function () {
  item5Dropdown.classList.toggle("hidden");
  item5Bg.classList.toggle("online-store-bg");
});
item5.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    item5Dropdown.classList.toggle("hidden");
    item5Bg.classList.toggle("online-store-bg");
  }
});

function toggleCheckbox() {
  var checkbox = document.getElementById("checkbox");

  // Toggle between "checked" and "unchecked" classes to switch images
  if (checkbox.classList.contains("checked")) {
    checkbox.classList.remove("checked");
    checkbox.classList.add("unchecked");
  } else {
    checkbox.classList.remove("unchecked");
    checkbox.classList.add("checked");
  }
}


// Select all items and their corresponding dropdowns
// let items = [
//   document.getElementById("item-1-select"),
//   document.getElementById("item-2-select"),
//   document.getElementById("item-3-select"),
//   document.getElementById("item-4-select"),
//   document.getElementById("item-5-select"),
// ];

// let dropdowns = [
//   document.getElementById("item-1-dropdown"),
//   document.getElementById("item-2-dropdown"),
//   document.getElementById("item-3-dropdown"),
//   document.getElementById("item-4-dropdown"),
//   document.getElementById("item-5-dropdown"),
// ];

// // Add click event listeners to each item
// items.forEach((item, index) => {
//   item.addEventListener("click", function () {
//     // Toggle visibility of the clicked item's dropdown
//     dropdowns[index].classList.toggle("hidden");

//     // Mark the clicked item as completed after toggling dropdown visibility
//     item.classList.toggle("completed");

//     // Hide other dropdowns and unmark other items as completed
//     dropdowns.forEach((dropdown, i) => {
//       if (i !== index) {
//         dropdown.classList.add("hidden");
//         items[i].classList.remove("completed");
//       }
//     });
//   });
// });

// items.forEach((item, index) => {
//   item.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       // Toggle visibility of the clicked item's dropdown
//       dropdowns[index].classList.toggle("hidden");

//       // Mark the clicked item as completed after toggling dropdown visibility
//       item.classList.toggle("completed");

//       // Hide other dropdowns and unmark other items as completed
//       dropdowns.forEach((dropdown, i) => {
//         if (i !== index) {
//           dropdown.classList.add("hidden");
//           items[i].classList.remove("completed");
//         }
//       });
//     }
//   });
// });
