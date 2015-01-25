/*
Print all permutations of a given string.
*/

var q10 = (function() {
    return {
        exec: function() {
            return processData(input.wordPermutation);
        }
    };

    function processData(input) {
        var input_array = input.split('\n');
        var result = '';
        for (var i = 1, l = input_array.length; i < l; i++) {
            var line = input_array[i];
            result += permutations(line) + '\n';
        }
        return result;
    }

    function permutations(word) {
        if (word.length <= 1) {
            return [word];
        }
        var perms = permutations(word.substring(1));
        var firstChar = word.substring(0, 1);
        var result = [];
        for (var i = 0, l = perms.length; i < l; i++) {
            var perm = perms[i];
            for (var k = 0, m = perm.length; k <= m; k++) {
                result.push(perm.substring(0, k) + firstChar + perm.substring(k, m));
            }
        }
        return result;
    }
}());
