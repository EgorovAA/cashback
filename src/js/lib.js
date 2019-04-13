export function calculateCashBack(regularCash, elevatedCash, specialOfferCash) {

    const regularPercent = 0.01;
    const elevatedPercent = 0.05;
    const specialPercent = 0.3;

    const cashback =(regularCash * regularPercent) + (elevatedCash * elevatedPercent) +(specialOfferCash*specialPercent);

    return cashback;

}