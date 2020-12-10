// let userName = prompt("What is your name?");
// console.log("welcome," + userName);
let userWord = prompt("Type one word you want to play");
let wordArr = userWord.split("");
let userNumber;
let direction;

getNum = () => {    
    while(true){
        userNumber = Number(prompt("Type number you'd like to push between -100 and 100"));
        if (userNumber < -100) {
            alert('Higher');
        }  else if (userNumber > 100) {
            alert('Lower');
        }   else {
            return userNumber;
        }
    } 
}
getNum();

getDirection = () => {
    direction = prompt("Type L or R for direction");
    direction.toUpperCase();
    console.log(direction);
    // while(true){
    //     if (direction === 'L') {
    //         direction = 'L'
    //     } else if (direction === 'R'){
    //         direction = 'R'
    //     } else {
    //         alert('please type L or R')
    //     }
    // }
}
getDirection();

pushL = () => {
    for( let i=0; i<userNumber; i++){
        wordArr.push(wordArr.shift());
    }
}
pushR = () => {
    for( let i=0; i<userNumber; i++){
        wordArr.unshift(wordArr.pop());
    }
}

push = () => {    
    if (direction == 'L'){
        pushL();
    } else if (direction == 'R'){
        pushR();
    } else {
        alert('what did you type??');
    }
}
push();

console.log(wordArr.join('') + ' ' + userNumber + ' ' + direction);






