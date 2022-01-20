//1.find C/F in a range or not
const prompt=require("prompt-sync")();
let temp=prompt("Enter a temperature in CELSIUS: ")
degF(temp)
if(degF>=32 && degF<=212)
{
    console.log("FARENHEIT IS WITHIN FREEZING POINT & BOILING POINT")
}
else
{
    console.log("FARENHEIT IS NOT WITHIN THE FREEZING POINT & BOILING POINT")
}
function degF(temp)
{
    degF=(temp*9/5)+32;
    console.log("FARENHEIT IS: ",degF)
}
//-----------------------------------------------------
//2.check 2 numbers palindrome or not
console.log("ENTER 2 NUMBERS TO CHECK PALINDROME OR NOT:")
function num1(a)
{
    temp1=a;
     while(a>0)
    {
        rem=a%10;
       a=parseInt(a/10);
       count=(count*10)+rem;
    }
    if(count==temp1)
     {
        console.log( temp1," IS PALINDROME")
     }
    else
    {
     console.log(temp1,"IS NOT PALINDROME")
    }
}

let x=prompt("Enter a number: ");
let y=prompt("Enter a number: ");
let rem,temp1,count=0;
num1(x)
num1(y)

//--------------------------------------------------------------------
//3.check number is prime then palindrome or not
console.log("enter a number to check prime as well as palindrome or not ");
function Prime()
{
  if(N>1)
   {
      for(i=2;i<=N/2;i++)
      {
          if(N%i == 0)
           {
            is_Prime=false;
            break;   
           }     
      } 
      if(is_Prime==true)
       console.log(N,"IS A PRIME NUMBER");
      else
       console.log(N,"IS NOT A PRIME NUMBER");
    }
}

function Palindrome()
{
    temp2=N;
     while(N>0)
     {
       r=N%10;
       N=parseInt(N/10);
       sum=(sum*10)+r;
     }
    if(sum==temp2)
    {
    
    Prime() 
    console.log("ITS  A PALINDROME NUMBER");
    }
    else
    console.log("ITS NOT A PALINDROME NUMBER");
  
}

let N=prompt("Enter a number: ");
let is_Prime=true,r,sum=0,temp2;
Prime();
Palindrome();


