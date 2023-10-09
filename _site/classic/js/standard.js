function switchDisplayDiv(id) {
    var divElem = document.getElementById(id);
    if (divElem != null && divElem.style != null) {
        if (divElem.style.display === null || divElem.style.display === "")
            divElem.style.display = "none";
        else
            divElem.style.display = "";
    }
}