document.body.style.backgroundColor = "red";

document.getElementById('title').style.backgroundColor = "blue";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML="Vayonator";

document.getElementById("favorites").innerHTML="Movie - Fight Club, TV Show - Arrested Devlopement, Food - Pizza";

document.getElementById("hometown").innerHTML="Tweed Heads, Australia";

document.getElementById("list").className = "listItem";

document.querySelector(".listItem").style.color = "yellow";

var img = document.createElement("img");
img.src = "jeff.jpg";

var src = document.getElementById("list");
src.appendChild(img)
