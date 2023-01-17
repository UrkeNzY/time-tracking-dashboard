let currentTimeElements = document.querySelectorAll(".tracked-time");
let previousTimeElements = document.querySelectorAll(".previous-time");
const buttonElements = document.querySelectorAll("ul li");

const activities = [
  (work = {
    daily: {
      current: 5,
      previous: 7,
    },
    weekly: {
      current: 32,
      previous: 36,
    },
    monthly: {
      current: 103,
      previous: 128,
    },
  }),
  (play = {
    daily: {
      current: 1,
      previous: 2,
    },
    weekly: {
      current: 10,
      previous: 8,
    },
    monthly: {
      current: 23,
      previous: 29,
    },
  }),
  (study = {
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 4,
      previous: 7,
    },
    monthly: {
      current: 13,
      previous: 19,
    },
  }),
  (exercise = {
    daily: {
      current: 1,
      previous: 1,
    },
    weekly: {
      current: 4,
      previous: 5,
    },
    monthly: {
      current: 11,
      previous: 18,
    },
  }),
  (social = {
    daily: {
      current: 1,
      previous: 3,
    },
    weekly: {
      current: 5,
      previous: 10,
    },
    monthly: {
      current: 21,
      previous: 23,
    },
  }),
  (selfCare = {
    daily: {
      current: 0,
      previous: 1,
    },
    weekly: {
      current: 2,
      previous: 2,
    },
    monthly: {
      current: 7,
      previous: 11,
    },
  }),
];

for (const buttonElement of buttonElements) {
  buttonElement.addEventListener("click", switchTimeFormat);
}

function switchTimeFormat(event) {
  if (event.target.classList.contains("weekly-button")) {
    for (let i = 0; i < currentTimeElements.length; i++) {
      currentTimeElements[i].textContent = activities[i].weekly.current + "hrs";
      previousTimeElements[i].textContent =
        "Last Week - " + activities[i].weekly.previous + "hrs";
    }
  } else if (event.target.classList.contains("monthly-button")) {
    for (let i = 0; i < currentTimeElements.length; i++) {
      currentTimeElements[i].textContent =
        activities[i].monthly.current + "hrs";
      previousTimeElements[i].textContent =
        "Last Week - " + activities[i].monthly.previous + "hrs";
    }
  } else {
    for (let i = 0; i < currentTimeElements.length; i++) {
      currentTimeElements[i].textContent = activities[i].daily.current + "hrs";
      previousTimeElements[i].textContent =
        "Last Week - " + activities[i].daily.previous + "hrs";
    }
  }

  for (const buttonElement of buttonElements) {
    if (
      buttonElement.classList.contains("selected") &&
      buttonElement != event.target
    ) {
      buttonElement.classList.remove("selected");
    }
  }

  event.target.classList.add("selected");
}
