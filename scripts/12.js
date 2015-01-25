/*
Implement a function to return the english phrase for a given positive integer below one million.
Example: input=234560, returns two hundred thirty four thousand fife hundred sixty
*/

var q12 = (function() {
    var oneToNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var twentyToNinety = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return {
        exec: function() {
            return processData(input.speakNumber);
        }
    };

    function processData(input) {
        var input_array = input.split('\n');
        var result = '';
        for (var i = 1, l = input_array.length; i < l; i++) {
            var line = input_array[i];
            result += speakNumber(line) + '\n';
        }
        return result;
    }

    function speakNumber(number) {
        var numberStr = number.toString();
        var len = numberStr.length;
        if (len > 3) {
            return speakHundreds(numberStr.substring(0, len - 3)) + ' thousand ' + speakHundreds(numberStr.substring(len - 3, len));
        } else {
            return speakHundreds(numberStr);
        }
    }

    function speakHundreds(number) {
        var numberStr = number.toString();
        if (number < 100) {
            return speakBelowHundred(number);
        } else {
            return oneToNineteen[parseInt(numberStr.charAt(0)) - 1] + ' hundred' + ' ' + speakBelowHundred(parseInt(numberStr.substring(1, 3)));
        }
    }

    function speakBelowHundred(number) {
        var numberStr = number.toString();
        var firstDigit = numberStr.charAt(0);
        var secondDigit = numberStr.charAt(1);
        if (number < 20) {
            return oneToNineteen[number - 1];
        }
        if (number >= 20 && number < 100) {
            return twentyToNinety[firstDigit - 2] + ' ' + oneToNineteen[secondDigit - 1];
        }
    }
}());
