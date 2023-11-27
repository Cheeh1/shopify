// alert
let alert = document.getElementById("alertImg");
let alertInfo = document.getElementById("alertInfo");

const handleAlertToggle = () => {
  alertInfo.classList.toggle("hidden");
  alert.classList.toggle("alert-img-active");
};

alert.addEventListener("click", function () {
  handleAlertToggle();
});

alert.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleAlertToggle();
  }
});

//profile
let profile = document.getElementById("profile-select");
let dropdown = document.getElementById("profile-dropdown");

const handleProfileToggle = () => {
  dropdown.classList.toggle("hidden");
  profile.classList.toggle("alert-img-active");
};

profile.addEventListener("click", function () {
  handleProfileToggle();
});

profile.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleProfileToggle();
  }
});

// trial
const trialBtn = document.getElementById("trial-btn");
const trial = document.getElementById("trial");

const handleTrialBtn = () => {
  trial.classList.add("trial");
};

trialBtn.addEventListener("click", function () {
  handleTrialBtn();
});

trialBtn.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleTrialBtn();
  }
});

//progress bar
const setupCounter = document.getElementById("setup-counter");
let i = parseInt(setupCounter.innerText);
setupCounter.innerText = i;

// setup-guide
let setup = document.getElementById("setup-guide-select");
let setupDropdown = document.getElementById("setup-items");

const handleSetupGuide = () => {
  setupDropdown.classList.toggle("hidden");
  setup.classList.toggle("rotate");
};

setup.addEventListener("click", function () {
  handleSetupGuide();
});

setup.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSetupGuide();
  }
});

// Item 1
let item1 = document.getElementById("item-1-select");
let item1Dropdown = document.getElementById("item-1-dropdown");
let item1Bg = document.getElementById("item-1-bg");

const handleSetupOneToggle = () => {
  item1Dropdown.classList.toggle("hidden");
  item1Bg.classList.toggle("online-store-bg");
};
item1.addEventListener("click", function () {
  handleSetupOneToggle();
});

item1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSetupOneToggle();
  }
});

// load and toggle item one
const circleOne = document.getElementById("setup-sect-circle-one");
const circleFocOne = document.getElementById("circleOne");
const loadingOne = document.getElementById("setup-sect-load-one");
const markOne = document.getElementById("setup-sect-mark-one");

let mark1 = false;
const loadMarkOneToggle = () => {
  circleOne.classList.add("hidden");
  loadingOne.classList.remove("hidden");
  setTimeout(() => {
    loadingOne.classList.add("hidden");
    markOne.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark1 = true;
};

circleOne.addEventListener("click", () => {
  if (!mark1) {
    loadMarkOneToggle();
    if (!mark2) {
      handleSetupTwoToggle();
    }
  } else {
    markOne.classList.add("hidden");
    circleOne.classList.remove("hidden");
    i = i - 1;
    setupCounter.innerText = i;
    mark1 = false;
  }
});

circleFocOne.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark1) {
      loadMarkOneToggle();
      if (!mark2) {
        handleSetupTwoToggle();
      }
    } else {
      markOne.classList.add("hidden");
      circleOne.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark1 = false;
    }
  }
});

markOne.addEventListener("click", () => {
  markOne.classList.add("hidden");
  circleOne.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  mark1 = false;
});

// Item-2
let item2 = document.getElementById("item-2-select");
let item2Dropdown = document.getElementById("item-2-dropdown");
let item2Bg = document.getElementById("item-2-bg");

const handleSetupTwoToggle = () => {
  item2Dropdown.classList.toggle("hidden");
  item2Bg.classList.toggle("online-store-bg");
};
item2.addEventListener("click", function () {
  handleSetupTwoToggle();
});
item2.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSetupTwoToggle();
  }
});

//Load and marked toggle item two
const circleTwo = document.getElementById("setup-sect-circle-two");
const circleFocTwo = document.getElementById("circleTwo");
const loadingTwo = document.getElementById("setup-sect-load-two");
const markTwo = document.getElementById("setup-sect-mark-two");
let mark2 = false;

circleTwo.addEventListener("click", () => {
  circleTwo.classList.add("hidden");
  loadingTwo.classList.remove("hidden");
  setTimeout(() => {
    loadingTwo.classList.add("hidden");
    markTwo.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark2 = true;
  if (!mark3) {
    handleSetupThreeToggle();
  }
});

circleFocTwo.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark2) {
      circleTwo.classList.add("hidden");
      loadingTwo.classList.remove("hidden");
      setTimeout(() => {
        loadingTwo.classList.add("hidden");
        markTwo.classList.remove("hidden");
        i = i + 1;
        setupCounter.innerText = i;
      }, 500);
      mark2 = true;
      if (!mark3) {
        handleSetupThreeToggle();
      }
    } else {
      markTwo.classList.add("hidden");
      circleTwo.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark2 = false;
    }
  }
});

markTwo.addEventListener("click", () => {
  markTwo.classList.add("hidden");
  circleTwo.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  mark2 = false;
});

// Item 3
let item3 = document.getElementById("item-3-select");
let item3Dropdown = document.getElementById("item-3-dropdown");
let item3Bg = document.getElementById("item-3-bg");

