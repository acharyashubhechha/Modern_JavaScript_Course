/*let js = 'amazing';
console.log(40-8+23-10);

console.log('shubehchha');
console.log(23);

let firstName = 'Shubhechha';
console.log(firstName);

// Variable
let person = 'Shubhechha';
let PI = 3.1415;


//DATATYPES
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Shubham");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);

//  LET, CONST, VAR
let age = 30;
age = 31;

const birthYear = 1999;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = "acharya";
console.log(lastName);


//ARITHMETIC OPERATORS
const now = 2035;
const ageShubh = now - 2005;
const ageShubham = now - 1999;
console.log(ageShubh, ageShubham);

console.log(ageShubh * 2, ageShubh / 2, 2 ** 3 );
//2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "Shubhechha";
const lastName = "Acharya";
console.log(firstName +' '+ lastName);

//ASSIGNMENT OPERATORSS
let x = 10 + 5; //15
x+=10; //x = x+10 = 25
x *= 4; // x = x* 4 = 100
x++; //x = x+1
x--;
x--;
console.log(x);

// COMPARISION OPERATORS
console.log(ageShubh >= ageShubham); //>,<,>=,<=
console.log(ageShubh >= 18);

const isFullAge = ageShubh >= 18;

console.log(now - 2005 > now - 1999);


//CODING CHALLENGE #1
////// DATA 1 //////
const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon  = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / (heightJhon * heightJhon);
const markHigherBMI = BMIMark > BMIJhon;

console.log(BMIMark, BMIJhon, markHigherBMI);

////// DATA 2 //////
const massMark2 = 95;
const heightMark2 = 1.88;
const massJhon2 = 85;
const heightJhon2  = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJhon2 = massJhon2 / (heightJhon2 * heightJhon2);
const markHigherBMI2 = BMIMark2 > BMIJhon2;

console.log(BMIMark2, BMIJhon2, markHigherBMI2);


////// STRINGS / LITERALS //////
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm "+ firstName + ',a '+ (year - birthYear)+ ' years old '+job+'!';
console.log(jonas);

const jonasNew = `I'm ${firstName},a ${year-birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just regular string.`);

console.log('String with \n\
    multiple\n\
    lines');

console.log(`String with 
    multiple
    lines`);


////// if-else //////
const age = 15;
if(age >= 18){
    console.log("Shubhechha can start driving license🚗");
}else{
    const yearsLeft = 18 - age;
    console.log(`Shubhechha is too young.Wait another ${yearsLeft} years 😣`);
}

//////  CHALLENGE 2 ////////
const massMark2 = 95;
const heightMark2 = 1.88;
const massJhon2 = 85;
const heightJhon2  = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJhon2 = massJhon2 / (heightJhon2 * heightJhon2);
console.log(BMIMark2, BMIJhon2)

if(BMIMark2 >  BMIMark2){
    console.log(`Mark's BMI ${BMIMark2} is higher than Jhon's!`)
}else{  
    console.log(`Jhon's BMI ${BMIJhon2} is higher than Mark's!`)
}


/////TYPE CONVERSION 
const inputYear ='1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

console.log(String(23), 23);

///// TYPE COERCION
console.log('I am '+23+' years old');
console.log('I am ' +'23'+ ' years old');
console.log('I am ' +String(23)+ ' years old');

console.log('23' - '10' - '3');
console.log('23' / '2');

let  n = '1'+ 1;
n = n-1;
console.log(n);


// falsy and truthy value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Shubhechha'));
console.log(Boolean({}));

const money = 0;
if(money){
    console.log("Don't spend it all;)");
}else{
    console.log("You shoud get a job!")
}

let height =0 ;
if (height){
    console.log("YAY! Height is defined");
}else{
    console.log("Height is undefined")
}
    

const age = 18;
if(age === 18) console.log("You just became an adult:D(STRICT)");
// if(age == 18) console.log("You just became an adult:D(LOOSE)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23){
    console.log("COOL! 23 is cool number.");
}else if(favourite==7) {
    console.log("7 is also cool number!");
}else{
    console.log("Number is 23 or 7");
}
    

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense );

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if(shouldDrive){
//     console.log("Shubhechha is able to drive!");
// }else{
//     console.log("Someone else should drive...")
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

const shouldDrive = hasDriverLicense && hasGoodVision;
if(hasDriverLicense && hasGoodVision && !isTired){
    console.log("Shubhechha is able to drive!");
}else{
    console.log("Someone else should drive...")
}


//////////  CHALLENGE #3    //////////

// const scoreDolpins = (96 + 108+ 89) /3;
// const scoreKolas = (88 + 91 + 110) / 3;
// console.log(scoreDolpins,scoreKolas);

// if(scoreDolpins > scoreKolas){
//     console.log('Doplin wins the tropy🏆');
// }else if(scoreKolas > scoreDolpins){
//     console.log('Kolas wins the tropy🏆');
// }else if(scoreDolpins ===scoreKolas){
//     console.log("It's a draw!!");
// }

////// BONUS 1
const scoreDolpins = (97 + 112+ 81) /3;
const scoreKolas = (109 + 95 + 86) / 3;
console.log(scoreDolpins,scoreKolas);

if(scoreDolpins > scoreKolas && scoreDolpins >= 100){
    console.log('Doplin wins the tropy🏆');
}else if(scoreKolas > scoreDolpins && scoreKolas>=100){
    console.log('Kolas wins the tropy🏆');
}else if(scoreDolpins ===scoreKolas && scoreDolpins>=100 && scoreKolas>=100){
    console.log("It's a draw!!");
}else{
    console.log("No one wins the tropy!")
}
    */

////  SWITCH STATEMENT  
const day = 'tuesday';

switch(day){
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meeetup');
        break;
    case 'Tuesday':
        console.log("Prepare theory videos");
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examaple');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("Enjoy the weekend:D");
        break;
    default:
        console.log("Not valid day")
}


if ( day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meeetup');
}else if( day === 'tuesday'){
    console.log("Prepare theory videos");
}else if( day === 'wednesday' || day === 'thursday'){
    console.log('Write code examaple');
}else if( day === 'friday'){
    console.log('Record videos');
}else if( day === 'saturday' || day === 'sunday'){
    console.log("Enjoy the weekend:D");
}else{
    console.log("Not valid day")
}