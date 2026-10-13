// console.log("Hello world");

// console.log(3+4);

// let score = 10
// let result = score+8

// console.log(result);

//  var count = 0;
//       const btn = document.getElementById("count");
//       const btn2 = document.getElementById("count2");
//       const add = document.getElementById("plus");
//       const reset = document.getElementById("reset");
//       btn.addEventListener("click", () => {
//         count = count + 1;
//         add.textContent = `Counter : ${count}`;
//       });
//       btn2.addEventListener("click", () => {
//         count = count - 1;
//         add.textContent = `Counter : ${count}`;
//       });
//       reset.addEventListener("click", () => {
//         count = 0;
//         add.textContent = `Counter : ${count}`;
//       });

var boolean;
const btn3 = document.getElementById("showbtn");
const showp = document.getElementById("showpara");
btn3.addEventListener("click", () => {
  boolean = !boolean;
  showp.textContent = `${boolean ? "This is paragraph" : "Paragraph not visible"}`;
  showp.className = `${boolean ? "show" : "hide"}`;
});

const btn4 = document.getElementById("bgchange");
btn4.addEventListener("click", () => {
  document.getElementById("page").classList.toggle("yellow");
});
