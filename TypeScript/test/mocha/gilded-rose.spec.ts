import { expect } from 'chai';
import { GildedRose } from '@/gilded-rose'
import { CommonItem} from '@/CommonItem'
import { LegendaryItem } from '@/LegendaryItem'
import { AgingItem } from '@/AgingItem';


var COMMON_ITEM:CommonItem = new CommonItem();
var LEGENDARY_ITEM:LegendaryItem = new LegendaryItem();
var AGING_ITEM:AgingItem = new AgingItem();
var GUILDED_ROSE:GildedRose = new GildedRose(new Array(COMMON_ITEM,LEGENDARY_ITEM,AGING_ITEM));

describe('new CommonItem', () => {
  it('should foo', () => {
    expect(GUILDED_ROSE.items.some( x => x.name == 'foo'))
  });
});

describe('CommonItem on the next day', () => {
  it('should degrade', () => {
    const currentQuality = COMMON_ITEM.quality;
    GUILDED_ROSE.nextDay();
    expect(currentQuality == 50 && COMMON_ITEM.quality == 49)
  });
});
