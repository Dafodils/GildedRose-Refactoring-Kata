import { Item } from "./Item";

export class LegendaryItem implements Item{
    name : string;
    quality: number;
    sellIn: number;

    constructor(name?:string, quality?: number, sellIn?: number){
        this.name = name ?? 'Legendaryfoo';
        this.quality = quality ?? 50;
        this.sellIn = sellIn ?? 2;
     }

    qualityUpdate(){}
}