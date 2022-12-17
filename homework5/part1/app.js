document.getElementById("myTitle").innerText = `No! Cool page`;
let paragraphs = document.getElementsByClassName("paragraph");
paragraphs[0].innerText = `This is not and exercise. It's really easy`;
paragraphs[1].innerText = `Yeah, It's super easy`;
document.getElementsByTagName("text")[0].innerText = `It's not about selecting elements and`;
let parent = document.getElementsByClassName("anotherDiv")[0].nextElementSibling;
parent.firstElementChild.innerText = `This IS changed`;
parent.lastElementChild.innerText = `This is also`;