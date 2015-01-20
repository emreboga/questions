/*
Utopian Tree:
The Utopian tree goes through 2 cycles of growth every year.
The first growth cycle occurs during the spring, when it doubles in height.
The second growth cycle occurs during the summer, when its height increases by 1 meter.
Now, a new Utopian tree sapling is planted at the onset of the spring. Its height is 1 meter.
Can you find the height of the tree after N growth cycles?
*/

var q7 = (function() {
    return {
        exec: function() {
            return processData(input.utopianTree);
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
        var r = input % 2;
        var n = (input - r) / 2;
        return r > 0 ? 2 * (2 * Math.pow(2, n) - 1) : (2 * Math.pow(2, n) - 1);
    }
}());
