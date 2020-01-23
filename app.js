const database = [
  "HTML5",
  "CSS3",
  "React",
  "JSX",
  "React Router",
  "Gatsby",
  "SCSS/SASS",
  "LESS",
  "ESLint",
  "Yeoman",
  "Babel",
  "NPM/Yarn",
  "Bootstrap",
  "Reactstrap",
  "React-Bootstrap",
  "MaterialUI",
  "jQuery",
  "Vue",
  "WebPack",
  "PHP",
  "Wordpress",
  "Ruby",
  "Ruby-On-Rails",
  "Node.js",
  "Typescript",
  "Vanilla Javascript",
  "ES6",
  "ES7",
  "Gulp.js",
  "Pug",
  "Redux"
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
