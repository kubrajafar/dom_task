/*3 div yaradin ilk div id ile digerlerini ise class ile secib rengini deyisin*/
// const box1 = document.getElementById("box1")
// const box2 = document.getElementsByClassName("box2")
// const box3 = document.getElementsByClassName("box3")

// console.log(box1);
// box1.style.cssText=`
// width:100px;
// height:100px;
// background-color:blue;

// `
// box2[0].style.cssText=`
// width:100px;
// height:100px;
// background-color:red;
// `
// box3[0].style.cssText=`
// width:100px;
// height:100px;
// background-color:green;
// `

/*3 muxtelif rengli button ve 1 div yazin. butona her basdiqda divin rengi buton rengine gore deyissin */

// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
// const btn3 = document.getElementById("btn3")
// const box = document.getElementById("box")

// btn1.style.cssText=`
// background-color:red;
// `
// btn2.style.cssText=`
// background-color:pink;
// `
// btn3.style.cssText=`
// background-color:yellow;
// `
// btn1.onclick=  function () {
//     box.style.backgroundColor = "red"
// }
// btn2.onclick=  function () {
//     box.style.backgroundColor = "pink"
// }
// btn3.onclick=  function () {
//     box.style.backgroundColor = "yellow"
// }

/*1 button ve 1 div yazin. butona her basdiqda divin rengi rendom deyissin */

const btn = document.getElementById("btn");
const box = document.getElementById("box");

const arr = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple",
  "black",
  "orange",
];

btn.onclick = function () {
  box.style.backgroundColor = arr[Math.floor(arr.length * Math.random())];
  console.log(btn);
};
