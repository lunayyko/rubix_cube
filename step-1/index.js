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
    while(true){
        direction = prompt("Type L or R for direction");
        direction.toUpperCase();
        if (direction === 'L') {
            return directionNum = -1
        } else if (direction === 'R'){
            return directionNum = 1
        } else {
            alert('please type L or R')
        }
    }
}
getDirection();
console.log(direction)

userNumberAbs = Math.abs(userNumber);
console.log(userNumber)
console.log(userNumberAbs)

pushL = () => {
    for( let i=0; i<userNumberAbs; i++){
        wordArr.push(wordArr.shift());
    }
}
pushR = () => {
    for( let i=0; i<userNumberAbs; i++){
        wordArr.unshift(wordArr.pop());
    }
}

push = () => {    
    if (directionNum * userNumber < 0){
        pushL();
    } else if (directionNum * userNumber > 0){
        pushR();
    } else {
        alert('0 is null');
    }
}
push();

console.log(wordArr.join('') + ' ' + userNumber + ' ' + direction);






