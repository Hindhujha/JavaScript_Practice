//SELECTION PRACTICE PROBLEMS
//1.Print min and max value
let num1=Math.floor(Math.random()*1000),num2=Math.floor(Math.random()*1000),num3=Math.floor(Math.random()*1000),
num4=Math.floor(Math.random()*1000),num5=Math.floor(Math.random()*1000);
console.log(num1,num2,num3,num4,num5)
let Minimum=Math.min(num1,num2,num3,num4,num5)
let Maximum=Math.max(num1,num2,num3,num4,num5)
console.log("Minimum Value is:",Minimum)
console.log("Maximum value is:",Maximum)

//2.Day and Month between march 20 to june 20
const prompt=require("prompt-sync")();
let Date=prompt("ENTER A DATE FROM 1 TO 31: ");
let Month=prompt("ENTER A MONTH: ");
if(Month=="march" )
{
    if(Date>=20)
    {
        console.log("True")
    }
    else 
    {
        console.log("False")
    }
}
else if(Month=="june")
{
    if(Date<=20)
    {
        console.log("True")
    }
    else 
    {
        console.log("False")
    }
}
else if(Month=="april" || Month=="may")
{
    console.log("True")  
}
else
{
    console.log("False");
}
//-------------------------------------------
//3.Leap year or not
let year=prompt("ENTER A YEAR: ");
if((year%400 == 0 && year%4==0)|| (year%100==0))
{
    console.log(year,"IS A LEAP YEAR")
}
else 
{
    console.log(year,"IS NOT A LEAP YEAR")
}


//4.Head/Tail
let head=Math.floor(Math.random()*2)
let tail=Math.floor(Math.random()*2)
console.log("HEAD VALUE IS: ",head);
console.log("TAIL VALUE IS: ",tail);
if(head==1 && tail==0)
{
console.log("ITS A HEAD");
}
else if(head==0 && tail==1)
{
    console.log("ITS A TAIL");
}
else
{
    console.log("NOT FOUND");
}
//---------------------
//5.Read a single digit number & write it in word
let num=Math.floor(Math.random()*10)
console.log("Number is",num)
if(num==0)
console.log("ZERO")
else if(num==1)
console.log("ONE")
else if(num==2)
console.log("TWO")
else if(num==3)
console.log("THREE")
else if(num==4)
console.log("FOUR")
else if(num==5)
console.log("FIVE")
else if(num==6)
console.log("SIX")
else if(num==7)
console.log("SEVEN")
else if(num==8)
console.log("EIGHT")
else
console.log("NINE")
//-----------------------------------------------------
//6.Display the week day
if(num==0)
console.log("SUNDAY")
else if(num==1)
console.log("MONDAY")
else if(num==2)
console.log("TUESDAY")
else if(num==3)
console.log("WEDNESDAY")
else if(num==4)
console.log("THURSDAY")
else if(num==5)
console.log("FRIDAY")
else if(num==6)
console.log("SATURDAY")
else
console.log("DAY DOES NOT EXIST");

//7.Read a number and display a unit
let unit=prompt("ENTER 1 OR 10 OR 100 OR 1000 OR 10000:" )
if(unit==1)
console.log("ONE")
else if(unit==10)
console.log("TEN")
else if(unit==100)
console.log("HUNDRED")
else if(unit==1000)
console.log("THOUSAND")
else if(unit==10000)
console.log("TEN THOUSAND")
else
console.log("NOT FOUND")
//----------------------------------------------------
//8.Arithmetic operation and find min & max
let a=prompt("Enter a number:"),b=prompt("Enter a number:"),c=prompt("Enter a number:");
let operation1=Math.floor(a+(b*c))
console.log(operation1);
let operation2=Math.floor((a%b)+c)
console.log(operation2);
let operation3=Math.floor(c+(a/b))
console.log(operation3);
let operation4=Math.floor((a*b)+c)
console.log(operation4);
 let Min=Math.min(operation1,operation2,operation3,operation4)
 let Max=Math.max(operation1,operation2,operation3,operation4)
console.log("Minimum Value is:",Min)
console.log("Maximum value is:",Max)

//case statements
//1.Read a single digit number & display week days
let digit=Math.floor(Math.random()*10)
console.log("NUMBER IS:",digit)
switch(digit)
{
case 0:
console.log("SUNDAY");
break;
case 1:
console.log("MONDAY");
 break;
 case 2:
 console.log("TUESDAY");
 break;
 case 3:
 console.log("WEDNESDAY");
 break;
 case 4:
console.log("THURSDAY");
break;   
case 5:
console.log("FRIDAY");
break;   
case 6:
console.log("SATURDAY");
break;   
default:
    console.log("DAY NOT FOUND");
}
//2.Read a single digit number & display it by word
switch(digit)
{
case 0:
console.log("ZERO");
break;
case 1:
console.log("ONE");
 break;
 case 2:
 console.log("TWO");
 break;
 case 3:
 console.log("THREE");
 break;
 case 4:
console.log("FOUR");
break;   
case 5:
console.log("FIVE");
break;   
case 6:
console.log("SIX");
break;   
case 7:
console.log("SEVEN");
break;  
case 8:
console.log("EIGHT");
break;    
default:
    console.log("NINE");
}
//--------------------------------
//3.Read a number and display a unit

 console.log("ENTER 1 OR 10 OR 100 OR 1000 OR 10000:" )
 let units=prompt();
switch(units)
{
case 1:
units="ONE"
break;
case 10:
units="TEN";
 break;
 case 100:
units="HUNDRED";
 break;
 case 1000:
units="THOUSAND";
 break;
 case 10000:
units="TEN THOUSAND";
break;   
default:
    units="not found";
    break;
}
console.log(" ",units);

//------------------------------------------
//4.Unit conversion
let feet=prompt("ENTER A FEET VALUE: ");
console.log("FEET TO INCH: ",Math.floor(feet*12));
console.log("FEET TO METER:",Math.floor(feet/3.281));
let inch=prompt("ENTER A INCH VALUE: ");
console.log("INCH TO FEET: ",Math.floor(inch/12));
console.log("METER TO FEET: ",Math.floor(inch*3.281));