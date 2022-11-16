import { Item } from "./Item";

export class CommonItem implements Item{
    name:string;
    quality:number;
    sellIn:number;

    constructor(name?:string, quality?: number, sellIn?: number){
        this.name = name ?? 'foo';
        this.quality = quality ?? 50;
        this.sellIn = sellIn ?? 15;
     }

    qualityUpdate(){
        this.quality--;
    }
}