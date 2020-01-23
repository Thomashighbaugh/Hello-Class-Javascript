//words that will be rotated on the page
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
//time between transitions
const time = 1200;
let i = 0;

function changeText() {
  //using getElementById this selects the wordTag html tag
  document.getElementById("wordTag").innerHTML = database[i];
 //creates endless loop of terms
  if (i < database.length - 1) {
    i++;
  } else {
    i = 0;
  }
  //using time as parameter this calls changeText to shift between the skills emphasized
  setTimeout("changeText()", time);
}
//begins function on window load
window.onload = changeText();
