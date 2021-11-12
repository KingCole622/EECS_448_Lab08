function subBoxes() {
    var newDiv = document.createElement("div"); //create div
    newDiv.id = "subBox"; //assign id
    var currentDiv = document.getElementById("project-Holder");
    var currDiv = document.getElementById("blank");
    var a = document.createElement('a');
    a.target = '_blank';
    a.href = "Exercise 1/Password Validator.html";
    a.innerText = "Exercise 1";
    newDiv.appendChild(a);
    currentDiv.insertBefore(newDiv, currDiv);

    var newDiv = document.createElement("div"); //create div
    newDiv.id = "subBox"; //assign id
    var a = document.createElement('a');
    a.target = '_blank';
    a.href = "Exercise 2/Slide Show.html";
    a.innerText = "Exercise 2";
    newDiv.appendChild(a);
    currentDiv.insertBefore(newDiv, currDiv);

    var newDiv = document.createElement("div"); //create div
    newDiv.id = "subBox"; //assign id
    var a = document.createElement('a');
    a.target = '_blank';
    a.href = "Exercise 3/Profile Page.html";
    a.innerText = "Exercise 3";
    newDiv.appendChild(a);
    currentDiv.insertBefore(newDiv, currDiv);

    var newDiv = document.createElement("div"); //create div
    newDiv.id = "subBox"; //assign id
    var a = document.createElement('a');
    a.target = '_blank';
    a.href = "Exercise 4/CSS manipulation.html";
    a.innerText = "Exercise 4";
    newDiv.appendChild(a);
    currentDiv.insertBefore(newDiv, currDiv);
}

function labBoxes() {
    var newDivs = document.createElement("div"); //create div
    newDivs.id = "box-1"; //assign id
    newDivs.onclick = function() { subBoxes() };
    var currentDivs = document.getElementById("project-Holder");
    var currDivs = document.getElementById("blank");
    var newText = document.createTextNode("Lab 08");
    newDivs.appendChild(newText);
    currentDivs.insertBefore(newDivs, currDivs);
}