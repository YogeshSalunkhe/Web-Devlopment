var ArrNum = [21,10,56,20,10,56,10,95,23,57,10,11,10];
var Cnt = 0;
for(let i  = 0;i < ArrNum.length;i++)
{
    if(ArrNum[i] === 10)
    {
        Cnt++;
    }
}

console.log('Count Of 10 =');
console.log(Cnt);