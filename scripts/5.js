/*
Find Digits:
You are given an integer N.
Find the digits in this number that exactly divide N(division that leaves 0 as remainder) and display their count.
For N=24, there are 2 digits − 2 & 4. Both of these digits exactly divide 24. So our answer is 2.
*/

var q5 = (function() {
    return {
        exec: function() {
            return processData(input.digits);
        }
    };

    function processData(input) {
        // match each line and put in an array
        // process single line for each except the first line
        var input_array = input.split('\n');
        var result = '';
        for (var i = 1, l = input_array.length; i < l; i++) {
            var line = input_array[i];
            var c = processSingleLine(line);
            if (c > 0) {
                result += c + '\n';
            }
        }
        return result;
    }

    function processSingleLine(input) {
        // take mod 10 and get first digit
        // check if devides, increment count if so
        // devide input by 10 and floor to shift digits right
        // loop while input > 0
        var number = input;
        var count = 0;
        while (number > 0) {
            var digit = number % 10;
            if (input % digit === 0) {
                count += 1;
            }
            number = Math.floor(number / 10);
        }
        return count;
    }
}());
