/*
You are given an integer, N. Write a program to determine if N is an element of the Fibonacci Sequence.
Constraints
1≤ N ≤10^10
*/

var q8 = (function() {
    var fiboCache = [0, 1];

    return {
        exec: function() {
            return processData(input.isFibo);
        }
    };

    function processData(input) {
        var input_array = input.split('\n');
        var result = '';
        for (var i = 1, l = input_array.length; i < l; i++) {
            var line = input_array[i];
            result += processSingleLine(line) + '\n';
        }
        return result;
    }

    function processSingleLine(input) {
        var result = 'IsNotFibo';
        var fibo1, fibo2, fiboNext;
        var number = parseInt(input);
        var length = fiboCache.length;
        if (fiboCache[length - 1] >= number) {
            // we already generated upto this number
            for (var i = 0; i < fiboCache.length; i++) {
                if (fiboCache[i] === number) {
                    result = 'IsFibo';
                    break;
                }
            }
        } else {
            // we havent generated fibonacci to this number yet
            fibo1 = fiboCache[length - 2];
            fibo2 = fiboCache[length - 1];
            fiboNext = fibo1 + fibo2;
            fiboCache.push(fiboNext);
            while (fiboNext < number) {
                fibo1 = fibo2;
                fibo2 = fiboNext;
                fiboNext = fibo1 + fibo2;
                fiboCache.push(fiboNext);
            }
            if (fiboNext === number) {
                result = 'IsFibo';
            }
        }
        return result;
    }
}());
