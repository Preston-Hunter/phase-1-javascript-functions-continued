// code your solution here
function saturdayFun(arg1 = 'roller-skate'){

    return "This Saturday, I want to " + arg1 + "!";

}

function mondayWork(arg1 = 'go to the office'){
    return "This Monday, I will " + arg1 + ".";
}

function wrapAdjective(arg1 = '*'){

    return function innter(arg2 = 'special'){
        return "You are " + arg1 + arg2+ arg1 +"!"; 
    }
}

