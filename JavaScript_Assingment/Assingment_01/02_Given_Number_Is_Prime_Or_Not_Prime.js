var num = 5,Cnt = 0;

for(let i = 2;i < num;i++)
{
    if(num % i == 0)
    {
        Cnt++;
        break;
    }
    
}
if(Cnt > 0){
    console.log("Given Number Is Not Prime.");
}
else{
    console.log("Given Number Is Prime.");
}