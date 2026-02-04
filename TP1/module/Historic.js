export default class Historic {
    constructor(){
        this.listVal = [];
    }

    addValue(I_val){
        this.listVal.push(I_val);
    }

    displayValue(place){
        place.textContent = this.listVal
    }
    getListValue(){
        return this.listVal;
    }
}