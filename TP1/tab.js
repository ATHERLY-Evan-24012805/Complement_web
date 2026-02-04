
buttonValue = document.getElementById("value");
buttonHistorique = document.getElementById("history");

buttonValue.addEventListener("click", function () {
    showtab("value");
});
buttonHistorique.addEventListener("click", function () {
    showtab("historic");
});




function showtab(S_idTab){
    console.log(S_idTab);

    if (S_idTab == "value"){
        document.getElementById("values").hidden = false;
        document.getElementById("histories").hidden = true;
    }
    else if (S_idTab == "historic"){
        document.getElementById("histories").hidden = false;
        document.getElementById("values").hidden = true;
    }    
}