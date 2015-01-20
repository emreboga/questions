/*
Given a list of non negative integers, arrange them such that they form the largest number.
For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.
Note: The result may be very large, so you need to return a string instead of an integer.
*/

var q4 = (function() {
    return {
        exec: function() {
            return largestNumber(input.intArray);
        }
    };

    function largestNumber(numbers) {
        if (typeof numbers === 'undefined' || numbers === null) {
            return '';
        }
        if (numbers.length === 1) {
            return numbers[0].toString();
        }

        numbers.sort(function(a, b) {
            var aStr = a.toString();
            var bStr = b.toString();
            if (aStr.length === bStr.length) {
                return a - b;
            } else {
                var count = 0;
                if (aStr.length > bStr.length) {
                    count = aStr.length;
                } else {
                    count = bStr.length;
                }

                for (var i = 0; i < count; i++) {
                    var aChar = aStr.charAt(i);
                    if (aChar === '') {
                        aChar = aStr.charAt(i % aStr.length);
                    }
                    var bChar = bStr.charAt(i);
                    if (bChar === '') {
                        bChar = bStr.charAt(i % bStr.length);
                    }
                    if (aChar !== bChar) {
                        return parseInt(aChar, 10) - parseInt(bChar, 10);
                    }
                }
                return 0;
            }
        });

        return numbers.reverse().join('');
    }
}());
