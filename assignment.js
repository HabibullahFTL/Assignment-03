// https://github.com/HabibullahFTL/Assignment-03
// ============== Task - 01: Kilometer To Meter Converter ============== 
function kilometerToMeter(kilometer) {
    var isNum = typeof kilometer;
    // Checking, is it number or not
    if (isNum == 'number') {
        return kilometer * 1000;
    }else {
        return "You have entered a wrong value";
    }
}
var meter = kilometerToMeter(14);
console.log(meter);


// ============== Task 02: Budget Calculator ============== 
function budgetCalculator(watch, phone, laptop) {
    // Defining Variables
    var isWatchCount = typeof watch;
    var isPhoneCount = typeof phone;
    var isLaptopCount = typeof laptop;
    var watchPrice, phonePrice, laptopPrice;

    // Checking watch count validation & calculating
    if (isWatchCount == 'number' && watch > 0) {
        watchPrice = watch * 50;
    }else{
        return "You have entered a wrong value 1";
    }

    // Checking phone count  validation & calculating
    if (phone == undefined) {
        phonePrice = 0;
    }else if (isPhoneCount == 'number' && phone > 0) {
        phonePrice = phone * 50;
    }else{
        return "You have entered a wrong value 2";
    }

    // Checking laptop count  validation & calculating
    if (laptop == undefined) {
        laptopPrice = 0;
    }else if (isLaptopCount == 'number' && laptop > 0) {
        laptopPrice = laptop * 50;
    }else{
        return "You have entered a wrong value 3";
    }

    return watchPrice + phonePrice + laptopPrice;
}
var budget = budgetCalculator(9, 3, 8);
console.log(budget);


// ============== Task 03: Hotel Cost Calculation ==============
function hotelCost(bookingDays) {
    var isNum = typeof bookingDays;
    // Firts Checking the right value
    if (bookingDays > 0 && isNum == 'number') {
        // Now checking & Calculating the cost
        if (bookingDays <= 10) {
            var cost = bookingDays * 100;
            return cost;
        } else if (bookingDays <= 20) {
            var firstTenDaysCost = 10 * 100;
            var remainingDays = bookingDays - 10;
            var remainingDaysCost = remainingDays * 80;
            return firstTenDaysCost + remainingDaysCost;
        } else if (bookingDays > 20) {
            var firstTenDaysCost = 10 * 100;
            var nextTenDaysCost = 10 * 80;
            var remainingDays = bookingDays - 20;
            var remainingDaysCost = remainingDays * 50;
            return firstTenDaysCost + nextTenDaysCost + remainingDaysCost;
        }
    } else {
        return "You have entered a wrong value";
    }
}
var cost = hotelCost(5);
console.log(cost);


// ============== Task 04: Hotel Cost Calculation ==============
function megaFriend(friendList) {
    var isArray = typeof friendList;
    // Checking, is it array or not. Also, is it empty or not.
    if (friendList.length > 0 && isArray == 'object') {
        // Setting a default value
        var largeName = friendList[0];
        var largeNameLength = friendList[0].length;
        for (let i = 0; i < friendList.length; i++) {
            // Checking Large Name
            if (largeNameLength < friendList[i].length) {
                largeName = friendList[i];
                largeNameLength = friendList[i].length;
            }
        }
        return largeName;
    } else {
        return "You have entered a wrong value";
    }
}
var friendList = ["Rahim","Mijanur","MunMun Akter","Piash","Habibullah Bahar"];
console.log(megaFriend(friendList));
