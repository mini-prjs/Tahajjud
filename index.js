const mahrib = document.getElementById("mahrib");
const fajr = document.getElementById("fajr");
const button = document.getElementById("btn");
const tahajjudElement = document.getElementById("tahajjud");
const midnightElement = document.getElementById("midnight");

const calculate = () => {
  const mahribTime = new Date(mahrib.value).getTime();
  const fajrTime = new Date(fajr.value).getTime();

  if (mahribTime >= fajrTime) {
    alert("Evening time must be before morning time");
    return;
  }

  const midnight = new Date(mahribTime + (fajrTime - mahribTime) / 2);
  const lastThirdStartTime = fajrTime - (fajrTime - mahribTime) / 3;

  const formattedMidnight = midnight.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
  });

  const formattedLastThirdStart = new Date(
    lastThirdStartTime
  ).toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
  });

  tahajjudElement.textContent = `Last 1/3 Start Time: ${formattedLastThirdStart}`;
  midnightElement.textContent = `Midnight: ${formattedMidnight}`;
};
