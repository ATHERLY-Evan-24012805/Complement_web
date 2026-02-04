A_hist=[]

function createTab(){
    let A_tabTemp=[]
    for (let I_index = 0; I_index<20;I_index++){
        var I_val = getRandomInt(-10,40)
        A_tabTemp[I_index] = I_val
    }
    return A_tabTemp
}
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var I_indice = 0
function general(){
    A_tabTemp = createTab()
    console.log(A_tabTemp)
    /*O_Zone1.innerHTML = A_tabTemp[0]
    var id = setInterval(replaceNumber,2000,O_Zone1,A_tabTemp[1])*/
    var interval= setInterval(replaceNumber,2000,A_tabTemp)
    var intervalHistoric = setInterval(refreshHist, 2000)
}
function refreshHist(){
    const O_hist = document.getElementById("histories");
    console.log(O_hist.childNodes[4]);
    O_hist.childNodes[4].textContent = A_hist;
}
function replaceNumber(A_tabTemp){
    const O_Zone1 = document.getElementById("val1");
    let val = A_tabTemp[I_indice]
    A_hist.push(val);
    console.log(A_hist);
    O_Zone1.firstChild.textContent = val
    val = parseInt(val)
    if (val>=-10 && val<=0){
        O_Zone1.className = "borderBlue";
        O_Zone1.childNodes[1].textContent = " Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        //console.log(O_Zone1.childNodes[1]);        
        //console.log(O_Zone1.childNodes[3]);
        //console.log(O_Zone1.childNodes[4].classList);
        O_Zone1.childNodes[5].classList.remove("hidden");
        //O_Zone1.textContent +=O_Zone1.childNodes[1];
        //console.log(O_Zone1.childNodes[1]);
        //O_Zone1.firstChild.className = "";
    }
    if (val > 0 && val <=20){
        O_Zone1.childNodes[5].classList.add("hidden");
        O_Zone1.childNodes[1].textContent = ""
        O_Zone1.className = "borderGreen";
    }
    if (val > 20 && val <=30){
        O_Zone1.childNodes[5].classList.add("hidden");
        O_Zone1.childNodes[1].textContent = ""
        O_Zone1.className = "borderOrange";
    }
    if (val > 30 && val <=40){
        O_Zone1.className = "borderRed";
        O_Zone1.childNodes[1].textContent=" Caliente ! Vamos a la playa, ho hoho hoho !!"
        //O_Zone1.firstChild.className= "";
        O_Zone1.childNodes[5].classList.remove("hidden");

    }
    
    if (I_indice == 19 ){
        I_indice = 0
    }else{
        I_indice++
    }
}


var f = general()
console.log(f)

