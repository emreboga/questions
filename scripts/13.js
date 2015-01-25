/*
Wordament game:
Implement a function to return all possible words from a matrix.
*/

var q13 = (function() {
    return {
        exec: function() {
            return processData();
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
    }
}());
