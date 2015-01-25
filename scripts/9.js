/*
*/

var q9 = (function() {
    return {
        exec: function() {
            return processData(input.angryChildren);
        }
    };

    function processData(input) {
        var input_array = input.split('\n');
        var k = parseInt(input_array[1]);
        var numbers = input_array.slice(2);
        numbers.sort(function(a, b) {
            return a - b;
        });
        var minUnfairness = numbers[numbers.length - 1] - numbers[0];
        for (var i = 0, l = numbers.length - k + 1; i < l; i++) {
            var unfairness = numbers[i + k - 1] - numbers[i];
            if (unfairness < minUnfairness) {
                minUnfairness = unfairness;
            }
        }
        return minUnfairness;
    }
}());
