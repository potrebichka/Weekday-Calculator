import {newDate} from "../src/weekday";

describe ("newDate", () => {
    test("should return correct day of the weekl", () => {
        let testDay = new Date('2019-11-14');
        expect(newDate(testDay)).toEqual("Thurs");
         testDay = new Date('November 14, 1950');
         const dictionary = {0: "Sunday", 1: "Mon", 2: "Tues", 3: "Wed", 4: "Thurs", 5: "Fri", 6: "Sat"};
         let checkDay = dictionary[testDay.getUTCDay()];
        expect(newDate(testDay)).toEqual(checkDay);
        testDay = new Date('November 14, 1700');
        checkDay = dictionary[testDay.getUTCDay()];
        expect(newDate(testDay)).toEqual(checkDay);
        testDay = new Date('November 14, 2100');
        checkDay = dictionary[testDay.getUTCDay()];
        expect(newDate(testDay)).toEqual(checkDay);
    });
});

