/*
Print all combinations of a given string.
*/

var q11 = (function() {
    return {
        exec: function() {
            return processData(input.wordCombination);
        }
    };

    function processData(input) {
        var input_array = input.split('\n');
        var result = '';
        for (var i = 1, l = input_array.length; i < l; i++) {
            var line = input_array[i];
            result += combinations('', line, []) + '\n';
        }
        return result;
    }

    function combinations(prefix, word, a) {
        if (!prefix && !word) {
            return;
        }
        if (!word) {
            a.push(prefix);
        } else {
            combinations(prefix + word.charAt(0), word.substring(1), a);
            combinations(prefix, word.substring(1), a);
        }
        return a;
    }
}());
