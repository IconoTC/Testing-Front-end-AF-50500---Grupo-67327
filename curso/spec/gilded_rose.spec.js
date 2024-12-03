const {Shop, Item} = require("../src/gilded_rose.js");

describe.only("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  describe("Normal Product", () => {
    it.each([
      [11, 10, 10, 9],
      [7, 1, 6, 0],
  //		[5, -5, 4, 0],
      [0, 3, -1, 1],
    ])('init[sellIn: %i, quality: %i], result[sellIn: %i, quality: %i]', (sellInInit, qualityInit, sellIn, quality) => {
      const name = 'Normal Product'
      const gildedRose = new Shop([new Item(name, sellInInit, qualityInit)]);

      const items = gildedRose.updateQuality();

      expect(items[0]).toMatchObject({name, sellIn, quality})
    });
  })
  describe("Aged Brie", () => {
    it.each([
      [2, 0, 1, 1],
      [-1, 48, -2, 50],
      [2, 50, 1, 50],
      [-2, 49, -3, 50],
      [1, 1, 0, 2],
    ])('init[sellIn: %i, quality: %i], result[sellIn: %i, quality: %i]', (sellInInit, qualityInit, sellIn, quality) => {
      const name = 'Aged Brie'
      const gildedRose = new Shop([new Item(name, sellInInit, qualityInit)]);

      const items = gildedRose.updateQuality();

      expect(items[0]).toMatchObject({name, sellIn, quality})
    });
  })
  describe("Sulfuras, Hand of Ragnaros", () => {
    it.each([
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [-1, 1, -1, 1],      
    ])('init[sellIn: %i, quality: %i], result[sellIn: %i, quality: %i]', (sellInInit, qualityInit, sellIn, quality) => {
      const name = 'Sulfuras, Hand of Ragnaros'
      const gildedRose = new Shop([new Item(name, sellInInit, qualityInit)]);

      const items = gildedRose.updateQuality();

      expect(items[0]).toMatchObject({name, sellIn, quality})
    });
  })
  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    it.each([
      [11, 0, 10, 1],
      [7, 1, 6, 3],
      [7, 49, 6, 50],
      [5, 3, 4, 6],
      [0, 3, -1, 0],
      [-1, 3, -2, 0],      
    ])('init[sellIn: %i, quality: %i], result[sellIn: %i, quality: %i]', (sellInInit, qualityInit, sellIn, quality) => {
      const name = 'Backstage passes to a TAFKAL80ETC concert'
      const gildedRose = new Shop([new Item(name, sellInInit, qualityInit)]);

      const items = gildedRose.updateQuality();

      expect(items[0]).toMatchObject({name, sellIn, quality})
    });
  })
  describe("Conjured Mana Cake", () => {
    it.each([
      [11, 10, 10, 8],
      [7, 1, 6, 0],
      [-5, 10, -6, 6],
      [0, 3, -1, 0],      
    ])('init[sellIn: %i, quality: %i], result[sellIn: %i, quality: %i]', (sellInInit, qualityInit, sellIn, quality) => {
      const name = 'Conjured Mana Cake'
      const gildedRose = new Shop([new Item(name, sellInInit, qualityInit)]);

      const items = gildedRose.updateQuality();

      expect(items[0]).toMatchObject({name, sellIn, quality})
    });
  })
  it('instantánea', () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    
      // This Conjured item does not work properly yet
      //new Item("Conjured Mana Cake", 3, 6),
    ];
    
    const days = 30;
    const gildedRose = new Shop(items);
    const result = []
    for (let day = 0; day < days + 1; day++) {
      gildedRose.updateQuality();
      result.push({day, items: items.map(item => ({...item}))})
    }
    expect(result).toMatchSnapshot()
  })
});