const handleSetupThreeToggle = () => {
  item3Dropdown.classList.toggle("hidden");
  item3Bg.classList.toggle("online-store-bg");
};
item3.addEventListener("click", function () {
  handleSetupThreeToggle();
});
item3.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSetupThreeToggle();
  }
});

//Load and marked toggle three
const circleThree = document.getElementById("setup-sect-circle-three");
const circleFocThree = document.getElementById("circleThree");
const loadingThree = document.getElementById("setup-sect-load-three");
const markThree = document.getElementById("setup-sect-mark-three");
let mark3 = false;

circleThree.addEventListener("click", () => {
  circleThree.classList.add("hidden");
  loadingThree.classList.remove("hidden");
  setTimeout(() => {
    loadingThree.classList.add("hidden");
    markThree.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark3 = true;
  if (!mark4) {
    handleSetupFourToggle();
  }
});

circleFocThree.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark3) {
      circleThree.classList.add("hidden");
      loadingThree.classList.remove("hidden");
      setTimeout(() => {
        loadingThree.classList.add("hidden");
        markThree.classList.remove("hidden");
        i = i + 1;
        setupCounter.innerText = i;
      }, 500);
      mark3 = true;
      if (!mark4) {
        handleSetupFourToggle();
      }
    } else {
      markThree.classList.add("hidden");
      circleThree.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark3 = false;
    }
  }
});

markThree.addEventListener("click", () => {
  markThree.classList.add("hidden");
  circleThree.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  mark3 = false;
});

// Item 4
let item4 = document.getElementById("item-4-select");
let item4Dropdown = document.getElementById("item-4-dropdown");
let item4Bg = document.getElementById("item-4-bg");

const handleSetupFourToggle = () => {
  item4Dropdown.classList.toggle("hidden");
  item4Bg.classList.toggle("online-store-bg");
};
item4.addEventListener("click", function () {
  handleSetupFourToggle();
});
item4.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSetupFourToggle();
  }
});

//Load and marked toggle four
const circleFour = document.getElementById("setup-sect-circle-four");
const circleFocFour = document.getElementById("circleFour");
const loadingFour = document.getElementById("setup-sect-load-four");
const markFour = document.getElementById("setup-sect-mark-four");
let mark4 = false;

circleFour.addEventListener("click", () => {
  circleFour.classList.add("hidden");
  loadingFour.classList.remove("hidden");
  setTimeout(() => {
    loadingFour.classList.add("hidden");
    markFour.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark4 = true;
  if (!mark5) {
    handleSetupFiveToggle();
  }
});

circleFocFour.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark4) {
      circleFour.classList.add("hidden");
      loadingFour.classList.remove("hidden");
      setTimeout(() => {
        loadingFour.classList.add("hidden");
        markFour.classList.remove("hidden");
        i = i + 1;
        setupCounter.innerText = i;
      }, 500);
      mark4 = true;
      if (!mark5) {
        handleSetupFiveToggle();
      }
    } else {
      markFour.classList.add("hidden");
      circleFour.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark4 = false;
    }
  }
});

markFour.addEventListener("click", () => {
  markFour.classList.add("hidden");
  circleFour.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
});

// Item 5
let item5 = document.getElementById("item-5-select");
let item5Dropdown = document.getElementById("item-5-dropdown");
let item5Bg = document.getElementById("item-5-bg");

const handleSetupFiveToggle = () => {
  item5Dropdown.classList.toggle("hidden");
  item5Bg.classList.toggle("online-store-bg");
};
item5.addEventListener("click", function () {
  handleSetupFiveToggle();
});
item5.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleSetupFiveToggle();
  }
});

//Load and marked toggle two
const circleFive = document.getElementById("setup-sect-circle-five");
const circleFocFive = document.getElementById("circleFive");
const loadingFive = document.getElementById("setup-sect-load-five");
const markFive = document.getElementById("setup-sect-mark-five");
let mark5 = false;

circleFive.addEventListener("click", () => {
  circleFive.classList.add("hidden");
  loadingFive.classList.remove("hidden");
  setTimeout(() => {
    loadingFive.classList.add("hidden");
    markFive.classList.remove("hidden");
    i = i + 1;
    setupCounter.innerText = i;
  }, 500);
  mark5 = true;
  if (!mark1) {
    handleSetupOneToggle();
  }
});

circleFocFive.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (!mark5) {
      circleFive.classList.add("hidden");
      loadingFive.classList.remove("hidden");
      setTimeout(() => {
        loadingFive.classList.add("hidden");
        markFive.classList.remove("hidden");
        i = i + 1;
        setupCounter.innerText = i;
      }, 500);
      mark5 = true;
      if (!mark1) {
        handleSetupOneToggle();
      }
    } else {
      markFive.classList.add("hidden");
      circleFive.classList.remove("hidden");
      i = i - 1;
      setupCounter.innerText = i;
      mark5 = false;
    }
  }
});

markFive.addEventListener("click", () => {
  markFive.classList.add("hidden");
  circleFive.classList.remove("hidden");
  i = i - 1;
  setupCounter.innerText = i;
  mark5 = false;
});
