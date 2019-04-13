import {calculateCashBack} from "../lib.js";


test('should return when cashback show regularCash addiction', () => {
    const regularCash = 10000;
    const elevatedCash = 0;
    const specialOfferCash = 0;

    const expected = 100;


    const result = calculateCashBack(regularCash, elevatedCash, specialOfferCash);

    expect(result).toBe(expected);
});

test('should return when cashback show elevatedCash addiction', () => {
    const regularCash = 0;
    const elevatedCash = 10000;
    const specialOfferCash = 0;

    const expected = 500;


    const result = calculateCashBack(regularCash, elevatedCash, specialOfferCash);

    expect(result).toBe(expected);
});

test('should return when cashback show elevatedCash addiction', () => {
    const regularCash = 0;
    const elevatedCash = 0;
    const specialOfferCash = 5000;

    const expected = 1500;


    const result = calculateCashBack(regularCash, elevatedCash, specialOfferCash);

    expect(result).toBe(expected);
});
