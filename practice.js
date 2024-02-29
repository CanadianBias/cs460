function withoutX(str) { // trims off leading and trailing x's
    // check first char to see if =x
    if (str[0] === 'x') {
        str=str.substring(1); // .substring() function takes one or two parameters, index and length
    }
    // console.log(str.at(-1)); // .at() method allows negative indexing of strings and arrays
    // check last char to see if =x
    if (str.at(-1) === 'x') {
        str=str.substring(0,str.length-1);
    }
    // return string without leading/trailing x
    return str;
}
function isPrime(num) { // returns a boolean if a given parameter number is prime or not prime
    if (num <= 1) {
        return "Neither Prime nor Not Prime";
    }
    else if (num%2 === 0 && num!=2) {
        return false;
    } else {
        for (i=3;i<=Math.sqrt(num);i+=2) { // Math.sqrt returns the square root of a number
            if (num%i === 0) {
                return false;
            }
        }
    }
    return true
}
function sumX2Y(x,y) { // returns of sum of range of two numbers
    let sum=0;
    if (x <= y) {
        for (i=x;i<=y;i++) {
            sum+=i;
        }
    } else if (x > y) {
        for (i=y;i<=x;i++) {
            sum+=i;
        }
    }
    return sum;
}
function comboString(s1,s2) { // Given 2 strings, a and b, return a string of the form short+long+short, 
    // with the shorter string on the outside and the longer string on the inside. 
    // The strings will not be the same length, but they may be empty (length 0).
    if (s1.length > s2.length) {
        return (s2 + s1 + s2);
    } else if (s2.length > s1.length) {
        return (s1 + s2 + s1);
    }
}
function left2(str) {
    try {
        return (str.substring(2) + str.substring(0,2));
    } catch (error) {
        console.log(error);
    }
}
function has77(intArray) {
    for (i=0;i<intArray.length;i++) {
        if (i > 0) {
            if (intArray[i] == 7 && intArray[i-1] == 7) {
                return true;
            }
        }
        if (i > 1) {
            if (intArray[i] == 7 && intArray[i-2] == 7) {
                return true;
            }
        }
        if (intArray[i] == 7 && intArray[i+1] == 7) {
            return true;
        }
        if (intArray[i] == 7 && intArray[i+2] == 7) {
            return true;
        }
    }
    return false;
}
function more14(intArray) {
    let oneCount = 0;
    let fourCount = 0;
    for (i=0;i<intArray.length;i++) {
        if (intArray[i] == 1) {
            oneCount++;
        } else if (intArray[i] == 4) {
            fourCount++;
        }
    }
    if (oneCount > fourCount) {
        return true;
    } else {
        return false;
    }
}
function pre4(intArray) {
    if (intArray.length != 0) {
        return intArray.slice(0,intArray.indexOf(4));
    }
}
function collatz(num) {
    let counter=0
    while (num > 1) {
        if (num%2 != 0) {
            num=(num*3)+1;
        } else if (num%2 == 0) {
            num/=2;
        }
        counter++;
    }
    return counter;
}
// Error ridden - probably best to do on own time
function histogram(intArray) {
    let aResult = [];
    for (i=0;i<intArray.length;i++) {
        aResult[intArray[i]]+=1;
    }
    return aResult
}