
export default class TabValues {

    constructor(I_sizeTab,I_minRange,I_maxRange){
        this.A_tabTemp = createTab();
        this.subscribers = [];
    }

    getRandomInt(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    createTab(min, max ,size){
        let A_tabTemp=[];
        for (let I_index = 0; I_index<size;I_index++){
            var I_val = getRandomInt(min,max);
            A_tabTemp[I_index] = I_val;
        }
        return A_tabTemp;
    }

    getValueById(index){
        return this.A_tabTemp[index];
    }

    subscribe(subscriber){
        this.subscribers.push(subscriber);
    }


}