const database = [
  "Web Developer",
  "Artist",
  "Photographer",
  "PC Repair Technician",
  "Student",
  "Linux Nerd",
  "College Graduate",
  ];
const time = 800;
let i = 0;

function changeText() {
  document.getElementById("wordContainer").innerHTML = database[i];
  if (i < database.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeText()", time);
}

window.onload = changeText();
