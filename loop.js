//Looping statements
//1.take command line argument and prints a table of powers of 2 which are >=2^n
const prompt=require("prompt-sync")();
let n=prompt("ENTER A NUMBER: ");
let Pow=Math.pow(2,n)
console.log(" 2 Power ",n,"is ",Pow)
for(i=0;i<=Pow;i++)
{ 
    if(i<=n)
    {
console.log("2 power ",i,"is :",Math.pow(2,i))
    }
   
}
//---------------------------------------------
//2.print n harmoic number
let n1=prompt("ENTER A NUMBER: ");
temp=0;
for(i=1;i<=n1;i++)
{
    temp+=parseFloat(1)/i;
}
console.log("Nth Harmonic Number is: ",temp.toFixed(4))*/
//------------------------------------------------------------
//3.prime or not
let n2=prompt("Enter a number: ");
let is_Prime=true;
if(n2>1)
{
    for(i=2;i<=n2/2;i++)
    {
        if(n2%i == 0)
        {
            is_Prime=false
            break;
        }
    } 
    if(is_Prime==true)
    console.log(n2," IS A PRIME NUMBER");
    else if(is_prime==false)
    console.log(n2," IS NOT A PRIME NUMBER");
}
else
{
console.log(n2,"IS NEITHER PRIME NOR COMPOSITE");
}
   
//----------------------------------------------------
//4.prime number within range
console.log(" find prime within a range : ");
let n3=parseInt(prompt("Enter range 1: "));
let n4=parseInt(prompt("Enter range 2: "));
for(x = n3; x <= n4; x++)
{
  let temp2=0;
  for(y = 2; y < x; y++)
  {
      if(x % y == 0)
      {
          temp2=1;
          break;
      }
  }
  if((x > 1) && (temp2 == 0))
  {
    console.log(x);
  }
}
//------------------------------------------------
//5.factorial
let fact=prompt("Enter a input to find factorial: ");
let val=1;
if(fact==0 || fact==1)
{
    console.log(fact," IS A FACTORIAL OF ",fact)
}
else
{
for(i = fact; i >= 1; i--)
{
val=val*i;
}
console.log(val,"IS A FACTORIAL OF ",fact);
}
//-------------------------------------------------------------
//6.compute factors of a number N using prime factorization method
let N=prompt("Enter a number to find their factors: ");
for(i=1;i*i<=N;i++)
{
    if(N%i==0)
    {
    console.log(i);
    }
}

