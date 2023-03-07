const Num = [12,58,65,85,35,75,6,24];
var min = Num[0];

for(let i = 0;i < Num.length;i++)
{
    if(Num[i] < min)
    {
        min = Num[i];
    }
}

console.log(`Minimum Element Of Array = ${min}.`);