function showTime() {
  // Create a date
  const date = new Date();

  // Get the HTML div to display the date in
  const htmlClock = document.getElementById("MyClockDisplay");

  // Get the actual time in Hours / Minutes / Seconds
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59

  // Declare a variable to differenciate the AM from the PM
  let session = "AM";

  // Treat the midnight case
  if (h == 0) {
    h = 12;
  }

  // Handle the switch between AM and PM
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  // Format the time to the desired 03 in the morning
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Modify the html div to render the desired time
  const time = h + ":" + m + ":" + s + " " + session;
  htmlClock.innerText = time;
  htmlClock.textContent = time;

  // Wait for 1 sec
  setTimeout(showTime, 1000);
}

showTime();
