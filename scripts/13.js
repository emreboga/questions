/*
Wordament game:
Implement a function to return all possible words from a matrix.
*/

var q13 = (function() {
    return {
        exec: function() {
            return processData(input.wordament2);
        }
    };

    function processData(input) {
        var input_array = input.split('\n');
        var matrix = [];
        for (var i = 1, l = input_array.length; i < l; i++) {
            var line = input_array[i];
            matrix.push(line.split(''));
        }
        return getAllWords(matrix);
    }

    function getAllWords(matrix) {
        var len = matrix[0].length;
        var allWords = [];
        var words = [];
        var visited = [];

        for (var m = 0; m < len; m++) {
            for (var n = 0; n < len; n++) {
                // reset visited map
                for (var i = 0; i < len; i++) {
                    visited[i] = [];
                    for (var k = 0; k < len; k++) {
                        visited[i][k] = false;
                    }
                }
                // get all words for a start position
                getWords(matrix, '', words, visited, m, n);
                // add to all words and reset for the next start point
                allWords = allWords.concat(words);
                words = [];
            }
        }
        return allWords;
    }

    function getWords(matrix, word, words, visited, x, y) {
        var len = matrix[0].length;

        // add current letter to the word
        word += matrix[x][y];
        words.push(word);
        // mark current cell as visited
        visited[x][y] = true;

        // possible coordinates for all neigbour positions
        var coors = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        for (var i = 0; i < coors.length; i++) {
            var x_new = x + coors[i][0];
            var y_new = y + coors[i][1];
            if (x_new >= 0 && x_new < len && y_new >= 0 && y_new < len && !visited[x_new][y_new]) {
                getWords(matrix, word, words, visited, x_new, y_new);
            }
        }

        // reset visited cell as returning from it
        visited[x][y] = false;
    }
}());
