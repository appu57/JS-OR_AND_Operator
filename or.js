function func1(){
    console.log("Inside func1");
    return 0 ; //false 
}

function func2(){
    console.log("Inside func2");
    return false;
}

const value = func1()|| func2();
console.log(value);//false

//The func1() returns 0 which is false , in JS when OR operator is used the compiler keeps executing functions from left to right until true values are found
//in above expression func1() returns false so it also executes func2() , but here func2() also returns false so it tries to move towrds right because true value is still not returned
//since there is no method or function to be executed the execution stops there and assigns value false to "value"

//if func1() would return 1 or true , func2() would never be executed and value of "value" would be "1" or "true"

"###############################################################################################################################################################"

function funcA(){
    return console.log("Inside func1");
}

function funcB(){
    return console.log("Inside func2");
}
const value1=funcA()|| funcB();  
console.log(value1);//undefined because return type of console is undefined and undefined is a falsy value hence the funcB() is also executed


"###############################################################################################################################################################"