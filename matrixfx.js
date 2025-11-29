const matrix = document.querySelector(".matrix-container");
const fontSize = 36; // needs to be exact with css font-size
const fontFamily = "monospace"; // needs to be a monospaced typefont!

const colors = ["#18824f", "#11b833", "#255f32", "#103a0fff", "#24ef4dff"];
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const chinese = [
  "的",
  "一",
  "是",
  "在",
  "不",
  "了",
  "有",
  "和",
  "人",
  "这",
  "中",
  "大",
  "为",
  "上",
  "个",
  "国",
  "我",
  "以",
  "要",
  "他",
  "时",
  "来",
  "用",
  "们",
];
const signs = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
];
const opacities = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

const all = [...alphabet, ...numbers, ...signs, ...chinese];

// use to simply randomise 1 element from array
const randomizer = function (content) {
  return content[Math.floor(Math.random() * content.length)];
};

// measure actual character width for precise column count
const getCharWidth = function () {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `${fontSize}px ${fontFamily}`;
  return ctx.measureText("0").width;
};

// render matrix
const fillScreen = function () {
  matrix.innerHTML = "";
  const charWidth = getCharWidth();
  const matrixColumns = Math.floor(window.innerWidth / charWidth);
  const matrixRows = Math.floor(window.innerHeight / fontSize);

  for (let c = 0; c < matrixColumns; c++) {
    let col = "";

    for (let r = 0; r < matrixRows; r++) {
      const char = randomizer(all);
      const color = randomizer(colors);
      col += `<span class="matrix-child" style="color:${color}">${char}</span>\n`; /* comment out for char. selector*/
      //   col += `${randomizer(all)}\n`; /* comment out for column selector */
    }

    const pre = document.createElement("pre");
    pre.classList.add("matrix-child");
    pre.innerHTML = col; /* comment out to render span for every char. */
    // pre.textContent = col; /* comment out to render columns as strings */
    matrix.append(pre);

    pre.style.color = randomizer(colors);
    pre.style.opacity = randomizer(opacities);

    pre.style.animation = `shimmer ${
      Math.random() * 6 + 4 /* change values for different animation speed */
    }s ease-in-out infinite`;

    if (pre.style.opacity < 0.6) {
      pre.style.filter = "blur(3px)";
    }
  }
};

fillScreen();

// add for dynamic resize if you want the effect to scale without refreshing the page
window.addEventListener("resize", fillScreen);
