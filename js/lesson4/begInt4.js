/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/

// solution

function persistence(num) {
    //code me
    let prod = num
    let persistance = 0;
    while (prod >= 10) {
        prod = 1;
        num_string = String(num);
        num_array = num_string.split('');
        num_array.forEach((val) => {
            prod *= Number(val);
        });
        num = prod;
        persistance += 1;
    }
    return persistance;
}

// other solution
// function persistence(num) {
//     var times = 0;
    
//     num = num.toString();
    
//     while (num.length > 1) {
//       times++;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
    
//     return times;
// }
