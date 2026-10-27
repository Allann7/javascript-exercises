const reverseString = function(str) {
    
    let splited = str.split('');

    splited.reverse();

    return splited.join('');
};

// Do not edit below this line
module.exports = reverseString;
