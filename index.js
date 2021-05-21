/* Write a function named "convertFahrToCelsius" that takes a single parameter  and convert
it to celsius */

function convertFahrToCelsius(val) {
    if (typeof val === "string" || typeof val === "number") {
         var num = parseInt(val);

         var answer = ((num - 32) / 1.8);
         var answerDec = answer.toFixed(4);
           return `'${answerDec}'`
    };

    if (Array.isArray(val)){return `[${val}] is not a valid number but a/an array`};
    if (typeof val === "object") {
        var value = JSON.stringify(val);
        return `${value} is not a valid number but a/an object`}
};

console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius([1,2,3,4]));
console.log(convertFahrToCelsius({obj:1, name: "sarah"}));
console.log(convertFahrToCelsius({temp:0}));



/* Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates and array
of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" "oh", then returns 
the resulting array */
var output = [];

function checkYuGiOh(n) {
    if (isNaN(n)) {
        output.push('invalid parameter:${n}')
    }else 
        for(var count = 1; count <= n; count++) {
            if (count % 2 === 0 && count % 3 === 0 && count % 5 ===0) {
                output.push("yu-gi-oh");
            }
             else if (count % 2 === 0 && count % 3 === 0) {
                output.push("yu-gi");
            }
             else if (count % 2 === 0 && count % 5 === 0) {
                output.push("yu-oh");
             }
             else if (count % 3 === 0 && count % 5 === 0) {
                output.push("gi-oh");
             }
             else if (count % 2 === 0) {
                output.push("yu");
             }
             else if (count % 3 === 0) {
                 output.push("gi");
             }
             else if (count % 5 === 0) {
                 output.push("oh");
             }
             else {
                 output.push(count);
             }
        }

    console.log(output);
    return(output);
}

checkYuGiOh("5")
checkYuGiOh(10)
checkYuGiOh("fizzbuzz is meh")