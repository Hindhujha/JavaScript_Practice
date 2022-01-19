//while loop
//1.take command line argument and prints a table of powers of 2 which are >=2^n until 256 reached
const prompt=require("prompt-sync")();
let n=prompt("ENTER A NUMBER: ");
let Pow=Math.pow(2,n)
console.log(" 2 Power ",n,"is ",Pow)
let i=n;
while(Pow<=256)
{  
    i++;
console.log("2 power ",i,"is :",Math.pow(2,i));  
if(i>=8)
{
    break;
}
}
console.log("End")
//---------------------------------------------------------------------------
//2.find magic number until its reached
let num=prompt("Enter a number between 1 to 100: ");
let temp=num/2//20
    while(temp<=num)
    {
      
        if(num!=temp)
        {
         console.log(temp);
        }
        else if(num==temp)
        {
            console.log("Magic number id reached to: ",temp);
        }
        temp++;   
    }
    console.log("End")
//----------------------------------------------------
//3.flip coin till either heads or tails wins 11 times

const is_Head=1;
const is_Tail=0;
let count_Head=0;
let count_Tail=0;
let count=0;
while(count<=11)
{
    let coin=Math.floor(Math.random()*2);
    if(coin==is_Head && count_Head<=11)
    {
    count_Head=count;
    }
    else
    {
    count_Tail=count;
    }
    count++;

}
if(count_Head==11)
{
console.log("Head wins",count_Head);
}
else{
console.log("Tail Wins",count_Tail);
}
//--------------------------------------------------------------------------
//4.gambling
let initial_money=100;
let count_won=0;
let count_bet=0;
while(initial_money<=200)
{
    let gamble=Math.floor(Math.random()*2);
    if(gamble==1)
    {
     initial_money+=gamble;
     count_won++;
    }
    else
    {
     initial_money-=gamble;
    }
    count_bet++;
}
console.log("No.of.bets made: ",count_bet);
console.log("No.of.times won: ",count_won);