var fizzBuzz = function(n) {
    const answer = [];
    
    for (let i = 1; i <= n; i++) {
        let str = "";
        
        if (i % 3 === 0) str += "Fizz";
        if (i % 5 === 0) str += "Buzz";
        
        answer.push(str || i.toString());
    }
    
    return answer;
};