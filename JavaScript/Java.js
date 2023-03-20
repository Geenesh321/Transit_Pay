



// Date and Time
setInterval(function () {
  var date = new Date();
  document.getElementById("time").innerHTML = date;
}, 1000);

// Slide Show
const R1 = document.querySelector("#R1");
const R2 = document.querySelector("#R2");
const R3 = document.querySelector("#R3");
const R4 = document.querySelector("#R4");
const image = document.querySelector(".container img");

R1.checked = true;
R1.addEventListener("click" ,()=>{
  image.style.marginLeft = "0px";
});

R2.addEventListener("click" ,()=>{
  image.style.marginLeft = "-1515px";
});

R3.addEventListener("click" ,()=>{
  image.style.marginLeft = "-3030px";
});

R4.addEventListener("click" ,()=>{
  image.style.marginLeft = "-4545px";
});

