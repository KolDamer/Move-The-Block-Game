// create an input field in html and accept values from user
// on the click of the submit button 
// value appears in console

// WAY 1

//  let name = prompt('Enter your name');
// console.log(name)

// WAY 2

// let nameTitle;

// document.querySelector('p').classList.add('hello')

// document.getElementById('buttonfxn').onclick=()=>{
//     nameTitle=document.getElementById('inputvalue').value;
//     console.log(nameTitle);
//     document.querySelector('p').classList.remove('hello')

    

// }

// HYPOTENUSE CALCULATOR
// hypotenuse= sqrt (a^2 + b^2 )

// WAY 1
// let a;
// let b;
// let h;
// a=Number(prompt('Enter first side'));
// b=Number(prompt('Enter second side'));
// h=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log(Math.round(h));

// WAY 2
// let a;
// let b;
// let h;
// document.querySelector('.fsbtn2').onclick=()=>{
//     a=document.querySelector('.fs').value;
//     a=Number(a)
//     b=document.querySelector('.fs2').value;
//     b=Number(b)
//     h=Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
//     document.querySelector('.thirdside').innerHTML='Third side: '+ h;

// }

// COUNTER
// MY WAY
// let counter=document.querySelector('.display');
// let value=0;
// document.querySelector('.decrease').onclick=()=>{

//         counter.innerHTML=--value;
// }

// document.querySelector('.reset').onclick=()=>{
//     value=0
//     counter.innerHTML=value;
// }

// document.querySelector('.increase').onclick=()=>{

//     counter.innerHTML=++value;
// }

//CHECKBOXES
// let subCheck=document.querySelector('#subscribe')
// document.querySelector('#submit').onclick=()=>{
//     subCheck.checked?console.log('Your file will download shortly'):console.log('You have not subscribed')
// }


// let visaCheck=document.querySelector('#visacheck')
// let paypalCheck=document.querySelector('#paypalcheck')
// let masterCheck=document.querySelector('#mastercheck')
// document.querySelector('#cardsubmit').onclick=()=>{
//         if (visaCheck.checked){
//             console.log('Paying with visa')
//         }
//         else if (paypalCheck.checked){
//             console.log('Paying with paypal')
//         }
//         else if (masterCheck.checked){
//             console.log('Paying with mastercard')
//         }
//         else {
//             console.log('Select a card')
//         }
// }


// GRADING SYSTEM
// using switches
// let grade=document.querySelector('#gradeinput')
// document.querySelector('#remarksbtn').onclick=()=>{
    
//     switch(grade.value.toUpperCase()){
//         case'A':
//             console.log('You did great')
//             break;
//         case 'B':
//             console.log('You did good')
//             break;
//         case 'C':
//             console.log('You did ok')
//             break;
//         case 'D':
//             console.log('You barely passed')
//             break;
//         case 'F':
//             console.log('You FAILED!🤕')
//             break;
                                        

//         default:
//             console.log(grade.value ,'is not a letter grade')
//     }


// }

//USERNAME
// let userName="";
// while (userName==""||userName==null){
//     userName=prompt('Enter your name: ');
// }
// console.log ('hello', userName)


// BREAK
// for(let i=1;i<=20;i+=1){
//     if(i==13){
//         break;
//     }
//     console.log(i)
// }

// RETURN STATEMENTS
// area of a rectangle
// let width=prompt('Enter the width:')
// let height=prompt('Enter the height:')

// let Area= getArea(width, height)
// console.log(Area)

// function getArea(w, h){
//     let result=w * h
//     return result;
// }


// TEMP CONVERTER
// to celsius (temp - 32) *(5/9)
// to farenheit (temp * 9/5) + 32

// LOOPING THROUGH AN ARRAY
// M1
// let prices=[1,2,4,5,6]

// for(let i=0;i<prices.length; i+=1){
//     console.log(prices[i]);
// }

// M2
// let prices=[1,19,20,74]

// for (let price of prices){
//     console.log(price)
// }

// let cars=["toyota", "honda", "ferrari", "lambo", "cheve"]
// cars=cars.sort().reverse();

// for(let car of cars){
//     console.log(car)
// }

// for a 2d array, make sure you call them with
// the index of the row first then the column

// let food1=["fufu","banku", "yam", "beans"]
// let food2=["ampesi","plantain", "jollof","rice"]

// food1.push(...food2);
// console.log(food1)

// REST PARAMETERS
// let a=5
// let b=8
// let c=10
// console.log(sumNos(a, b, c));

// function sumNos(...numbers) {
//         let total=0;
//         for(let number of numbers){
//             total+=number;
//         }
//         return total;
// }

// CALLBACKS
// callbacks are basically a fxn in another
// main(5, 6, displayTotal);

// function main(x, y, callback){
//     let total=x+y;
//     callback(total)
// }

// function displayTotal(total){
//     console.log(total);
// }