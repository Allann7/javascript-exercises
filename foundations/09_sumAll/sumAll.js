const sumAll = function(val1, val2) {
    sum = [];
    
    if(!Number.isInteger(val1) || !Number.isInteger(val2)){
        return 'ERROR';
    }

    if(val1 < 0 || val2 <0 ){
        return 'ERROR'
    }

    if(val1 > val2){
        for(let i = val2; i <= val1; i++){
            sum.push(i)
        }
    }

    else if (val1 < val2){
        for(let i = val1; i <= val2; i++){
            sum.push(i)
        }
    }

    let result = sum.reduce((sum, current) => sum + current);

    console.log(result);

    return result;
};

// Do not edit below this line
module.exports = sumAll;
