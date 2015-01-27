/*
Given a sorted list of words, find the longest compound word in the list that is constructed by concatenating the words in the list.
For example, if the input list is: ['cat', 'cats', 'catsdogcats', 'catxdogcatsrat', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcat', 'ratcatdog', 'ratcatdogcat'].
Then the longest compound word is ‘ratcatdogcat’ with 12 letters. Note that the longest individual words are ‘catxdogcatsrat’ and ‘hippopotamuses’ with 14 letters, but they’re not fully constructed by other words.
Former one has an extra ‘x’ letter, and latter is an individual word by itself not a compound word. - See more at: http://www.ardendertat.com/2012/06/15/programming-interview-questions-28-longest-compound-word/#sthash.2C42i6wb.dpuf
*/

var q14 = (function() {
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
