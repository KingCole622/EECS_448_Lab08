function funcChanger() {
    var borCol = document.getElementById("border-class");
    var newBorCol = document.getElementById("border-color").value;

    if (newBorCol != "") {
        borCol.style.borderColor = newBorCol;
    }

    var borWid = document.getElementById("border-class");
    var newBorWid = document.getElementById("border-width").value;
    if (newBorWid != "") {
        borWid.style.borderWidth = newBorWid;
    }

    var backCol = document.getElementById("border-class");
    var newBackCol = document.getElementById("background-color").value;
    if (newBackCol != "") {
        borWid.style.backgroundColor = newBackCol;
    }

}