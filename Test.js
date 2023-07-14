function size(){
  let page = document.getElementById("page");
  let w = getComputedStyle(page).width;
  let h = getComputedStyle(page).height;
  document.getElementById("demo").innerHTML = "Width = " + w + "<br>Height = " + h;
}

setInterval(size, 0);