import { Item } from "./Item";

 
 export class AgingItem implements Item{
    name: string;
    quality: number;
    sellIn: number;
    
     constructor(name?:string, quality?: number, sellIn?: number){
        this.name = name ?? 'Aging foo';
        this.quality = quality ?? 1
        this.sellIn = sellIn ?? 50
     }
     

    qualityUpdate(){
        if(this.quality < 50)
            this.quality++;
     }
}