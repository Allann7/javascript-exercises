const repeatString = function(str, num) {
    if(num >= 0){
        let connect = [];

        for(let i = 0; i < num; i++){
            connect.push(str);
        }

        return connect.join('');
    }
    else{
        return `ERROR`;
    }
};



// Do not edit below this line
module.exports = repeatString;
