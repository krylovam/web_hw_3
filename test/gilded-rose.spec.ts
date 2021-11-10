import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import Item from "../app/Item";

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });
	
	it('default sellIn', function() {
        const gildedRose = new GildedRose([ new Item('foo', 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
    });
	
	it('default quality', function() {
        const gildedRose = new GildedRose([ new Item('foo', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });
	
	it('Aged Brie quality #1', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
    });
	
	it('Aged Brie quality #2', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(12);
    });
	
	it('Aged Brie quality #3', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });
	
	it('Aged Brie sellIn', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
    });
	
	it('Sulfuras quality', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(10);
    });
	
	it('Sulfuras sellIn', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(10);
    });
	
	it('Conjured sellIn', function() {
        const gildedRose = new GildedRose([ new Item( 'Conjured', 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
    });
	
	it('Backstage sellIn', function() {
        const gildedRose = new GildedRose([ new Item( 'Backstage passes to a TAFKAL80ETC concert', 11, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(10);
    });
	
	it('Backstage quality # 1', function() {
        const gildedRose = new GildedRose([ new Item( 'Backstage passes to a TAFKAL80ETC concert', 11, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
    });
	
	it('Backstage quality # 2', function() {
        const gildedRose = new GildedRose([ new Item( 'Backstage passes to a TAFKAL80ETC concert', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(12);
    });

});