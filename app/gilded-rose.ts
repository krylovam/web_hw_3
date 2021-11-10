import Item from './Item'
import {ItemNameEnum} from './ItemNameEnum'

const MAX_QUALITY = 50;
const MIN_VALUE = 0;


export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() : Array<Item> {
        for (let item of this.items) {
            switch (item.name) {
                case ItemNameEnum.agedBrie:
                    item.sellIn -= 1;
                    if (item.sellIn < MIN_VALUE && item.quality < MAX_QUALITY-1) {
                        item.quality += 2;
                    }
                    else if (item.quality < MAX_QUALITY) {
                        item.quality += 1;
                    }
                    break
                case ItemNameEnum.sulfuras:
                    break
                case ItemNameEnum.backstagePasses:
                    item.sellIn -= 1;
                    if (item.sellIn < MIN_VALUE) {
                        item.quality = MIN_VALUE;
                        break;
                    }
                    if (item.quality  >= MAX_QUALITY) {
                        break;
                    }
                    if (item.sellIn < 5) {
                        item.quality = Math.min(item.quality + 3, MAX_QUALITY);
                        break;
                    }
                    if (item.sellIn < 10) {
                        item.quality = Math.min(item.quality + 2, MAX_QUALITY);
						break;
                    }
                    item.quality += 1;
					break;                    
                case ItemNameEnum.conjured:
                    item.sellIn -= 1;
                    if (item.sellIn < MIN_VALUE && item.quality > MIN_VALUE + 1) {
                        item.quality -= 2;
                    }
                    else if (item.quality > MIN_VALUE) {
                        item.quality -= 1;
                    }
                    break
				default:
                    item.sellIn -= 1;
                    if (item.sellIn < MIN_VALUE && item.quality > MIN_VALUE + 1) {
                        item.quality -= 2;
                    }
                    else if (item.quality > MIN_VALUE) {
                        item.quality -= 1;
                    }
                    break
            }
        }

        return this.items;
    }
}