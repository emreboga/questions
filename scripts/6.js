/*
Flipping bits:
You will be given a list of 32-bits unsigned integers.
You are required to output the list of the unsigned integers you get by flipping bits in its binary representation (i.e. unset bits must be set, and set bits must be unset).
*/

var q6 = (function() {
    return {
        exec: function() {
            return processData(input.unsignedIntegers);
        }
    };

    function processData(input) {
        var allOnes = Math.pow(2, 32) - 1;
        var input_array = input.split('\n');
        var result = '';
        for (var i = 1, l = input_array.length; i < l; i++) {
            var line = input_array[i];
            var flipped = allOnes - parseInt(line);
            result += flipped + '\n';
        }
        return result;
    }
}());
