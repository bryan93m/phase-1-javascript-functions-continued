function saturdayFun(declarations = 'roller-skate'){
    return `This Saturday, I want to ${declarations}!`;
}
function mondayWork(def = 'go to the office'){
    return `This Monday, I will ${def}.`
}
function wrapAdjective(result){
   return function(para = 'special'){
    return `You are ${result}${para}${result}!`
   }
}