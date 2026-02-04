import * as TabValues from "./TabValues.js";
import * as Historic from "./Historic.js";

class Main {
    constructor(){
        this.valuesTab = new TabValues(sizeTab,Valmin,Valmax); 
        this.index = 0
        this.intervalle = setInterval(() => {replaceNumber(this.index);refreshHist;},2000,A_tabTemp);
        this.historic = new Historic();
    }

    replaceNumber(index){
        const O_Zone1 = document.getElementById("val1");
        let I_val = this.valuesTab[index];
        this.historic.addValue(I_val);
        O_Zone1.firstChild.textContent = val
        val = parseInt(val)
        if (val>=-10 && val<=0){
            O_Zone1.className = "borderBlue";
            O_Zone1.childNodes[1].textContent = " Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            O_Zone1.childNodes[5].classList.remove("hidden");
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
            O_Zone1.childNodes[5].classList.remove("hidden");
        }
        if (this.index == 19 ){
            this.index = 0;
        }else{
            this.index++;
        }
    }
    refreshHist(){
    const O_hist = document.getElementById("histories");
    console.log(O_hist.childNodes[4]);
    O_hist.childNodes[4].textContent = A_hist;
}

}