// Day 28
// ### Question 1: Armstrong Number Checker (Without Using split)
// Problem: Check if a given number is an Armstrong number. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
// JHint:
// 1. First, count the number of digits in the given number.
// 2. Then, iterate through each digit by extracting it one by one.
// 3. Raise each digit to the power of the total number of digits and accumulate the result.
// 4. Finally, compare the accumulated sum to the original number to determine if it is an Armstrong number.
function is_Arm_strong(num) {
    var original_Num = num;
    var sum = 0;
    var digit_Count = 0;
    var temp = num;
    while (temp > 0) {
        digit_Count++;
        temp = Math.floor(temp / 10);
    }
    temp = num;
    while (temp > 0) {
        var last_Digit = temp % 10;
        var power = 1;
        for (var i = 0; i < digit_Count; i++) {
            power *= last_Digit;
        }
        sum += power;
        temp = Math.floor(temp / 10);
    }
    return sum === original_Num;
}
;
console.log(is_Arm_strong(153)); // Output: true
console.log(is_Arm_strong(123)); // Output: false
// ### Question 2: Find the LCM (Least Common Multiple)
// Problem: Find the Least Common Multiple (LCM) of two numbers. LCM is the smallest number that is a multiple of both given numbers.
// Hint:
// 1. Calculate the Greatest Common Divisor (GCD) of the two numbers using the Euclidean algorithm.
// 2. Use the GCD to find the LCM with the formula:
//    \[
//    \text{LCM}(a, b) = \frac{|a \times b|}{\text{GCD}(a, b)}
//    \]
function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}
console.log(lcm(15, 20)); // Output: 60
console.log(lcm(7, 5)); // Output: 35
