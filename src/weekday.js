export let newDate = (date) => {   
    //Take the last two digits of the year.
    let result = date.getUTCFullYear() % 100;
    //Divide by 4, discarding any fraction.
    result = Math.floor(result / 4);
    //Add the day of the month.
    result = date.getUTCDate() + result;
    const monthKey = {"0":1, "1":4, "2":4, "3":0, "4":2,"5":5, "6":0,"7":3,"8":6,"9":1,"10":4,"11":6};
    //Add the month's key value: JFM AMJ JAS OND 144 025 036 146
    result = monthKey[date.getUTCMonth()] + result;
    //subtract 1 for January or February of a leap year.
    if ((date.getUTCMonth() === "0" || date.getUTCMonth() === "1") && leapYear(date)) {
        result -= 1;
    }
    //For a Gregorian date, add 0 for 1900's, 6 for 2000's, 4 for 1700's, 2 for 1800's; for other years, add or subtract multiples of 400.
    let twoFirstDigitsOfYear = Math.floor(date.getUTCFullYear() / 100); 
    while (twoFirstDigitsOfYear > 20 || twoFirstDigitsOfYear < 17) {
        if (twoFirstDigitsOfYear > 20) {
            twoFirstDigitsOfYear -= 4;
        } else {
            twoFirstDigitsOfYear += 4; 
        }
    }
    switch (twoFirstDigitsOfYear) {
        case 19:
            break;
        case 20:
            result += 6;
            break;
        case 17:
            result += 4;
            break;
        case 18:
            result += 2;
            break;
        default:
            
    }
    //Add the last two digits of the year.
    result += date.getUTCFullYear() % 100;
    //Divide by 7 and take the remainder.
    result = result % 7;
    const dictionary = {1: "Sunday", 2: "Mon", 3: "Tues", 4: "Wed", 5: "Thurs", 6: "Fri", 0: "Sat"};
    result = dictionary[result];
    return result;
};

var leapYear = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  };