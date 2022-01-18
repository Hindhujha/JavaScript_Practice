//SEQUENCE PRACTICE PROBLEMS
//1.Random fn to get single digit
let single=Math.floor(Math.random()*10);
console.log("Random single digit is",single);

//2.Dice number between 1 to 6
let dice=Math.floor((Math.random(1,6)*(6-1+1)+1));
console.log("Dice Number between 1 to 6:",dice);

//3.Add 2 random dice number
let dice2=Math.floor((Math.random(1,6)*(6-1+1)+1));42
console.log("Addition of 2 random dice number is",dice+dice2);

//4.read 5 random 2 digit,find sum and avg
let num1=Math.floor(Math.random()*100),num2=Math.floor(Math.random()*100),
    num3=Math.floor(Math.random()*100),num4=Math.floor(Math.random()*100),num5=Math.floor(Math.random()*100);
console.log("5 RANDOM 2 DIGIT NUMBERS ARE",num1,num2,num3,num4,num5);    
console.log("sum of 5 random 2 digit number is",num1+num2+num3+num4+num5);
console.log("Average is:",(num1+num2+num3+num4+num5)/5);

//5.Unit Conversion
let inch=42;
let inch_to_feet=42/12
console.log("42 Inches is",inch_to_feet,"feet");
let length=60,width=40;//in feet
let area_rectangle_infeet=length*width
console.log("Area of rectangle in Meter:",Math.round(area_rectangle_infeet/3.281));
let plots=25*Math.round(area_rectangle_infeet/3.281);
let inacres=(plots/4047);
console.log("25 Plots in acre is:",inacres.toFixed(2));

