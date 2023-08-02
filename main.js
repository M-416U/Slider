let imgs = Array.from(document.querySelectorAll(".img-box img"));
let nxt = document.querySelector(".next");
let prv = document.querySelector(".prev");
let num = document.querySelector(".number");

let countOfimgs = imgs.length;
let counter = 0;
let mainUl = document.createElement("ul");
mainUl.setAttribute("id", "mainUl");
for (let i = 1; i <= countOfimgs; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-i", i);
  mainUl.appendChild(li);
}
let circle = document.querySelector(".circle");
circle.append(mainUl);
mainCh();

function mainCh() {
  imgs.forEach((e) => {
    e.classList.remove("active");
  });

  let ulArr = Array.from(document.querySelectorAll("#mainUl li"));
  ulArr.forEach((el) => {
    el.classList.remove("active");
    el.addEventListener("click", () => {
      counter = parseInt(el.getAttribute("data-i")) - 1;
      mainCh();
    });
  });

  imgs[counter].classList.add("active");
  mainUl.children[counter].classList.add("active");
  num.textContent = `${counter + 1} / ${countOfimgs}`;

  if(counter == 0){
      prv.style.display = "none";
  }else{
    prv.style.display = "block";
  }
  
  if(counter >= countOfimgs - 1){
    nxt.style.display = "none";
}else{
  nxt.style.display = "block";
}
}

nxt.onclick = () => {
  if (counter != countOfimgs - 1) {
    counter++;
    mainCh();
  }
};
prv.onclick = () => {
  if (counter != 0) {
    counter--;
    mainCh();
  }
};
